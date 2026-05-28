import Image from "next/image";
import { Phone, Mail, ArrowRight, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { OFFICIAL_LINKEDIN_URL } from "@/constants/social";

export function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-soft-blue border-b border-brand-border py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Contact us"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-heading mb-6 leading-tight tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg lg:text-xl text-body leading-relaxed">
              Contact Malika Okubasu & Company Advocates directly by phone, email, WhatsApp, LinkedIn, or visit our offices in Nairobi.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Details */}
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-bold text-heading mb-8 leading-tight">
                Get In Touch
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {/* Email */}
                <a
                  href="mailto:legal@mokubasuadvocates.com"
                  className="flex flex-col p-6 rounded-lg bg-soft-blue border border-[rgba(0,62,99,0.08)] transition-all hover:-translate-y-1 hover:shadow-md group"
                >
                  <Mail className="w-8 h-8 text-gold-text mb-4" />
                  <h3 className="font-bold text-heading mb-1 text-lg">Email Us</h3>
                  <p className="text-body text-sm group-hover:text-gold transition-colors">legal@mokubasuadvocates.com</p>
                </a>

                {/* Call */}
                <a
                  href="tel:+254141397048"
                  className="flex flex-col p-6 rounded-lg bg-soft-blue border border-[rgba(0,62,99,0.08)] transition-all hover:-translate-y-1 hover:shadow-md group"
                >
                  <Phone className="w-8 h-8 text-gold-text mb-4" />
                  <h3 className="font-bold text-heading mb-1 text-lg">Call Us</h3>
                  <p className="text-body text-sm group-hover:text-gold transition-colors">+254 141 397 048</p>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254141397048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-6 rounded-lg bg-soft-blue border border-[rgba(0,62,99,0.08)] transition-all hover:-translate-y-1 hover:shadow-md group"
                >
                  <MessageCircle className="w-8 h-8 text-gold-text mb-4" />
                  <h3 className="font-bold text-heading mb-1 text-lg">WhatsApp Us</h3>
                  <p className="text-body text-sm group-hover:text-gold transition-colors">Chat with our office</p>
                </a>

                {/* LinkedIn */}
                <a
                  href={OFFICIAL_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-6 rounded-lg bg-soft-blue border border-[rgba(0,62,99,0.08)] transition-all hover:-translate-y-1 hover:shadow-md group"
                >
                  <Linkedin className="w-8 h-8 text-gold-text mb-4" />
                  <h3 className="font-bold text-heading mb-1 text-lg">LinkedIn</h3>
                  <p className="text-body text-sm group-hover:text-gold transition-colors">Malika Okubasu & Company Advocates</p>
                </a>
              </div>

              <div className="bg-navy text-white rounded-lg p-8 shadow-sm mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-gold-text flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">Visit Our Office</h3>
                    <p className="text-white/80 leading-relaxed text-sm">
                      5th Avenue Suites Ngong Road, Suite No. 6, 4th Floor
                      <br />
                      P.O. Box 25926 - 00603
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/enkR4yrDCPXHHYpSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-sans-primary font-semibold transition-all duration-200 motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 bg-gold-text text-navy hover:bg-gold hover:text-navy w-full sm:w-auto"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            {/* Right: Map Iframe */}
            <div className="h-full min-h-[400px] lg:min-h-full w-full bg-soft-blue border border-[rgba(0,62,99,0.12)] rounded-lg overflow-hidden shadow-sm">
              <iframe
                title="Map showing Malika Okubasu & Company Advocates at 5th Avenue Suites, Ngong Road, Nairobi"
                src="https://www.google.com/maps?q=5th%20Avenue%20Suites%20Ngong%20Road%20Nairobi&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 min-h-[400px] lg:min-h-full"
              />
              <div className="sr-only">
                Malika Okubasu & Company Advocates, 5th Avenue Suites, Ngong
                Road, Nairobi
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
