"use client";

import { useRef } from "react";
import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/data/testimonials";
import { gsap, MOTION_OK } from "@/lib/gsap";
import styles from "./Testimonials.module.scss";

/**
 * Scorrimento orizzontale nativo (touch, trackpad e tastiera funzionano da
 * soli, con lo snap del CSS); GSAP anima solo i bottoni avanti/indietro.
 */
export function Testimonials({ dark = false }: { dark?: boolean }) {
  const track = useRef<HTMLUListElement>(null);

  function move(direction: 1 | -1) {
    const element = track.current!;
    const card = element.querySelector("li")!;
    const step = card.getBoundingClientRect().width + 20;
    const target = element.scrollLeft + direction * step;
    const reduced = !window.matchMedia(MOTION_OK).matches;
    gsap.to(element, {
      scrollTo: { x: target },
      duration: reduced ? 0 : 0.8,
      ease: "power3.inOut",
    });
  }

  return (
    <section className={`section ${dark ? "section--dark" : "section--cream"}`}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow" data-reveal>
              Testimonianze
            </p>
            <h2 className="display-m" data-split>
              Le parole di chi è dall&apos;altra parte
            </h2>
          </div>
          <div className={styles.controls}>
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Testimonianza precedente"
            >
              <Icon name="chevronLeft" />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Testimonianza successiva"
            >
              <Icon name="chevronRight" />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        className={styles.track}
        tabIndex={0}
        aria-label="Testimonianze, scorri in orizzontale"
      >
        {testimonials.map((testimonial) => (
          <li key={testimonial.author} className={styles.card} data-reveal>
            <figure>
              <span className={styles.quoteMark} aria-hidden="true">
                “
              </span>
              <blockquote>
                <p>{testimonial.quote}</p>
              </blockquote>
              <figcaption>
                <span className="hand">{testimonial.author}</span>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
