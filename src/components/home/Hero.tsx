"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { SmileMark } from "@/components/brand/SmileMark";
import { Icon } from "@/components/ui/Icon";
import { photo } from "@/lib/images";
import { gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";
import styles from "./Hero.module.scss";

const heroPhoto = photo(
  "home/mani-sorriso",
  "Tante mani, di grandi e di bambini, appoggiate intorno al logo dell'associazione Il Sorriso"
);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.set("[data-intro]", { visibility: "visible" });
        const title = SplitText.create("[data-hero-title]", {
          type: "lines",
          mask: "lines",
        });

        gsap
          .timeline({ delay: 0.1 })
          .from("[data-hero-eyebrow]", { y: 20, autoAlpha: 0, duration: 0.6 })
          .from(
            title.lines,
            { yPercent: 115, stagger: 0.1, duration: 1.3, ease: "expo.out" },
            0.1
          )
          .from(
            "[data-hero-circle]",
            {
              clipPath: "circle(0% at 50% 50%)",
              duration: 1.5,
              ease: "expo.inOut",
            },
            0
          )
          .from(
            "[data-hero-circle] img",
            { scale: 1.5, duration: 2, ease: "expo.out" },
            0.3
          )
          .from(
            "[data-hero-smile]",
            { scale: 0, rotate: -160, duration: 1.1, ease: "back.out(1.8)" },
            0.9
          )
          // Il «:)» si alza e diventa una faccina che sorride.
          .to(
            "[data-hero-smile] svg",
            { rotate: 90, duration: 0.9, ease: "back.inOut(2.2)" },
            "+=0.15"
          )
          .from(
            "[data-hero-fade]",
            { y: 28, autoAlpha: 0, stagger: 0.1, duration: 0.9 },
            0.7
          )
          .from(
            "[data-hero-underline]",
            { drawSVG: 0, duration: 0.9, ease: "power2.inOut" },
            1.1
          )
          .from(
            "[data-hero-note]",
            {
              autoAlpha: 0,
              scale: 0.6,
              rotate: -18,
              duration: 0.9,
              ease: "back.out(2)",
            },
            1.4
          )
          .from(
            "[data-hero-arrow]",
            { drawSVG: 0, duration: 0.7, ease: "power2.out" },
            "-=0.4"
          );

        gsap
          .timeline({ repeat: -1, repeatDelay: 3.2, delay: 3.5 })
          .to("[data-hero-smile] [data-smile='eyes'] circle", {
            scaleX: 0.12,
            transformOrigin: "50% 50%",
            duration: 0.09,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          });

        const scrub = {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        };
        gsap.to("[data-hero-circle]", {
          yPercent: 18,
          scale: 1.06,
          ease: "none",
          scrollTrigger: scrub,
        });
        gsap.to("[data-hero-smile]", {
          rotate: 160,
          yPercent: -60,
          ease: "none",
          scrollTrigger: scrub,
        });
        gsap.to("[data-hero-copy]", {
          yPercent: -12,
          ease: "none",
          scrollTrigger: scrub,
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy} data-hero-copy>
          <p className="eyebrow" data-intro data-hero-eyebrow>
            Organizzazione di Volontariato · dal 1995
          </p>

          <h1 className={styles.title} data-intro data-hero-title>
            Ogni bambino, ovunque nasca, ha diritto ad una vita{" "}
            <span className={styles.happy}>
              felice.
              <svg viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden>
                <path
                  data-hero-underline
                  d="M4 20 C 60 6, 120 26, 180 14 S 270 8, 296 18"
                />
              </svg>
            </span>
          </h1>

          <p className={`lead ${styles.lead}`} data-intro data-hero-fade>
            Dal 1995 sosteniamo progetti per l&apos;infanzia in Italia e nel
            mondo: scuole, mense, cure e percorsi per ricominciare.
          </p>

          <div className={styles.actions} data-intro data-hero-fade>
            <Link href="/sostienici/" className="btn">
              Sostienici <Icon name="heart" />
            </Link>
            <Link href="/progetti/" className="btn btn--outline">
              I nostri progetti <Icon name="arrow" />
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.circle} data-intro data-hero-circle>
            <div className={styles.photo}>
              <Image
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                width={heroPhoto.width}
                height={heroPhoto.height}
                priority
                sizes="(min-width: 900px) 45vw, 90vw"
              />
            </div>
          </div>

          <div className={styles.smile} data-intro data-hero-smile>
            <SmileMark />
          </div>

          <p className={`hand ${styles.note}`} data-intro data-hero-note>
            Fare del bene
            <br />
            fa bene!
            <svg viewBox="0 0 90 70" aria-hidden>
              <path
                data-hero-arrow
                d="M8 6 C 30 10, 58 26, 66 58 M52 48 L 66 60 L 76 44"
              />
            </svg>
          </p>
        </div>
      </div>

      <a href="#scopri" className={styles.scroll} data-intro data-hero-fade>
        <span>Scopri</span>
        <span className={styles.scrollLine} aria-hidden />
      </a>
    </section>
  );
}
