"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SiteEnhancements() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderLeaving, setPreloaderLeaving] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const alreadySeen = sessionStorage.getItem("cdh-preloader-seen") === "1";

    root.classList.add("reveal-enabled");

    let leaveTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;

    if (alreadySeen) {
      setShowPreloader(false);
    } else {
      root.classList.add("preloader-active");
      body.classList.add("is-loading");

      leaveTimer = setTimeout(() => {
        setPreloaderLeaving(true);
        root.classList.remove("preloader-active");
        body.classList.remove("is-loading");
        sessionStorage.setItem("cdh-preloader-seen", "1");
      }, 1550);

      removeTimer = setTimeout(() => {
        setShowPreloader(false);
      }, 2250);
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const delay = element.dataset.revealDelay;

          if (delay) {
            element.style.transitionDelay = `${delay}ms`;
          }

          element.classList.add("is-visible");
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      if (leaveTimer) clearTimeout(leaveTimer);
      if (removeTimer) clearTimeout(removeTimer);
      root.classList.remove("reveal-enabled", "preloader-active");
      body.classList.remove("is-loading");
    };
  }, []);

  return (
    <>
      {showPreloader && (
        <div
          className={`site-preloader${preloaderLeaving ? " is-leaving" : ""}`}
          aria-hidden="true"
        >
          <div className="preloader-grid" />

          <div className="preloader-center">
            <div className="preloader-logo-wrap">
              <Image
                src="/logo/cdh-logo-white.png"
                alt=""
                width={420}
                height={145}
                priority
                className="preloader-logo"
              />
            </div>

            <div className="preloader-progress">
              <span />
            </div>

            <div className="preloader-meta">
              <span>Colombo</span>
              <span>Est. 2018</span>
            </div>
          </div>

          <p className="preloader-caption">Menswear / Fast Fashion / Apparel</p>
        </div>
      )}

      <a
        className="whatsapp-widget"
        href="https://wa.me/94778875181?text=Hello%20Colombo%20Design%20House%2C%20I%27d%20like%20to%20know%20more."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Colombo Design House on WhatsApp"
      >
        <span className="whatsapp-pulse" aria-hidden="true" />
        <span className="whatsapp-tooltip">WhatsApp</span>
        <svg
          className="whatsapp-icon"
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.493.654.666-2.431-.156-.25a6.56 6.56 0 0 1-1.007-3.505c0-3.627 2.955-6.582 6.591-6.582a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.959 6.587-6.593 6.587Zm3.615-4.934c-.198-.099-1.17-.578-1.353-.646-.182-.066-.315-.099-.445.099-.133.198-.513.646-.63.779-.116.133-.232.15-.43.05-.198-.099-.836-.308-1.592-.984-.588-.525-.985-1.173-1.1-1.371-.116-.198-.013-.305.086-.404.089-.088.198-.232.297-.348.1-.116.133-.198.198-.33.066-.133.033-.249-.017-.348-.05-.099-.445-1.074-.61-1.47-.16-.389-.323-.336-.445-.342l-.378-.007c-.133 0-.348.05-.53.249-.182.198-.696.679-.696 1.654s.713 1.917.812 2.049c.099.133 1.404 2.143 3.4 3.006.476.205.846.328 1.135.42.477.151.91.13 1.253.079.382-.057 1.17-.48 1.336-.943.165-.462.165-.858.116-.943-.05-.084-.182-.132-.38-.232Z"
          />
        </svg>
      </a>
    </>
  );
}
