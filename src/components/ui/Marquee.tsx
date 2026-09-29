"use client";

import { Fragment, useRef } from "react";
import { SmileMark } from "@/components/brand/SmileMark";
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "@/lib/gsap";
import styles from "./Marquee.module.scss";

type MarqueeProps = {
  items: readonly string[];
  tone?: "dark" | "yellow";
  reverse?: boolean;
  className?: string;
};

/**
 * Testo che scorre all'infinito. La striscia contiene il testo due volte:
 * spostandola di metà della sua larghezza il giro si chiude senza stacchi.
 * Scorrendo la pagina velocemente, anche il nastro accelera.
 */
export function Marquee({
  items,
  tone = "dark",
  reverse = false,
  className,
}: MarqueeProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const loop = gsap.fromTo(
          "[data-track]",
          { xPercent: reverse ? -50 : 0 },
          {
            xPercent: reverse ? 0 : -50,
            duration: 40,
            ease: "none",
            repeat: -1,
          }
        );

        ScrollTrigger.create({
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 6);
            gsap
              .timeline()
              .to(loop, { timeScale: boost, duration: 0.2, overwrite: true })
              .to(loop, { timeScale: 1, duration: 1.2, ease: "power2.out" });
          },
        });
      });
    },
    { scope: root }
  );

  const sequence = (copy: number) =>
    items.map((item, index) => (
      <Fragment key={`${copy}-${index}`}>
        <span>{item}</span>
        <SmileMark className={styles.mark} />
      </Fragment>
    ));

  return (
    <div
      ref={root}
      className={`${styles.marquee} ${styles[tone]} ${className ?? ""}`}
    >
      <p className="sr-only">{items.join(" · ")}</p>
      <div className={styles.track} data-track aria-hidden="true">
        {sequence(0)}
        {sequence(1)}
      </div>
    </div>
  );
}
