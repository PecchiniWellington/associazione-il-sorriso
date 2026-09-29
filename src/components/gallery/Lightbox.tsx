"use client";

import { useEffect, useRef } from "react";
import { lockScroll } from "@/components/layout/SmoothScroll";
import { Icon } from "@/components/ui/Icon";
import type { Photo } from "@/lib/images";
import { gsap, MOTION_OK } from "@/lib/gsap";
import styles from "./Lightbox.module.scss";

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onChange: (index: number | null) => void;
};

/** `<dialog>` nativo: focus, Esc e tasto «indietro» funzionano da soli. */
export function Lightbox({ photos, index, onChange }: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const open = index !== null;
  const current = open ? photos[index] : null;

  useEffect(() => {
    const element = dialog.current!;
    if (open && !element.open) {
      element.showModal();
      lockScroll(true);
    }
    if (!open && element.open) element.close();
  }, [open]);

  useEffect(() => {
    if (!current || !window.matchMedia(MOTION_OK).matches) return;
    gsap.fromTo(
      image.current,
      { autoAlpha: 0, scale: 0.96 },
      { autoAlpha: 1, scale: 1, duration: 0.5 }
    );
  }, [current]);

  function step(direction: 1 | -1) {
    if (index === null) return;
    onChange((index + direction + photos.length) % photos.length);
  }

  return (
    <dialog
      ref={dialog}
      className={styles.dialog}
      aria-label="Foto ingrandita"
      onClose={() => {
        lockScroll(false);
        onChange(null);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }}
      onClick={(event) => {
        // Un clic sullo sfondo (fuori dalla foto) chiude.
        if (event.target === event.currentTarget) dialog.current!.close();
      }}
    >
      {current && (
        <figure className={styles.figure}>
          {/* eslint-disable-next-line @next/next/no-img-element -- dimensioni variabili a tutto schermo */}
          <img
            ref={image}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
          />
          <figcaption>
            <span>{current.caption ?? current.alt}</span>
            <span className={styles.counter}>
              {index! + 1} / {photos.length}
            </span>
          </figcaption>
        </figure>
      )}

      <button
        type="button"
        className={`${styles.button} ${styles.close}`}
        onClick={() => dialog.current!.close()}
        aria-label="Chiudi"
        autoFocus
      >
        <Icon name="close" />
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles.prev}`}
        onClick={() => step(-1)}
        aria-label="Foto precedente"
      >
        <Icon name="chevronLeft" />
      </button>
      <button
        type="button"
        className={`${styles.button} ${styles.next}`}
        onClick={() => step(1)}
        aria-label="Foto successiva"
      >
        <Icon name="chevronRight" />
      </button>
    </dialog>
  );
}
