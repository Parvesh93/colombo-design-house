"use client";

import { useEffect } from "react";

export default function SiteEnhancements() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-enabled");

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
      root.classList.remove("reveal-enabled");
    };
  }, []);

  return (
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
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M16.04 3.2A12.67 12.67 0 0 0 5.2 22.42L3.52 28.8l6.53-1.71A12.65 12.65 0 1 0 16.04 3.2Zm0 2.14a10.5 10.5 0 0 1 0 21 10.42 10.42 0 0 1-5.34-1.46l-.38-.23-3.88 1.02 1.04-3.78-.25-.39A10.5 10.5 0 0 1 16.04 5.34Zm-5.3 4.69c-.28 0-.73.1-1.11.52-.38.42-1.46 1.43-1.46 3.48 0 2.06 1.5 4.04 1.7 4.32.2.28 2.94 4.49 7.12 6.3.99.43 1.77.68 2.38.87 1 .32 1.9.27 2.62.17.8-.12 2.46-1.01 2.81-1.98.35-.98.35-1.82.24-1.99-.1-.17-.38-.28-.8-.49-.42-.2-2.46-1.21-2.84-1.35-.38-.14-.66-.21-.94.21-.28.42-1.08 1.35-1.32 1.63-.24.28-.49.31-.9.1-.42-.2-1.77-.65-3.37-2.08a12.61 12.61 0 0 1-2.33-2.9c-.24-.42-.02-.64.19-.85.19-.19.42-.49.63-.73.2-.24.28-.42.42-.7.14-.28.07-.52-.04-.73-.1-.21-.94-2.26-1.28-3.1-.34-.81-.68-.7-.94-.72l-.8-.01Z"
        />
      </svg>
    </a>
  );
}
