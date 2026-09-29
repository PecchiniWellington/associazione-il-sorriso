"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";
import styles from "./PageMotion.module.scss";

/**
 * Le animazioni si dichiarano nel markup con attributi `data-*`, così le
 * pagine restano Server Component e il movimento vive tutto qui:
 *
 * - `data-reveal[="up|fade|scale|left|right"]` entra quando arriva in vista
 * - `data-split`      titolo che sale riga per riga
 * - `data-parallax="12"` immagine che scorre più lenta della pagina
 * - `data-count="800"`   numero che conta fino al valore
 * - `data-draw`       tratto SVG che si disegna
 */
const REVEAL_FROM: Record<string, gsap.TweenVars> = {
  up: { y: 56, autoAlpha: 0 },
  fade: { autoAlpha: 0 },
  scale: { scale: 0.9, autoAlpha: 0 },
  left: { x: -64, autoAlpha: 0 },
  right: { x: 64, autoAlpha: 0 },
};

const START = "top 88%";

// Al primo caricamento la pagina si mostra subito; la tendina gialla accompagna
// solo i cambi di pagina successivi.
let hasNavigated = false;

// In JSX `data-reveal` senza valore diventa `data-reveal="true"`: tutto ciò
// che non è una variante nota vale come "up".
function revealVariant(element: HTMLElement) {
  const variant = element.dataset.reveal ?? "";
  return variant in REVEAL_FROM ? variant : "up";
}

function reveal(root: HTMLElement) {
  const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]", root);
  for (const [variant, from] of Object.entries(REVEAL_FROM)) {
    const group = elements.filter(
      (element) => revealVariant(element) === variant
    );
    if (group.length === 0) continue;
    gsap.set(group, from);
    ScrollTrigger.batch(group, {
      start: START,
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          x: 0,
          y: 0,
          scale: 1,
          autoAlpha: 1,
          stagger: 0.12,
          duration: 1.1,
          overwrite: true,
          // Lascia di nuovo il transform al CSS (es. gli effetti :hover).
          clearProps: "transform",
        }),
    });
  }
}

function splitLines(root: HTMLElement) {
  gsap.utils.toArray<HTMLElement>("[data-split]", root).forEach((element) => {
    SplitText.create(element, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        gsap.set(element, { visibility: "visible" });
        return gsap.from(self.lines, {
          yPercent: 115,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: element, start: START, once: true },
        });
      },
    });
  });
}

function parallax(root: HTMLElement) {
  gsap.utils
    .toArray<HTMLElement>("[data-parallax]", root)
    .forEach((element) => {
      const amount = Number(element.dataset.parallax) || 10;
      // L'immagine è ingrandita quanto basta a non scoprire mai i bordi mentre
      // si sposta di ±amount%.
      const scale = 1 + (amount * 2.2) / 100;
      gsap.fromTo(
        element,
        { yPercent: -amount, scale },
        {
          yPercent: amount,
          scale,
          ease: "none",
          scrollTrigger: {
            trigger: element.parentElement ?? element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
}

function counters(root: HTMLElement) {
  const format = new Intl.NumberFormat("it-IT");
  gsap.utils.toArray<HTMLElement>("[data-count]", root).forEach((element) => {
    const counter = { value: 0 };
    element.textContent = "0";
    gsap.to(counter, {
      value: Number(element.dataset.count),
      duration: 2.2,
      ease: "power2.out",
      scrollTrigger: { trigger: element, start: START, once: true },
      onUpdate: () => {
        element.textContent = format.format(Math.round(counter.value));
      },
    });
  });
}

function drawStrokes(root: HTMLElement) {
  gsap.utils.toArray<SVGPathElement>("[data-draw]", root).forEach((path) => {
    gsap.from(path, {
      drawSVG: 0,
      duration: 1.4,
      delay: Number(path.dataset.draw) || 0,
      ease: "power2.inOut",
      scrollTrigger: { trigger: path, start: START, once: true },
    });
  });
}

export function PageMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const page = root.current!;
        if (hasNavigated) {
          gsap
            .timeline()
            .set(curtain.current, { scaleY: 1, transformOrigin: "50% 0%" })
            .to(curtain.current, {
              scaleY: 0,
              duration: 0.9,
              ease: "power4.inOut",
            });
        }
        reveal(page);
        splitLines(page);
        parallax(page);
        counters(page);
        drawStrokes(page);
        ScrollTrigger.refresh();
      });
      hasNavigated = true;
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <div ref={curtain} className={styles.curtain} aria-hidden="true" />
      {children}
    </div>
  );
}
