"use client";

import { useEffect, useRef } from "react";

const HERO_BACKGROUND_IMAGE =
  "/assets/hero/pmcs-singapore-food-security-platform-hero-background.webp";

const MAX_DESKTOP_TRANSLATE_Y = 40;
const DESKTOP_SCALE = 1.15;
const MOBILE_SCALE = 1.06;

export function HeroParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;

    if (!container || !background) {
      return;
    }

    let animationFrame = 0;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const setStaticBackground = () => {
      background.style.transform = `translate3d(0, 0, 0) scale(${desktopQuery.matches ? DESKTOP_SCALE : MOBILE_SCALE})`;
      background.style.willChange = "auto";
    };

    const updateParallax = () => {
      animationFrame = 0;

      if (reducedMotionQuery.matches || !desktopQuery.matches) {
        setStaticBackground();
        return;
      }

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const travelRange = viewportHeight + rect.height;
      const viewportProgress = (viewportHeight - rect.top) / travelRange;
      const clampedProgress = Math.min(1, Math.max(0, viewportProgress));
      const translateY =
        (clampedProgress - 0.5) * MAX_DESKTOP_TRANSLATE_Y * 2;

      background.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${DESKTOP_SCALE})`;
      background.style.willChange = "transform";
    };

    const requestUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    setStaticBackground();
    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotionQuery.addEventListener("change", requestUpdate);
    desktopQuery.addEventListener("change", requestUpdate);

    return () => {
      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotionQuery.removeEventListener("change", requestUpdate);
      desktopQuery.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-[-3rem] bg-cover bg-[45%_50%] opacity-[0.26] sm:opacity-[0.32] md:opacity-[0.42] lg:opacity-[0.56]"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`,
          transform: `translate3d(0, 0, 0) scale(${MOBILE_SCALE})`,
        }}
      />
    </div>
  );
}
