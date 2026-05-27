"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { 
  Share2, X as CloseIcon, Link as LinkIcon, Mail, MoreHorizontal, 
  Send, Code, AtSign
} from "lucide-react";

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const RedditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF4500]">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .883.175 1.188.467 1.229-.894 2.94-1.472 4.821-1.54l.872-4.095a.352.352 0 0 1 .411-.271l3.18.67zM7.555 14.5c0-.825.67-1.496 1.496-1.496s1.496.671 1.496 1.496-.671 1.496-1.496 1.496-1.496-.67-1.496-1.496zm6.89 1.496c0-.825-.67-1.496-1.496-1.496s-1.496.671-1.496 1.496.671 1.496 1.496 1.496 1.496-.67 1.496-1.496zm-4.707 1.583c.96.96 3.013.985 3.555.985.53 0 2.583-.024 3.555-.985a.253.253 0 0 0-.358-.358c-.628.628-2.193.842-3.197.842-1.016 0-2.581-.225-3.197-.842a.253.253 0 0 0-.358.358z"/>
  </svg>
);

const SubstackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#FF6719]">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
  </svg>
);

const MediumIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#1877F2]">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

interface ArticleShareActionProps {
  title: string;
  excerpt?: string;
  url?: string;
  image?: string;
  practiceArea?: string;
  authorName?: string;
  authorRole?: string;
  slug?: string;
  date?: string;
}

