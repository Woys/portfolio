"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Analytics({
  containerId,
  measurementId,
}: {
  containerId: string;
  measurementId: string;
}) {
  useEffect(() => {
    let loaded = false;

    function removeListeners() {
      window.removeEventListener("pointerdown", loadAnalytics);
      window.removeEventListener("keydown", loadAnalytics);
      window.removeEventListener("scroll", loadAnalytics);
    }

    function loadAnalytics() {
      if (loaded) return;
      loaded = true;
      removeListeners();

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

      const tagManager = document.createElement("script");
      tagManager.async = true;
      tagManager.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
      document.head.appendChild(tagManager);

      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", measurementId);

      const analytics = document.createElement("script");
      analytics.async = true;
      analytics.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(analytics);
    }

    window.addEventListener("pointerdown", loadAnalytics, { passive: true });
    window.addEventListener("keydown", loadAnalytics);
    window.addEventListener("scroll", loadAnalytics, { passive: true });
    const fallback = window.setTimeout(loadAnalytics, 30_000);

    return () => {
      window.clearTimeout(fallback);
      removeListeners();
    };
  }, [containerId, measurementId]);

  return null;
}
