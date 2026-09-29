import type { Metadata } from "next";
import Image from "next/image";
import { Timeline } from "@/components/about/Timeline";
import { Transparency } from "@/components/about/Transparency";
import { Testimonials } from "@/components/home/Testimonials";
import { SupportBanner } from "@/components/support/SupportBanner";
import { PageHero } from "@/components/ui/PageHero";
import { milestones } from "@/data/history";
import { photo } from "@/lib/images";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "La storia dell'Associazione Il Sorriso: nata a Mantova nel 1995 dalle adozioni internazionali, oggi a Brescia sostiene progetti per l'infanzia in Italia e nel mondo.",
};

const storyPhoto = photo(
  "chi-siamo/storia",
  "Una volontaria dell'associazione sorride all'aperto"
);

const groupPhoto = photo(
  "chi-siamo/gruppo-2023",
  "Il gruppo dell'associazione Il Sorriso, novembre 2023"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="Una storia lunga trent'anni"
        lead="Siamo nati a Mantova nel 1995 da un gruppo di genitori adottivi. Oggi siamo un gruppo di volontari di Brescia, uniti dal desiderio di stare insieme e di fare del bene."
      />

      <section className="section">
        <div className={`container ${styles.story}`}>
          <div className={styles.storyText}>
            <p className="eyebrow" data-reveal>
              La nostra storia
            </p>
            <h2 className="display-m" data-split>
              Dalle adozioni ai progetti
            </h2>
            <div className="prose">
              <p className="lead" data-reveal>
                L&apos;Associazione Il Sorriso nasce a Mantova nel marzo del
                1995 grazie all&apos;impegno di Antonella che, insieme a un
                gruppo di genitori, si occupa di adozioni internazionali: dal
                1995 al 2002 circa 800 bambini arrivano dalla Bulgaria e dal
                Brasile.
              </p>
              <p data-reveal>
                Terminato l&apos;impegno sul fronte delle adozioni, tutte le
                risorse economiche e umane sono state investite in progetti
                umanitari per migliorare la vita dell&apos;infanzia emarginata:
                cercando di rimuovere le cause all&apos;origine
                dell&apos;abbandono dei minori e di far crescere i bambini
                all&apos;interno della loro famiglia d&apos;origine.
              </p>
              <p data-reveal>
                Nel marzo del 2014 l&apos;associazione si trasferisce a Brescia
                e continua a vivere grazie all&apos;impegno di un gruppo di
                persone che ne condividono le finalità.
              </p>
            </div>
          </div>
          <figure className={styles.storyPhoto} data-reveal="right">
            <Image
              src={storyPhoto.src}
              alt={storyPhoto.alt}
              width={storyPhoto.width}
              height={storyPhoto.height}
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </figure>
        </div>
      </section>

      <section className="section section--cream">
        <div className={`container ${styles.letterWrap}`}>
          <blockquote className={styles.letter} data-reveal="scale">
            <p className="hand">Cara Antonella,</p>
            <p>
              con queste parole volevamo dirti grazie per aver messo a
              disposizione la tua vita, sacrificandoti e sacrificando la tua
              famiglia per noi.
            </p>
            <p>
              Il tuo operato ha fatto sì che una famiglia e un bambino fossero
              felici e coronassero il loro sogno: quello di essere amati e di
              amare.
            </p>
            <p>
              A nessun bambino si può negare l&apos;infanzia e, ovunque nasca,
              ha diritto ad una vita felice. Il nostro impegno sarà quello di
              far tesoro del tuo altruismo.
            </p>
            <p className="hand">Ti vogliamo bene</p>
            <footer>— Gli ex bambini con i loro genitori</footer>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.timelineHead}>
            <p className="eyebrow" data-reveal>
              Le tappe
            </p>
            <h2 className="display-l" data-split>
              Dal 1995 a oggi
            </h2>
          </div>
          <Timeline milestones={milestones} />
        </div>
      </section>

      <section className="section section--dark">
        <div className={`container ${styles.values}`}>
          <article className={styles.value} data-reveal>
            <p className="eyebrow">Vision</p>
            <h2 className="display-m">La nostra visione</h2>
            <p>
              Ci siamo costituiti per riconoscere come inalienabile il diritto
              di ogni minore, ovunque nasca, a vivere e crescere in buona salute
              e a essere educato all&apos;interno di una famiglia o di una
              struttura che gli permetta una vita dignitosa e di inserirsi nella
              società.
            </p>
            <p className="muted">
              Sosteniamo e collaboriamo con organizzazioni che, in Italia o
              all&apos;estero, si occupano di problematiche sociali:
              emarginazione, integrazione, interventi di sostegno in emergenza.
            </p>
          </article>
          <article className={styles.value} data-reveal>
            <p className="eyebrow">Mission</p>
            <h2 className="display-m">La nostra missione</h2>
            <p>Finanziamo, in tutto o in parte, progetti:</p>
            <ul className={styles.list}>
              <li>
                sanitari, con l&apos;acquisto di attrezzature mediche e presidi;
              </li>
              <li>
                per realizzare strutture attrezzate che accolgano bambini e
                ragazzi a scopo ludico-educativo;
              </li>
              <li>per prevenire il disagio delle giovani generazioni.</li>
            </ul>
            <p className="muted">
              Per raggiungere i nostri obiettivi realizziamo manufatti di ogni
              genere (idee regalo, bomboniere, oggetti natalizi, borse,
              bigiotteria) e organizziamo momenti di incontro e formazione.
            </p>
          </article>
        </div>
      </section>

      <figure className={styles.group}>
        <Image
          src={groupPhoto.src}
          alt={groupPhoto.alt}
          width={groupPhoto.width}
          height={groupPhoto.height}
          sizes="100vw"
          data-parallax="10"
        />
        <figcaption className="hand">Il Sorriso, novembre 2023</figcaption>
      </figure>

      <Testimonials />
      <Transparency />
      <SupportBanner />
    </>
  );
}
