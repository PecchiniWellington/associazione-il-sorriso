"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import type { GallerySet } from "@/data/galleries";
import { Flip, gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { Lightbox } from "./Lightbox";
import styles from "./PhotoGallery.module.scss";

const ALL = "tutte";

type PhotoGalleryProps = {
  sets: GallerySet[];
  initial?: string;
  withAll?: boolean;
};

/**
 * Tutte le foto restano nel DOM e i filtri le nascondono con `hidden`:
 * così GSAP Flip può animare sia lo spostamento delle foto rimaste sia
 * l'uscita e l'entrata delle altre.
 */
export function PhotoGallery({
  sets,
  initial = sets[0].id,
  withAll = false,
}: PhotoGalleryProps) {
  const root = useRef<HTMLDivElement>(null);
  const flipState = useRef<Flip.FlipState>(null);
  const [active, setActive] = useState(initial);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () =>
      sets.flatMap((set) =>
        set.photos.map((photo) => ({ ...photo, setId: set.id }))
      ),
    [sets]
  );
  const visible = items.filter(
    (item) => active === ALL || item.setId === active
  );

  const filters = withAll
    ? [{ id: ALL, label: "Tutte", count: items.length }]
    : [];
  filters.push(
    ...sets.map((set) => ({
      id: set.id,
      label: set.label,
      count: set.photos.length,
    }))
  );

  function select(id: string) {
    if (id === active) return;
    flipState.current = Flip.getState("[data-photo]");
    setActive(id);
  }

  useGSAP(
    () => {
      const state = flipState.current;
      if (!state || !window.matchMedia(MOTION_OK).matches) return;
      flipState.current = null;
      Flip.from(state, {
        duration: 0.7,
        ease: "power3.inOut",
        absolute: true,
        stagger: 0.015,
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { autoAlpha: 0, scale: 0.8 },
            { autoAlpha: 1, scale: 1, duration: 0.6, delay: 0.2 }
          ),
        onLeave: (elements) =>
          gsap.to(elements, { autoAlpha: 0, scale: 0.8, duration: 0.4 }),
      });
    },
    { scope: root, dependencies: [active] }
  );

  const showFilters = filters.length > 1;

  return (
    <div ref={root}>
      {showFilters && (
        <div
          className={styles.filters}
          role="group"
          aria-label="Filtra le foto"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active === filter.id}
              onClick={() => select(filter.id)}
            >
              {filter.label}
              <span>{filter.count}</span>
            </button>
          ))}
        </div>
      )}

      <ul className={styles.grid}>
        {items.map((item) => {
          const position = visible.indexOf(item);
          return (
            <li
              key={item.src}
              data-photo
              data-flip-id={item.src}
              hidden={position === -1}
            >
              <button
                type="button"
                className={styles.tile}
                onClick={() => setOpenIndex(position)}
                aria-label={`Ingrandisci: ${item.caption ?? item.alt}`}
              >
                <Image
                  src={item.thumb}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 1100px) 20vw, (min-width: 640px) 30vw, 50vw"
                />
                {item.caption && (
                  <span className={styles.caption}>{item.caption}</span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <Lightbox photos={visible} index={openIndex} onChange={setOpenIndex} />
    </div>
  );
}
