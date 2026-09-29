"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { gsap, MOTION_OK, ScrollTrigger } from "@/lib/gsap";

let lenis: Lenis | null = null;

/** Blocca lo scorrimento (es. menu mobile, lightbox) con o senza Lenis. */
export function lockScroll(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

/**
 * Scorrimento morbido con Lenis, guidato dal ticker di GSAP: un solo ciclo
 * di animazione per tutto il sito, così ScrollTrigger e Lenis non vanno mai
 * fuori sincrono.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia(MOTION_OK).matches) return;

    const instance = new Lenis({ anchors: true });
    lenis = instance;
    instance.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
