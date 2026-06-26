import Image from "next/image";
import { ExternalLink, Calendar } from "lucide-react";

export function Bookings() {
  const bookingUrl = "https://outlook.office.com/book/MalikaOkubasuCompanyAdvocates1@mokubasuadvocates.com/?ismsaljsauthenabled";

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-soft-blue border-b border-brand-border py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Book a Consultation"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 grayscale"
          />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-heading mb-6 leading-tight tracking-tight">
              Book a Consultation
            </h1>
            <p className="text-lg lg:text-xl text-body leading-relaxed">
              Schedule your legal consultation directly with Malika Okubasu & Company Advocates using our secure online booking portal below.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Embed Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center mb-8">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-soft-blue p-6 rounded-lg border border-[rgba(0,62,99,0.08)]">
              <div className="flex items-center gap-4">
                <Calendar className="w-8 h-8 text-gold-text flex-shrink-0" />
                <div>
                  <h2 className="font-bold text-heading text-lg">Online Scheduling Portal</h2>
                  <p className="text-body text-sm">Select a service, choose an available time slot, and enter your details.</p>
                </div>
              </div>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-sans-primary font-semibold transition-all duration-200 motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 bg-navy text-white hover:bg-navy/90 w-full sm:w-auto text-sm flex-shrink-0"
              >
                Schedule Online (New Tab)
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Iframe Container */}
            <div className="w-full h-[850px] bg-white border border-[rgba(0,62,99,0.12)] rounded-lg overflow-hidden shadow-sm">
              <iframe
                src={bookingUrl}
                width="100%"
                height="100%"
                scrolling="yes"
                style={{ border: 0 }}
                title="Microsoft Bookings Online Scheduling Portal"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
