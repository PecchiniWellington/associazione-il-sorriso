"use client";

import { Fragment, useRef } from "react";
import { SmileMark } from "@/components/brand/SmileMark";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
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
        gsap.fromTo(
          "[data-track]",
          { xPercent: reverse ? -50 : 0 },
          {
            xPercent: reverse ? 0 : -50,
            duration: 30,
            ease: "none",
            repeat: -1,
          }
        );
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
