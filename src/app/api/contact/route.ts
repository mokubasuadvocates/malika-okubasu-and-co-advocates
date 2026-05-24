import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';
import { Redis } from '@upstash/redis';

const isValidEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value.trim());

// Initialize Redis if environment variables are present
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

// Simple in-memory rate limiter fallback
// Note: This is best-effort only. On serverless platforms like Vercel,
// each function invocation is isolated, so this will not persist across requests.
const rateLimitStore = new Map<
  string,
  { count: number; resetTime: number }
>();

const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 3; // 3 submissions per window

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

async function checkRateLimit(ip: string): Promise<boolean> {
  if (redis) {
    try {
      const key = `rate-limit:${ip}`;
      const count = await redis.incr(key);
      if (count === 1) {
        await redis.pexpire(key, RATE_LIMIT_WINDOW);
      }
      return count <= RATE_LIMIT_MAX;
    } catch (error) {
      console.warn("Redis rate limit error, falling back to memory:", error);
    }
  }

  // Fallback to in-memory rate limiting
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  record.count += 1;
  if (record.count > RATE_LIMIT_MAX) {
    return false;
  }

  return true;
}

// Sanitize input to prevent email header injection
function sanitizeForEmail(value: string): string {
  return value.trim().replace(/[\r\n]/g, ' ');
}

// Count URLs in text
function countUrls(text: string): number {
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
  const matches = text.match(urlRegex);
  return matches ? matches.length : 0;
}

async function verifyTurnstile(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return true; // No verification needed if not configured
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);

    // Check rate limit
    const isAllowed = await checkRateLimit(clientIp);
    if (!isAllowed) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const subjectInput = String(body.subject || '').trim();
    const message = String(body.message || '').trim();
    const consent = Boolean(body.consent);
    const companyWebsite = String(body.companyWebsite || '').trim();
    const turnstileToken = String(body.turnstileToken || '').trim();

    // Honeypot check
    if (companyWebsite) {
      // Return generic error to not reveal honeypot
      return NextResponse.json(
        { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
        { status: 400 }
      );
    }

    // Strict validation
    if (!fullName) {
      return NextResponse.json(
        { success: false, error: 'Full name is required.' },
        { status: 400 }
      );
    }

    if (fullName.length > 100) {
      return NextResponse.json(
        { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (email.length > 120) {
      return NextResponse.json(
        { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
        { status: 400 }
      );
    }

    if (phone && phone.length > 40) {
      return NextResponse.json(
        { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
        { status: 400 }
      );
    }

    if (subjectInput && subjectInput.length > 150) {
      return NextResponse.json(
        { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required.' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: 'Consent is required.' },
        { status: 400 }
      );
    }

    // URL spam detection
    const urlCount = countUrls(subjectInput) + countUrls(message);
    if (urlCount > 2) {
      return NextResponse.json(
        { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
        { status: 400 }
      );
    }

    // Turnstile verification if configured
    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY) {
      if (!turnstileToken) {
        return NextResponse.json(
          { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
          { status: 400 }
        );
      }

      const isValidTurnstile = await verifyTurnstile(turnstileToken);
      if (!isValidTurnstile) {
        return NextResponse.json(
          { success: false, error: 'Your message could not be sent. Please email us directly at legal@mokubasuadvocates.com.' },
          { status: 400 }
        );
      }
    }

    // Sanitize for email headers
    const sanitizedFullName = sanitizeForEmail(fullName);
    const sanitizedPhone = sanitizeForEmail(phone);
    const sanitizedSubject = sanitizeForEmail(subjectInput);

    const mailSubject = sanitizedSubject
      ? `Website Inquiry: ${sanitizedSubject}`
      : 'New Website Inquiry';

    const transport = nodemailer.createTransport({
      host: process.env.M365_SMTP_HOST,
      port: Number(process.env.M365_SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.M365_SMTP_USER,
        pass: process.env.M365_SMTP_PASSWORD,
      },
    });

    const emailBody = `Full Name: ${sanitizedFullName}\nEmail: ${email}\nPhone: ${sanitizedPhone}\nSubject: ${sanitizedSubject}\nMessage:\n${message}\n\nConsent accepted: Yes\nSubmitted from: mokubasuadvocates.com`;

    await transport.sendMail({
      from: '"Malika Okubasu Website" <legal@mokubasuadvocates.com>',
      to: process.env.CONTACT_TO_EMAIL || 'legal@mokubasuadvocates.com',
      replyTo: email,
      subject: mailSubject,
      text: emailBody,
    });

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Message could not be sent.' },
      { status: 500 }
    );
  }
}
