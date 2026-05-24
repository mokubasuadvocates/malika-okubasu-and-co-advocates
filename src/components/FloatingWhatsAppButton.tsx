"use client";

const WHATSAPP_URL =
  "https://wa.me/254141397048?text=Hello%20Malika%20Okubasu%20%26%20Company%20Advocates%2C%20I%20would%20like%20to%20make%20an%20inquiry.";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank" rel="noopener noreferrer"
      rel="noopener noreferrer"
      aria-label="Chat with Malika Okubasu and Company Advocates on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-[78px] left-[18px] z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 motion-safe:hover:-translate-y-[2px] hover:bg-[#1DA851] hover:shadow-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-gold focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 md:bottom-[88px] md:left-6"
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 32 32"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.02 3.2c-6.96 0-12.62 5.55-12.62 12.39 0 2.35.68 4.65 1.96 6.63L3.2 28.8l6.82-2.12a12.83 12.83 0 0 0 6 1.5h.01c6.96 0 12.62-5.55 12.62-12.39S22.99 3.2 16.02 3.2Zm0 22.88h-.01a10.7 10.7 0 0 1-5.46-1.48l-.39-.23-4.05 1.26 1.29-3.91-.25-.4a10.06 10.06 0 0 1-1.63-5.53c0-5.68 4.71-10.3 10.51-10.3 5.79 0 10.5 4.62 10.5 10.3 0 5.67-4.71 10.29-10.51 10.29Z" />
        <path d="M21.78 18.37c-.31-.15-1.85-.9-2.14-1-.29-.11-.5-.15-.71.15-.21.31-.82 1-.99 1.2-.18.2-.36.22-.67.07-.31-.15-1.31-.47-2.49-1.52-.92-.8-1.54-1.79-1.72-2.09-.18-.31-.02-.47.14-.62.14-.14.31-.36.47-.54.15-.18.21-.31.31-.51.1-.2.05-.38-.03-.53-.08-.15-.71-1.68-.97-2.3-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.55.08-.84.38-.29.31-1.1 1.06-1.1 2.58 0 1.52 1.13 2.99 1.29 3.19.15.2 2.23 3.34 5.41 4.69.76.32 1.35.51 1.81.66.76.24 1.45.2 2 .12.61-.09 1.85-.74 2.11-1.46.26-.72.26-1.34.18-1.46-.08-.13-.29-.2-.6-.35Z" />
      </svg>
    </a>
  );
}
