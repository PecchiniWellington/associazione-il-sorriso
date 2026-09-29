"use client";

import { useRef } from "react";
import type { Milestone } from "@/data/history";
import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "@/lib/gsap";
import styles from "./Timeline.module.scss";

export function Timeline({ milestones }: { milestones: Milestone[] }) {
  const root = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.fromTo(
          "[data-line]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top 65%",
              end: "bottom 65%",
              scrub: 0.5,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>("[data-milestone]").forEach((item) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top 65%",
            toggleClass: { targets: item, className: styles.lit },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <ol ref={root} className={styles.timeline}>
      <span className={styles.track} aria-hidden="true">
        <span className={styles.fill} data-line />
      </span>
      {milestones.map((milestone) => (
        <li
          key={milestone.year}
          className={styles.item}
          data-milestone
          data-reveal
        >
          <span className={styles.dot} aria-hidden="true" />
          <p className={styles.year}>{milestone.year}</p>
          <div className={styles.body}>
            <h3 className="title-s">{milestone.title}</h3>
            <p className="muted">{milestone.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
