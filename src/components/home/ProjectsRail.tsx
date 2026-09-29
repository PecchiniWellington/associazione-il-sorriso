"use client";

import Link from "next/link";
import { useRef } from "react";
import { SmileMark } from "@/components/brand/SmileMark";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Icon } from "@/components/ui/Icon";
import { projects } from "@/data/projects";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import styles from "./ProjectsRail.module.scss";

/**
 * Su schermi larghi la sezione si ferma e le schede scorrono in orizzontale
 * mentre si scorre in verticale; su mobile restano una colonna normale.
 */
export function ProjectsRail() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`(min-width: 900px) and ${MOTION_OK}`, () => {
        const distance = () =>
          track.current!.scrollWidth - document.documentElement.clientWidth;

        const slide = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-rail-card]").forEach((card) => {
          gsap.from(card, {
            rotate: 4,
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: slide,
              start: "left right",
              end: "center center",
              scrub: true,
            },
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className={`section--dark ${styles.rail}`}>
      <div ref={track} className={styles.track}>
        <header className={styles.intro}>
          <p className="eyebrow" data-reveal>
            Progetti in corso
          </p>
          <h2 className="display-l" data-split>
            Dove siamo adesso
          </h2>
          <p className="lead muted" data-reveal>
            Tre progetti, tre continenti. Ognuno nasce da persone che conosciamo
            e di cui ci fidiamo, e lo seguiamo passo dopo passo.
          </p>
          <p className={`hand ${styles.hint}`} aria-hidden="true">
            scorri →
          </p>
        </header>

        {projects.map((project, index) => (
          <div key={project.slug} className={styles.slot} data-rail-card>
            <ProjectCard project={project} index={index} />
          </div>
        ))}

        <Link href="/progetti/" className={styles.all}>
          <SmileMark className={styles.allMark} />
          <span>
            Tutti i progetti
            <br />e dove siamo arrivati
          </span>
          <Icon name="arrow" />
        </Link>
      </div>
    </section>
  );
}
