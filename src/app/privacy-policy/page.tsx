import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, absoluteUrl } from "@/constants/seo";

const description = "Privacy Policy for Malika Okubasu & Company Advocates.";
const url = absoluteUrl("/privacy-policy");

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy | ${SITE_NAME}`,
    description,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <h1 className="mb-8 text-3xl font-bold text-heading md:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-secondary-text">
          Last Updated: May 2026
        </p>

        <div className="prose prose-lg max-w-none text-body">
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              1. Introduction
            </h2>
            <p className="mb-4">
              Welcome to the website of Malika Okubasu & Company Advocates
              (&quot;the Firm,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website (mokubasuadvocates.com) or
              engage with our services.
            </p>
            <p className="mb-4">
              Please read this privacy notice carefully as it will help you
              understand what we do with the information that we collect. By
              accessing or using our website, you signify that you have read,
              understood, and agree to our collection, storage, use, and
              disclosure of your personal information as described in this
              Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us
              when you:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>Contact the firm via email, phone, or website forms</li>
              <li>Submit an inquiry or consultation request</li>
              <li>Request legal services</li>
              <li>Interact with our publications or website tools</li>
              <li>Visit the website</li>
            </ul>
            <p className="mb-4">
              The personal information we may collect includes:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>
                <strong>Personal Identifiers:</strong> Name, email address,
                phone number, and professional titles.
              </li>
              <li>
                <strong>Inquiry Details:</strong> Information related to your
                legal inquiry or matters you discuss with us.
              </li>
              <li>
                <strong>Technical Data:</strong> Website usage data such as your
                IP address, browser type, device type, operating system, pages
                visited, and analytics data (where applicable).
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect or receive for the following
              purposes:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>
                To respond to your inquiries and provide requested legal
                services.
              </li>
              <li>
                To evaluate whether we can represent you or assist with your
                legal matters.
              </li>
              <li>
                To improve our website functionality, security, and user
                experience.
              </li>
              <li>
                To send administrative information, updates, or publications (if
                you have opted in).
              </li>
              <li>To comply with our legal and regulatory obligations.</li>
            </ul>
            <div className="rounded-md border-l-4 border-gold bg-soft-blue p-4 text-heading">
              <strong>Important Disclaimer:</strong> Submitting information
              through this website, including via inquiry forms or direct
              emails, does not automatically create an advocate-client
              relationship between you and Malika Okubasu & Company Advocates.
              Please do not send highly confidential information until a formal
              relationship is established.
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              4. Legal Basis for Processing
            </h2>
            <p className="mb-4">
              We process your personal data under the following legal grounds
              provided by the Kenya Data Protection Act and other applicable
              laws:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>
                <strong>Consent:</strong> When you have explicitly given us
                consent to process your data for a specific purpose.
              </li>
              <li>
                <strong>Performance of a Contract:</strong> When processing is
                necessary for the performance of a contract with you or to take
                steps at your request prior to entering into a contract.
              </li>
              <li>
                <strong>Legal Obligation:</strong> When we must comply with a
                statutory or regulatory obligation.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> When processing is
                necessary for our legitimate business interests, provided those
                interests are not overridden by your rights and freedoms.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              5. Data Security
            </h2>
            <p className="mb-4">
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process. However, despite our safeguards and
              efforts to secure your information, no electronic transmission
              over the Internet or information storage technology can be
              guaranteed to be 100% secure. We cannot promise or guarantee that
              hackers, cybercriminals, or other unauthorized third parties will
              not be able to defeat our security and improperly collect, access,
              steal, or modify your information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              6. Sharing Your Information
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. We may
              share your information only in the following situations:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>
                <strong>With Service Providers:</strong> We may share data with
                trusted third-party vendors, IT providers, and hosting partners
                who perform services for us and require access to such
                information to do that work.
              </li>
              <li>
                <strong>For Legal Reasons:</strong> We may disclose your
                information where we are legally required to do so in order to
                comply with applicable law, governmental requests, a judicial
                proceeding, court order, or legal process.
              </li>
              <li>
                <strong>Professional Advisors:</strong> We may share information
                with our professional advisors, such as auditors or insurers, to
                manage risks or obtain professional advice.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              7. Cookies and Analytics
            </h2>
            <p className="mb-4">
              We may use cookies and similar tracking technologies to access or
              store information. You can manage your cookie preferences when the
              consent banner appears or later by selecting the floating Cookie
              Settings icon, shown as a shield button at the bottom-left of the
              page. For specific information about how we use cookies and how
              you can refuse certain cookies, please review our{" "}
              <Link
                href="/cookie-policy"
                className="text-navy font-semibold hover:text-gold-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              8. Your Rights
            </h2>
            <p className="mb-4">
              Depending on your location and applicable data protection laws,
              you may have the right to:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>
                Request erasure of your personal data under certain conditions.
              </li>
              <li>
                Object to or restrict our processing of your personal data.
              </li>
              <li>
                Request the transfer of your data to another organization.
              </li>
              <li>
                Withdraw your consent at any time where we rely on consent to
                process your information.
              </li>
            </ul>
            <p className="mb-4">
              To exercise any of these rights, please contact us using the
              details provided below. We will respond to your request within the
              timeframe required by applicable law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              9. Data Retention
            </h2>
            <p className="mb-4">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Policy, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). When we have no
              ongoing legitimate business need to process your personal
              information, we will either delete or anonymize such information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              10. Third-Party Services
            </h2>
            <p className="mb-4">
              Our website utilizes certain third-party services to analyze user
              behavior, improve performance, and manage our online presence.
              These services may collect technical usage data. Specifically, we
              use:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>
                <strong>Google Analytics / Google Tag Manager:</strong> Used to
                track website traffic, measure user engagement, and understand
                how visitors interact with our site. This is only active if you
                grant analytical consent.
              </li>
              <li>
                <strong>Microsoft Clarity:</strong> A behavioral analysis tool
                that helps us understand how users interact with our website
                through session replays and heatmaps to improve our user
                experience. Data collected is anonymous and respects your
                consent preferences.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              11. Changes to this Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The updated
              version will be indicated by an updated &quot;Last Updated&quot;
              date at the top of this page. We encourage you to review this
              policy frequently to be informed of how we are protecting your
              information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              12. Contact Us
            </h2>
            <p className="mb-4">
              If you have questions or comments about this policy, or if you
              wish to exercise any of your privacy rights, you may contact our
              Data Protection Officer by email at:
            </p>
            <p className="mb-4">
              <a
                href="mailto:legal@mokubasuadvocates.com"
                className="text-navy font-semibold hover:text-gold-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
              >
                legal@mokubasuadvocates.com
              </a>
            </p>
            <p>
              Alternatively, you can reach us by post at:
              <br />
              Malika Okubasu & Company Advocates
              <br />
              5th Avenue Suites Ngong Road, Suite No. 6 4th Floor
              <br />
              P.O. Box 25926 - 00603
              <br />
              Nairobi, Kenya
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-heading">
              13. Legal Disclaimer
            </h2>
            <p className="mb-4">
              The information on this website is for general informational
              purposes only and does not constitute legal advice. Accessing this
              website does not create an advocate-client relationship.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
