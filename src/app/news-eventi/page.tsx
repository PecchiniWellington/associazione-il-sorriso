import type { Metadata } from "next";
import Image from "next/image";
import { SupportBanner } from "@/components/support/SupportBanner";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { eventYear, sortedEvents, type SiteEvent } from "@/data/events";
import { site } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "News ed eventi",
  description:
    "Mercatini, incontri e serate dell'Associazione Il Sorriso a Brescia.",
};

function EventCard({ event }: { event: SiteEvent }) {
  return (
    <article className={styles.card} data-reveal>
      <div className={styles.media}>
        <Image
          src={event.image.src}
          alt={event.image.alt}
          width={event.image.width}
          height={event.image.height}
          sizes="(min-width: 900px) 40vw, 100vw"
        />
      </div>
      <div className={styles.body}>
        <p className={styles.year}>{eventYear(event)}</p>
        <h3 className="display-m">{event.title}</h3>
        <dl className={styles.details}>
          <div>
            <dt>Quando</dt>
            <dd>{event.when}</dd>
          </div>
          <div>
            <dt>Dove</dt>
            <dd>{event.where}</dd>
          </div>
        </dl>
        <p className="muted">{event.text}</p>
      </div>
    </article>
  );
}

export default function EventsPage() {
  // Calcolato alla build: ricostruire il sito sposta da solo gli eventi passati.
  const { upcoming, past } = sortedEvents();

  return (
    <>
      <PageHero
        eyebrow="News ed eventi"
        title="Ci vediamo in giro"
        lead="Mercatini di Natale, serate di racconti dai progetti, incontri in oratorio: i nostri appuntamenti a Brescia e dintorni."
      />

      <section className="section">
        <div className="container">
          <div className={styles.head}>
            <h2 className="display-l" data-split>
              {upcoming.length > 0
                ? "Prossimi appuntamenti"
                : "Presto nuovi appuntamenti"}
            </h2>
            {upcoming.length === 0 && (
              <div className={styles.follow} data-reveal>
                <p className="lead">
                  Per non perderti il prossimo mercatino seguici sui social.
                </p>
                <div className={styles.socials}>
                  {site.socials.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      <Icon name={social.icon} /> {social.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {upcoming.map((event) => (
            <EventCard key={event.title + event.startsOn} event={event} />
          ))}
        </div>
      </section>

      {past.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <h2 className={`display-m ${styles.pastTitle}`} data-split>
              Eventi passati
            </h2>
            <div className={styles.list}>
              {past.map((event) => (
                <EventCard key={event.title + event.startsOn} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}

      <SupportBanner />
    </>
  );
}
