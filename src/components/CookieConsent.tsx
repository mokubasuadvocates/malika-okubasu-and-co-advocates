"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type ConsentChoices = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
};

const DEFAULT_CHOICES: ConsentChoices = {
  necessary: true,
  functional: false,
  analytics: false,
  advertising: false,
};

const CONSENT_KEY = "mokubasu-cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>(DEFAULT_CHOICES);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(saved);
        setChoices(parsed);
        applyConsent(parsed);
      } catch {
        setShowBanner(true);
      }
    }

    const handleOpenSettings = () => {
      setShowModal(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const applyConsent = (currentChoices: ConsentChoices) => {
    if (typeof window !== "undefined") {
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: currentChoices.analytics ? "granted" : "denied",
          ad_storage: currentChoices.advertising ? "granted" : "denied",
          ad_user_data: currentChoices.advertising ? "granted" : "denied",
          ad_personalization: currentChoices.advertising ? "granted" : "denied",
          functionality_storage: currentChoices.functional ? "granted" : "denied",
          personalization_storage: currentChoices.functional ? "granted" : "denied",
          security_storage: "granted",
        });
      }

      // Explicit cast to any to access dataLayer without TS errors
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      win.dataLayer = win.dataLayer || [];
      win.dataLayer.push({
        event: "cookie_consent_update",
        cookie_consent: {
          necessary: true,
          functional: currentChoices.functional,
          analytics: currentChoices.analytics,
          performance: currentChoices.functional,
          advertising: currentChoices.advertising,
        },
      });
    }
  };

  const saveAndApply = (newChoices: ConsentChoices) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newChoices));
    setChoices(newChoices);
    applyConsent(newChoices);
    setShowBanner(false);
    closeModal();
  };

  const handleAcceptAll = () => {
    const all = {
      necessary: true,
      functional: true,
      analytics: true,
      advertising: true,
    };
    saveAndApply(all);
  };

  const handleRejectAll = () => {
    const none = {
      necessary: true,
      functional: false,
      analytics: false,
      advertising: false,
    };
    saveAndApply(none);
  };

  const handleSavePreferences = () => {
    saveAndApply(choices);
  };

  const openModal = () => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setShowModal(true);
    setShowBanner(false);
  };

  const closeModal = () => {
    setShowModal(false);
    if (!localStorage.getItem(CONSENT_KEY)) {
      setShowBanner(true);
    }
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        closeModal();
      }
    };
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  const toggleChoice = (key: keyof ConsentChoices) => {
    if (key === "necessary") return;
    setChoices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy/10 bg-white p-4 shadow-2xl md:p-6">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 md:flex-row md:items-center md:justify-between lg:px-12">
            <div className="max-w-3xl">
              <h2 className="mb-2 text-lg font-bold text-heading">
                We value your privacy
              </h2>
              <p className="text-sm leading-relaxed text-body md:text-base">
                At Malika Okubasu & Company Advocates, we use cookies and
                similar technologies to improve your browsing experience,
                understand website usage, and support essential website functions.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
              <button
                onClick={openModal}
                className="whitespace-nowrap rounded-md border-2 border-navy bg-white px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Customize
              </button>
              <button
                onClick={handleRejectAll}
                className="whitespace-nowrap rounded-md border border-navy/20 bg-soft-blue px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-navy/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="whitespace-nowrap rounded-md bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm sm:p-6">
          <div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl outline-none"
          >
            <div className="flex items-center justify-between border-b border-navy/10 p-5 md:p-6">
              <h2
                id="cookie-modal-title"
                className="text-xl font-bold text-heading md:text-2xl"
              >
                Customize Consent Preferences
              </h2>
              <button
                onClick={closeModal}
                className="rounded-full p-2 text-secondary-text transition-colors hover:bg-soft-bg hover:text-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 md:p-6">
              <p className="mb-6 text-sm leading-relaxed text-body">
                At Malika Okubasu & Company Advocates, we use cookies and
                similar technologies to enhance your browsing experience and
                understand how visitors use our website. You can choose which
                categories to allow below. For more information, please read our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-navy hover:text-gold-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                  onClick={closeModal}
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-navy hover:text-gold-text hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
                  onClick={closeModal}
                >
                  Cookie Policy
                </Link>
                .
              </p>

              <div className="space-y-6">
                {/* Necessary */}
                <div className="flex flex-col gap-2 rounded-md border border-navy/10 bg-soft-blue p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-heading">A. Necessary</h3>
                    <span className="text-sm font-semibold text-navy">
                      Always Active
                    </span>
                  </div>
                  <p className="text-sm text-body">
                    Necessary cookies are required for basic website functions
                    such as security, form submission, remembering consent
                    preferences, and page navigation.
                  </p>
                </div>

                {/* Functional */}
                <div className="flex flex-col gap-2 rounded-md border border-navy/10 p-4 transition-colors hover:border-navy/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-heading">B. Functional</h3>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={choices.functional}
                        onChange={() => toggleChoice("functional")}
                      />
                      <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-navy peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/30"></div>
                      <span className="sr-only">Enable Functional Cookies</span>
                    </label>
                  </div>
                  <p className="text-sm text-body">
                    Functional cookies help support enhanced website features
                    such as remembering preferences or enabling third-party
                    functionality.
                  </p>
                </div>

                {/* Analytics */}
                <div className="flex flex-col gap-2 rounded-md border border-navy/10 p-4 transition-colors hover:border-navy/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-heading">C. Analytics</h3>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={choices.analytics}
                        onChange={() => toggleChoice("analytics")}
                      />
                      <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-navy peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/30"></div>
                      <span className="sr-only">Enable Analytics Cookies</span>
                    </label>
                  </div>
                  <p className="text-sm text-body">
                    Analytics cookies help us understand how visitors use the
                    website, such as pages visited, traffic sources, and general
                    website performance.
                  </p>
                </div>

                {/* Performance */}
                <div className="flex flex-col gap-2 rounded-md border border-navy/10 p-4 transition-colors hover:border-navy/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-heading">D. Performance</h3>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={choices.functional} 
                        onChange={() => toggleChoice("functional")}
                      />
                      <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-navy peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/30"></div>
                      <span className="sr-only">Enable Performance Cookies</span>
                    </label>
                  </div>
                  <p className="text-sm text-body">
                    Performance cookies help us assess and improve website
                    speed, reliability, and user experience.
                  </p>
                </div>

                {/* Advertising */}
                <div className="flex flex-col gap-2 rounded-md border border-navy/10 p-4 transition-colors hover:border-navy/30">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-heading">
                      E. Advertising / Targeting
                    </h3>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={choices.advertising}
                        onChange={() => toggleChoice("advertising")}
                      />
                      <div className="peer h-6 w-11 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-navy peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gold/30"></div>
                      <span className="sr-only">Enable Advertising Cookies</span>
                    </label>
                  </div>
                  <p className="text-sm text-body">
                    Advertising cookies may be used to measure campaigns or
                    deliver relevant content where advertising tools are enabled.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-navy/10 bg-soft-bg p-5 sm:flex-row sm:justify-end md:p-6">
              <button
                onClick={handleRejectAll}
                className="rounded-md border border-navy/20 bg-white px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Reject All
              </button>
              <button
                onClick={handleSavePreferences}
                className="rounded-md border-2 border-navy bg-white px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Save My Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="rounded-md bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
