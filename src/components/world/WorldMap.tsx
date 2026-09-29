"use client";

import Link from "next/link";
import { type CSSProperties, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { places } from "@/data/world";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { asset } from "@/lib/paths";
import styles from "./WorldMap.module.scss";

export function WorldMap() {
  const root = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState(places[0].id);
  const selected = places.find((place) => place.id === selectedId)!;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-pin]", {
          y: -40,
          scale: 0,
          autoAlpha: 0,
          duration: 0.9,
          ease: "back.out(3)",
          stagger: { each: 0.07, from: "random" },
          scrollTrigger: {
            trigger: "[data-map]",
            start: "top 75%",
            once: true,
          },
        });
      });
    },
    { scope: root }
  );

  // Il pannello «rimbalza» dentro a ogni cambio di luogo.
  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        gsap.from("[data-panel] > *", {
          y: 24,
          autoAlpha: 0,
          stagger: 0.06,
          duration: 0.6,
        });
      });
    },
    { scope: root, dependencies: [selectedId] }
  );

  return (
    <div ref={root} className={styles.wrapper}>
      <div className={styles.map} data-map>
        <div
          className={styles.land}
          style={
            {
              "--land": `url(${asset("/images/mappa/mondo.webp")})`,
            } as CSSProperties
          }
          aria-hidden="true"
        />
        {places.map((place) => (
          <button
            key={place.id}
            type="button"
            className={styles.pin}
            style={{ left: `${place.x}%`, top: `${place.y}%` }}
            data-pin
            data-active={place.active ?? false}
            aria-pressed={place.id === selectedId}
            aria-label={`${place.country}: ${place.projects.length} ${
              place.projects.length === 1 ? "progetto" : "progetti"
            }`}
            onClick={() => setSelectedId(place.id)}
          >
            <span />
          </button>
        ))}
      </div>

      <aside className={styles.panel} aria-live="polite">
        <div data-panel key={selected.id}>
          <p className={styles.status}>
            {selected.active ? "Progetto in corso" : "Progetti sostenuti"}
          </p>
          <h3 className={styles.country}>{selected.country}</h3>
          <ul className={styles.projects}>
            {selected.projects.map((project) => (
              <li key={project.title}>
                <h4>{project.title}</h4>
                <p>{project.text}</p>
                {project.href && (
                  <Link href={project.href} className={styles.more}>
                    Scopri il progetto <Icon name="arrow" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <ul className={styles.chips} aria-label="Scegli un paese">
        {places.map((place) => (
          <li key={place.id}>
            <button
              type="button"
              aria-pressed={place.id === selectedId}
              data-active={place.active ?? false}
              onClick={() => setSelectedId(place.id)}
            >
              {place.country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
