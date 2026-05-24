import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, absoluteUrl } from "@/constants/seo";

const description = "Cookie Policy for Malika Okubasu & Company Advocates.";
const url = absoluteUrl("/cookie-policy");

export const metadata: Metadata = {
  title: "Cookie Policy",
  description,
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: `Cookie Policy | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Cookie Policy | ${SITE_NAME}`,
    description,
  },
};

export default function CookiePolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <h1 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl">
          Cookie Policy
        </h1>
        <p className="mb-12 text-sm text-secondary-text">
          Last Updated: May 2026
        </p>

        <div className="prose prose-lg max-w-none text-body">
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">1. Introduction</h2>
            <p className="mb-4">
              Malika Okubasu & Company Advocates (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies on our website (mokubasuadvocates.com). This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how you can manage your cookie preferences.
            </p>
            <p className="mb-4">
              This policy should be read alongside our{" "}
              <Link href="/privacy-policy" className="text-navy font-semibold hover:text-gold-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
                Privacy Policy
              </Link>
              , which explains how we use your personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">2. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used by website owners to make their websites work securely and more efficiently, as well as to provide reporting information and enhanced functionality.
            </p>
            <p className="mb-4">
              Cookies set by the website owner (in this case, Malika Okubasu & Company Advocates) are called &quot;first-party cookies.&quot; Cookies set by parties other than the website owner are called &quot;third-party cookies.&quot; Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., analytics and interactive content).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">3. Types of Cookies We Use</h2>
            <p className="mb-4">
              Our website uses the following categories of cookies:
            </p>
            
            <div className="space-y-6">
              <div className="rounded-md border border-navy/10 p-5">
                <h3 className="mb-2 text-xl font-bold text-heading">A. Necessary Cookies</h3>
                <p className="mb-0 text-sm">
                  These cookies are essential for the website to function properly and cannot be disabled in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
                </p>
              </div>

              <div className="rounded-md border border-navy/10 p-5">
                <h3 className="mb-2 text-xl font-bold text-heading">B. Functional Cookies</h3>
                <p className="mb-0 text-sm">
                  These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, some or all of these services may not function properly.
                </p>
              </div>

              <div className="rounded-md border border-navy/10 p-5">
                <h3 className="mb-2 text-xl font-bold text-heading">C. Analytical/Performance Cookies</h3>
                <p className="mb-0 text-sm">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.
                </p>
              </div>

              <div className="rounded-md border border-navy/10 p-5">
                <h3 className="mb-2 text-xl font-bold text-heading">D. Targeting/Advertising Cookies</h3>
                <p className="mb-0 text-sm">
                  We may use advertising or remarketing cookies only where such tools are enabled and where required consent has been obtained. If active, these cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">4. Managing Cookies</h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject optional cookies. You can exercise your cookie preferences when you first visit our website via the cookie consent banner.
            </p>
            <p className="mb-4">
              You can also modify your preferences at any time by selecting the floating Cookie Settings icon, shown as a shield button at the bottom-left of the page after you make a choice. This will reopen the consent modal, allowing you to toggle categories on or off.
            </p>
            <p className="mb-4">
              In addition, most web browsers allow you to control cookies through their settings preferences. Please note that if you choose to reject cookies via your browser settings, you may still use our website, but your access to some functionality and areas of our website may be restricted.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">5. Third-Party Cookies & Services</h2>
            <p className="mb-4">
              As described in our Privacy Policy, we use third-party services that may place cookies on your device, subject to your consent preferences. These include:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li><strong>Google Analytics / Google Tag Manager:</strong> Used for analytical and performance tracking. We use Google Consent Mode to ensure these cookies only fire if you have granted analytics consent.</li>
              <li><strong>Microsoft Clarity:</strong> Used to understand how users interact with our website. Data collected is anonymous and respects your consent preferences.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">6. Changes to this Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <p className="mb-4">
              <a href="mailto:legal@mokubasuadvocates.com" className="text-navy font-semibold hover:text-gold-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm">
                legal@mokubasuadvocates.com
              </a>
            </p>
            <p>
              Malika Okubasu & Company Advocates<br />
              5th Avenue Suites Ngong Road, Suite No. 6 4th Floor<br />
              P.O. Box 25926 - 00603<br />
              Nairobi, Kenya
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
