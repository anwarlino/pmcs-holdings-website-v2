"use client";

import { useEffect, useRef } from "react";

const HERO_BACKGROUND_SRC =
  "/assets/hero/pmcs-singapore-food-security-platform-hero-background.webp";

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MAX_TRANSLATE_Y = 16;
const BACKGROUND_SCALE = 1.06;

function getClampedHeroOffset(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || 1;
  const heroMidpoint = rect.top + rect.height / 2;
  const viewportMidpoint = viewportHeight / 2;
  const travelRange = viewportHeight / 2 + rect.height / 2 || 1;
  const progress = (heroMidpoint - viewportMidpoint) / travelRange;

  return Math.max(-1, Math.min(1, progress)) * MAX_TRANSLATE_Y;
}

export function HeroParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    const applyStaticTransform = () => {
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0, 0, 0) scale(${BACKGROUND_SCALE})`;
      }
    };

    const updateTransform = () => {
      frameRef.current = null;

      if (!desktopQuery.matches || reducedMotionQuery.matches) {
        applyStaticTransform();
        return;
      }

      const container = containerRef.current;
      const image = imageRef.current;

      if (!container || !image) {
        return;
      }

      const translateY = getClampedHeroOffset(container);
      image.style.transform = `translate3d(0, ${translateY.toFixed(
        2,
      )}px, 0) scale(${BACKGROUND_SCALE})`;
    };

    const requestTransformUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateTransform);
      }
    };

    requestTransformUpdate();
    window.addEventListener("scroll", requestTransformUpdate, { passive: true });
    window.addEventListener("resize", requestTransformUpdate);
    desktopQuery.addEventListener("change", requestTransformUpdate);
    reducedMotionQuery.addEventListener("change", requestTransformUpdate);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      window.removeEventListener("scroll", requestTransformUpdate);
      window.removeEventListener("resize", requestTransformUpdate);
      desktopQuery.removeEventListener("change", requestTransformUpdate);
      reducedMotionQuery.removeEventListener("change", requestTransformUpdate);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        ref={imageRef}
        src={HERO_BACKGROUND_SRC}
        alt=""
        className="absolute inset-[-2rem] h-[calc(100%+4rem)] w-[calc(100%+4rem)] max-w-none object-cover object-center opacity-[0.16] sm:opacity-[0.18] md:opacity-[0.2] lg:object-[center_top] lg:opacity-[0.22] lg:will-change-transform motion-reduce:will-change-auto"
        style={{ transform: `translate3d(0, 0, 0) scale(${BACKGROUND_SCALE})` }}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}
