"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
import { OFFICIAL_LINKEDIN_URL } from "../constants/social";

declare global {
  interface Window {
    turnstile: any;
  }
}

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
    companyWebsite: "",
    turnstileToken: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const hasTurnstile =
    typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!hasTurnstile || typeof window === "undefined") return;

    const loadTurnstile = () => {
      if (window.turnstile && turnstileContainerRef.current) {
        if (turnstileWidgetId.current === null) {
          try {
            turnstileWidgetId.current = window.turnstile.render(
              turnstileContainerRef.current,
              {
                sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
                theme: "light",
              }
            );
          } catch (error) {
            console.error("Turnstile render error:", error);
          }
        }
      }
    };

    const script = document.querySelector(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );
    if (script) {
      loadTurnstile();
    } else {
      const newScript = document.createElement("script");
      newScript.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      newScript.async = true;
      newScript.defer = true;
      newScript.onload = loadTurnstile;
      document.head.appendChild(newScript);
    }
  }, [hasTurnstile]);

  const validateEmail = (value: string) =>
    /^\S+@\S+\.\S+$/.test(value.trim());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionMessage(null);
    setSubmissionError(null);

    const trimmedData = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      consent: formData.consent,
      companyWebsite: formData.companyWebsite.trim(),
      turnstileToken: formData.turnstileToken,
    };

    const newErrors: Record<string, string> = {};
    if (!trimmedData.fullName) newErrors.fullName = "Full name is required";
    if (!trimmedData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(trimmedData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!trimmedData.message) newErrors.message = "Message is required";
    if (!trimmedData.consent)
      newErrors.consent = "You must agree to continue";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Get Turnstile token if available
    let turnstileToken = "";
    if (hasTurnstile && window.turnstile && turnstileWidgetId.current !== null) {
      try {
        turnstileToken = window.turnstile.getResponse(turnstileWidgetId.current) || "";
      } catch (error) {
        console.error("Error getting Turnstile response:", error);
      }
    }

    try {
      const payload = {
        ...trimmedData,
        turnstileToken,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Message could not be sent.");
      }

      setSubmissionMessage("Thank you. Your message has been sent successfully.");
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
        companyWebsite: "",
        turnstileToken: "",
      });

      // Reset Turnstile
      if (hasTurnstile && window.turnstile && turnstileWidgetId.current !== null) {
        try {
          window.turnstile.reset(turnstileWidgetId.current);
        } catch (error) {
          console.error("Error resetting Turnstile:", error);
        }
      }
    } catch (error) {
      console.error("Contact form submission failed", error);
      setSubmissionError(
        "Sorry, your message could not be sent. Please email us directly at legal@mokubasuadvocates.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-soft-blue border-b border-brand-border py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Contact us"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-heading mb-6 leading-tight tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg lg:text-xl text-body leading-relaxed">
              We're here to help. Reach out to discuss your legal needs and
              discover how our team can provide the guidance and support you
              require.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Details */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-8 leading-tight">
                Get In Touch
              </h2>

              <div className="flex flex-col gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-heading flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-heading mb-1">Address</div>
                    <p className="text-body">
                      5th Avenue Suites, 5th Avenue Ngong Road.
                      <br />
                      Suite No. 6, 4th Floor
                      <br />
                      P.O. Box 25926 - 00603.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-heading flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-heading mb-1">Phone</div>
                    <a
                      href="tel:+254141397048"
                      className="text-body hover:text-link hover:underline"
                    >
                      +254 141 397 048
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-heading flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-heading mb-1">Email</div>
                    <a
                      href="mailto:legal@mokubasuadvocates.com"
                      className="text-body hover:text-link hover:underline"
                    >
                      legal@mokubasuadvocates.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="w-5 h-5 text-heading flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-heading mb-1">LinkedIn</div>
                    <a
                      href={OFFICIAL_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body hover:text-link hover:underline"
                    >
                      Malika Okubasu & Company Advocates
                    </a>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="mb-8">
                Get Directions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {/* Map Placeholder */}
              <div className="w-full h-[300px] bg-soft-blue border border-brand-border rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Map location"
                  className="w-full h-full object-cover grayscale opacity-60"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="bg-soft-blue p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-heading mb-2">
                  Send us a message
                </h2>
                <p className="text-body mb-8">
                  We'll respond as soon as possible.
                </p>

                {submissionError && (
                  <div className="mb-6 rounded-md border border-error/20 bg-error/10 px-4 py-3 text-sm text-error">
                    {submissionError}
                  </div>
                )}

                {submissionMessage && (
                  <div className="mb-6 rounded-md border border-brand-blue/20 bg-white px-4 py-3 text-sm text-heading">
                    {submissionMessage}
                  </div>
                )}

                {isSubmitted ? (
                  <div className="bg-white p-6 border-l-4 border-brand-blue">
                    <h3 className="font-bold text-heading mb-2">Thank you!</h3>
                    <p className="text-body">
                      Your message has been received. We'll get back to you
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-bold text-heading mb-2"
                      >
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          handleChange("fullName", e.target.value)
                        }
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.fullName
                            ? "border-error"
                            : "border-form-border"
                        } focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2`}
                      />
                      {errors.fullName && (
                        <p className="text-sm text-error mt-1">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-heading mb-2"
                      >
                        Email <span className="text-error">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.email ? "border-error" : "border-form-border"
                        } focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2`}
                      />
                      {errors.email && (
                        <p className="text-sm text-error mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-heading mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-form-border focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-bold text-heading mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          handleChange("subject", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-white border border-form-border focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-heading mb-2"
                      >
                        Message <span className="text-error">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.message ? "border-error" : "border-form-border"
                        } focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 resize-none`}
                      />
                      {errors.message && (
                        <p className="text-sm text-error mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Consent */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          name="consent"
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) =>
                            handleChange("consent", e.target.checked)
                          }
                          className="mt-1 w-4 h-4 border-form-border text-link focus:ring-brand-blue"
                        />
                        <span className="text-sm text-body">
                          I agree to the processing of my personal data for the
                          purpose of responding to my inquiry
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-sm text-error mt-1">
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {/* Honeypot Field */}
                    <input
                      name="companyWebsite"
                      type="text"
                      value={formData.companyWebsite}
                      onChange={(e) =>
                        handleChange("companyWebsite", e.target.value)
                      }
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    />

                    {/* Turnstile */}
                    {hasTurnstile && (
                      <div ref={turnstileContainerRef} className="mb-4" />
                    )}

                    <Button
                      type="submit"
                      variant="solid"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