export function ArticleShareAction({ 
  title, 
  excerpt, 
  url, 
  image, 
  practiceArea,
  authorName,
  authorRole,
  slug,
  date 
}: ArticleShareActionProps) {
  const [modalView, setModalView] = useState<"closed" | "share" | "more" | "embed">("closed");
  const [statusMsg, setStatusMsg] = useState("");
  
  const shareTriggerRef = useRef<HTMLButtonElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  // Auto-clear status messages
  useEffect(() => {
    if (statusMsg) {
      const timer = setTimeout(() => setStatusMsg(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [statusMsg]);

  // Handle scroll locking and escape key for custom portal modal
  useEffect(() => {
    if (modalView === "closed") {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      return;
    }

    // Lock scroll (iOS safe)
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    // Listen for escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (modalView === "more") {
          setModalView("share");
          setTimeout(() => moreButtonRef.current?.focus(), 0);
        } else {
          setModalView("closed");
          setTimeout(() => shareTriggerRef.current?.focus(), 0);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      const top = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(top || "0") * -1);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalView]);

  const openModal = () => {
    setModalView("share");
    setStatusMsg("");
  };

  const closeModal = () => {
    setModalView("closed");
    // Return focus to the trigger button for accessibility
    setTimeout(() => shareTriggerRef.current?.focus(), 0);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setStatusMsg("Link copied");
      pushGtmEvent("copy_link");
    } catch {
      setStatusMsg("Copy failed");
    }
  };

  const handleCopyTextFallback = async () => {
    try {
      await navigator.clipboard.writeText(`${title} ${shareUrl}`);
      setStatusMsg("Share text copied");
    } catch {
      setStatusMsg("Copy failed");
    }
  };

  const handleCopyEmbed = async () => {
    // Generate the iframe code
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
    const embedUrl = `${siteUrl}/embed/publications/${slug || ""}`;
    const embedCode = `<iframe
  src="${embedUrl}"
  title="${title.replace(/"/g, '&quot;')} | Malika Okubasu & Company Advocates"
  width="100%"
  height="420"
  style="border:1px solid #e5e7eb;border-radius:12px;max-width:680px;"
  loading="lazy">
</iframe>`;
    try {
      await navigator.clipboard.writeText(embedCode);
      setStatusMsg("Copied");
      pushGtmEvent("copy_embed");
    } catch {
      setStatusMsg("Copy failed. Please copy manually.");
    }
  };

  const handleMoreClick = async () => {
    if (window.innerWidth < 640 && navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt || `Read ${title} on Malika Okubasu & Company Advocates`,
          url: shareUrl,
        });
        pushGtmEvent("native_share");
      } catch (err) {
        // Just fail silently or update modal view if needed
        // but DO NOT leave the page stuck
        console.error("Native share failed or was cancelled", err);
      }
    } else {
      setModalView(modalView === "more" ? "share" : "more");
    }
  };

  const handleNativeShare = async (platform: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt || title,
          url: shareUrl,
        });
        pushGtmEvent(platform);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          handleCopyTextFallback();
        } else if (!(err instanceof Error)) {
          handleCopyTextFallback();
        }
      }
    } else {
      // Fallback to SMS on mobile, or copy text on desktop
      window.location.href = `sms:?&body=${encodedTitle}%20${encodedUrl}`;
      pushGtmEvent(platform);
    }
  };

  const pushGtmEvent = (platform: string) => {
    if (typeof window !== "undefined") {
      interface CustomWindow extends Window {
        dataLayer?: Record<string, unknown>[];
      }
      const w = window as unknown as CustomWindow;
      if (w.dataLayer) {
        w.dataLayer.push({
          event: "article_share",
          article_title: title,
          article_url: shareUrl,
          share_platform: platform
        });
      }
    }
  };

  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section className="mt-14 sm:mt-16 article-share" aria-labelledby="share-heading">
      <h2 id="share-heading" className="mb-4 text-xl font-bold text-navy font-serif-editorial">
        Share this article
      </h2>
      <button
        ref={shareTriggerRef}
        onClick={openModal}
        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm border border-navy/20 bg-white px-6 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-soft-blue hover:border-navy/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:bg-gray-100 sm:w-auto"
      >
        <Share2 className="h-4 w-4" aria-hidden="true" />
        <span>Share</span>
      </button>

      {modalView !== "closed" && typeof document !== "undefined" && createPortal(
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-[9998] bg-navy/60 sm:backdrop-blur-sm transition-opacity"
            onClick={handleBackdropClick}
            aria-hidden="true"
          />
          {/* Dialog */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-dialog-title"
            className="fixed inset-x-0 bottom-0 z-[9999] m-0 w-full max-w-full overflow-hidden rounded-t-2xl bg-white p-0 shadow-2xl sm:inset-0 sm:m-auto sm:max-w-[480px] sm:rounded-[20px] sm:max-h-[calc(100dvh-48px)] sm:overflow-visible max-h-[90dvh] overscroll-contain pb-[calc(env(safe-area-inset-bottom)+16px)] sm:pb-0"
          >
          <div className="flex flex-col h-full max-h-[90dvh] sm:max-h-[calc(100dvh-48px)]">
            {/* Header */}
            <div className="shrink-0 flex flex-col border-b border-gray-100 bg-white">
              <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-gray-300 sm:hidden" aria-hidden="true" />
              <div className="flex items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
                {modalView === "embed" ? (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setModalView("share");
                        setStatusMsg("");
                      }}
                      className="text-sm font-medium text-navy hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm px-2 py-1 -ml-2"
                    >
                      ← Back
                    </button>
                    <h2 id="share-dialog-title" className="text-lg font-bold text-navy border-l border-gray-200 pl-3">
                      Embed article
                    </h2>
                  </div>
                ) : (
                  <h2 id="share-dialog-title" className="text-lg font-bold text-navy">
                    Share this post
                  </h2>
                )}
                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <CloseIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto sm:overflow-visible p-5 sm:p-6">
              {modalView !== "embed" ? (
                <>
                  {/* Article Preview Card */}
                  <div className="mb-6 flex gap-4 rounded-lg border border-gray-100 bg-gray-50 p-3 sm:p-4 shadow-sm">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md sm:h-20 sm:w-20">
                  {image ? (
                    <Image src={image} alt="" fill className="object-cover" sizes="80px" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-navy to-gold/80" />
                  )}
                </div>
                <div className="flex min-w-0 flex-col justify-center">
                  {practiceArea && (
                    <span className="mb-1 block truncate text-xs font-semibold uppercase tracking-wider text-gold">
                      {practiceArea}
                    </span>
                  )}
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-navy sm:text-base">
                    {title}
                  </h3>
                </div>
              </div>

              {/* Status Message */}
              <div aria-live="polite" className="mb-4 h-5 text-center text-sm font-medium">
                {statusMsg && (
                  <span className={statusMsg.includes("failed") ? "text-red-600" : "text-green-700"}>
                    {statusMsg}
                  </span>
                )}
              </div>

              {/* Primary Actions Grid */}
              <div className="mb-2 flex overflow-x-auto snap-x snap-mandatory gap-2 pb-4 sm:grid sm:grid-cols-5 sm:gap-2 sm:overflow-visible sm:pb-0 scrollbar-hide relative">
                <button
                  onClick={handleCopyLink}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:w-auto sm:p-2 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-gray-200 group-hover:text-navy">
                    <LinkIcon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">Copy</span>
                </button>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => pushGtmEvent("facebook")}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:w-auto sm:p-2 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2]/10 text-[#1877F2] transition-colors group-hover:bg-[#1877F2]/20">
                    <FacebookIcon />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">Facebook</span>
                </a>

                <a
                  href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => pushGtmEvent("whatsapp")}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:w-auto sm:p-2 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366]/20">
                    <WhatsAppIcon />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">WhatsApp</span>
                </a>

                <a
                  href={`https://www.threads.net/intent/post?text=${encodedTitle}%20${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => pushGtmEvent("threads")}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:w-auto sm:p-2 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-black transition-colors group-hover:bg-gray-200">
                    <AtSign className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">Threads</span>
                </a>

                {/* Mobile-only expanded horizontal scroll icons */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => pushGtmEvent("x_twitter")}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:hidden transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-gray-200">
                    <XIcon />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">X</span>
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => pushGtmEvent("linkedin")}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:hidden transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0077b5]/10 text-[#0077b5] transition-colors group-hover:bg-[#0077b5]/20">
                    <LinkedinIcon />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">LinkedIn</span>
                </a>

                <a
                  href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => pushGtmEvent("reddit")}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:hidden transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff4500]/10 text-[#ff4500] transition-colors group-hover:bg-[#ff4500]/20">
                    <RedditIcon />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">Reddit</span>
                </a>

                <button
                  onClick={() => {
                    handleCopyTextFallback();
                    pushGtmEvent("substack");
                  }}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:hidden transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6719]/10 text-[#ff6719] transition-colors group-hover:bg-[#ff6719]/20">
                    <SubstackIcon />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">Substack</span>
                </button>

                <button
                  onClick={() => {
                    handleCopyTextFallback();
                    pushGtmEvent("medium");
                  }}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:hidden transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-black transition-colors group-hover:bg-gray-200">
                    <MediumIcon />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">Medium</span>
                </button>

                <a
                  href={`mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`}
                  onClick={() => pushGtmEvent("email")}
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:hidden transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-gray-200">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">Email</span>
                </a>

                <button
                  ref={moreButtonRef}
                  onClick={handleMoreClick}
                  aria-expanded={modalView === "more"}
                  aria-haspopup="menu"
                  aria-controls="more-share-options"
                  className="group flex w-16 shrink-0 snap-start flex-col items-center gap-2 rounded-lg p-1 sm:w-auto sm:p-2 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors ${modalView === "more" ? "bg-navy text-white" : "bg-gray-100 text-gray-700 group-hover:bg-gray-200 group-hover:text-navy"}`}>
                    <MoreHorizontal className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-navy">More</span>
                </button>

                {/* More Options Menu */}
                <div
                  id="more-share-options"
                  role="menu"
                  className={`transition-all duration-200 ease-in-out origin-top-right motion-reduce:transition-none
                    ${modalView === "more" ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 pointer-events-none"}
                    /* Mobile: inline expansion */
                    col-span-5 mt-2
                    /* Desktop: floating popover */
                    sm:col-span-1 sm:mt-0 sm:absolute sm:top-full sm:right-0 sm:z-50 sm:w-56 sm:rounded-xl sm:border sm:border-gray-100 sm:bg-white sm:shadow-xl sm:p-2
                  `}
                >
                  <div className="rounded-xl sm:rounded-none border border-gray-100 sm:border-none bg-gray-50 sm:bg-transparent p-2 sm:p-0 shadow-inner sm:shadow-none">
                  <ul className="flex flex-col">
                    <li role="none" className="hidden sm:block">
                      <a
                        role="menuitem"
                        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => pushGtmEvent("x_twitter")}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white sm:hover:bg-gray-50 hover:text-navy hover:shadow-sm sm:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <XIcon /> X (Twitter)
                      </a>
                    </li>
                    <li role="none" className="hidden sm:block">
                      <a
                        role="menuitem"
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => pushGtmEvent("linkedin")}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white sm:hover:bg-gray-50 hover:text-navy hover:shadow-sm sm:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <LinkedinIcon /> LinkedIn
                      </a>
                    </li>
                    <li role="none" className="hidden sm:block">
                      <a
                        role="menuitem"
                        href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`}
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => pushGtmEvent("reddit")}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white sm:hover:bg-gray-50 hover:text-navy hover:shadow-sm sm:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <RedditIcon /> Reddit
                      </a>
                    </li>
                    <li role="none" className="hidden sm:block">
                      <button
                        role="menuitem"
                        onClick={() => {
                          handleCopyTextFallback();
                          pushGtmEvent("substack");
                        }}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white sm:hover:bg-gray-50 hover:text-navy hover:shadow-sm sm:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <SubstackIcon /> Substack
                      </button>
                    </li>
                    <li role="none" className="hidden sm:block">
                      <button
                        role="menuitem"
                        onClick={() => {
                          handleCopyTextFallback();
                          pushGtmEvent("medium");
                        }}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white sm:hover:bg-gray-50 hover:text-navy hover:shadow-sm sm:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <MediumIcon /> Medium
                      </button>
                    </li>
                    <li role="none">
                      <a
                        role="menuitem"
                        href={`mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`}
                        onClick={() => pushGtmEvent("email")}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white sm:hover:bg-gray-50 hover:text-navy hover:shadow-sm sm:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <Mail className="h-4 w-4" /> Email
                      </a>
                    </li>
                    <li className="my-1 border-t border-gray-200" role="separator"></li>
                    <li role="none">
                      <button
                        role="menuitem"
                        onClick={() => handleNativeShare("send_as_message")}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white sm:hover:bg-gray-50 hover:text-navy hover:shadow-sm sm:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <Send className="h-4 w-4 text-gray-500" /> Send as message
                      </button>
                    </li>
                    <li role="none">
                      <button
                        role="menuitem"
                        onClick={() => {
                          setModalView("embed");
                          setStatusMsg("");
                        }}
                        className="flex min-h-[44px] w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-white sm:hover:bg-gray-50 hover:text-navy hover:shadow-sm sm:hover:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                      >
                        <Code className="h-4 w-4 text-gray-500" /> Embed
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
            </>
          ) : (
            /* Embed State View */
            <div className="flex flex-col">
              <div className="mb-4 text-sm text-body">
                Copy the code below to embed this article on your website.
              </div>

                {/* Article Preview Card matching the embed design */}
                <div className="mb-6 rounded-lg border border-gray-200 shadow-sm overflow-hidden bg-white">
                  {image && (
                    <div className="relative h-40 w-full bg-soft-blue">
                      <Image src={image} alt="" fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-4 sm:p-5">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gold">
                        Malika Okubasu & Company Advocates
                      </span>
                      {date && <span className="text-xs text-gray-500">{date}</span>}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-navy">
                      {title}
                    </h3>
                    {excerpt && (
                      <p className="mb-4 text-sm text-body line-clamp-3">
                        {excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        {authorName && (
                          <div className="text-sm font-bold text-navy">{authorName}</div>
                        )}
                        {authorRole && (
                          <div className="text-xs text-gray-500">{authorRole}</div>
                        )}
                      </div>
                      <a
                        href={shareUrl}
                        target="_blank" rel="noopener noreferrer"
                        className="rounded-full bg-soft-blue px-4 py-1.5 text-xs font-semibold text-navy transition-colors hover:bg-gold-text hover:text-white"
                      >
                        Read article
                      </a>
                    </div>
                  </div>
                </div>

                {/* Status Message for Errors */}
                {statusMsg && statusMsg !== "Copied" && (
                  <div aria-live="polite" className="mt-2 h-5 text-sm font-medium">
                    <span className="text-red-600">
                      {statusMsg}
                    </span>
                  </div>
                )}

                {/* Embed Code Field */}
                <div className="relative rounded-lg border border-gray-200 bg-gray-50">
                  <pre className="overflow-x-auto whitespace-pre p-4 pr-28 text-xs font-mono text-gray-600">
{`<iframe
  src="${typeof window !== "undefined" ? window.location.origin : ""}/embed/publications/${slug || ""}"
  title="${title.replace(/"/g, '&quot;')} | Malika Okubasu & Company Advocates"
  width="100%"
  height="420"
  style="border:0; overflow:hidden;"
  loading="lazy">
</iframe>`}
                  </pre>
                  <button
                    onClick={handleCopyEmbed}
                    className="absolute right-3 top-3 rounded-md bg-white border border-gray-200 px-3 py-1.5 text-xs font-semibold text-navy shadow-sm transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {statusMsg === "Copied" ? "Copied" : "Copy code"}
                  </button>
                </div>
              </div>
            )}
            </div>
          </div>
          </div>
        </>,
        document.body
      )}
    </section>
  );
}
