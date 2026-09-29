import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { SupportBanner } from "@/components/support/SupportBanner";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { giftGalleries } from "@/data/galleries";
import { site } from "@/data/site";
import { photo } from "@/lib/images";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Regali solidali",
  description:
    "Bomboniere solidali, compleanno alternativo e idee regalo fatte a mano: ogni acquisto sostiene i progetti dell'Associazione Il Sorriso.",
};

const bomboniere = photo(
  "regali/bomboniere-cover",
  "Sacchetti portaconfetti in juta e pizzo con un cuore bianco"
);
const christmas = photo(
  "regali/natale/01",
  "Un presepe fatto a mano dalle volontarie"
);

export default function GiftsPage() {
  return (
    <>
      <PageHero
        eyebrow="Regali solidali"
        title="Regali che valgono due volte"
        lead="Scegliendo i nostri manufatti solidali condividi una gioia che abbraccia tutti: chi dona e chi riceve. Il ricavato va ai nostri progetti."
      >
        <nav className={styles.jump} aria-label="In questa pagina" data-reveal>
          <a href="#bomboniere">Bomboniere solidali</a>
          <a href="#compleanno">Compleanno alternativo</a>
          <a href="#idee-regalo">Idee regalo</a>
        </nav>
      </PageHero>

      <section id="bomboniere" className="section">
        <div className={`container ${styles.split}`}>
          <div className={styles.text}>
            <p className="eyebrow" data-reveal>
              Per i giorni più belli
            </p>
            <h2 className="display-m" data-split>
              Bomboniere solidali
            </h2>
            <p className="lead" data-reveal>
              Scopri il piacere di fare un regalo che vale di più: il ricavato
              delle nostre bomboniere sostiene i progetti
              dell&apos;associazione.
            </p>
            <p data-reveal>
              Realizziamo bomboniere creative e personalizzate per condividere
              la gioia dei momenti più importanti: battesimi, comunioni,
              cresime, lauree, matrimoni. Nella bomboniera possiamo inserire una
              pergamena con il riferimento al progetto che desideri sostenere.
            </p>
            <Link href="/contatti/" className="btn" data-reveal>
              Chiedi la tua bomboniera <Icon name="arrow" />
            </Link>
          </div>
          <figure className={styles.photo} data-reveal="right">
            <Image
              src={bomboniere.src}
              alt={bomboniere.alt}
              width={bomboniere.width}
              height={bomboniere.height}
              sizes="(min-width: 900px) 45vw, 100vw"
            />
          </figure>
        </div>
      </section>

      <section id="compleanno" className="section section--dark">
        <div className={`container ${styles.birthday}`}>
          <p className={`hand ${styles.cake}`} aria-hidden="true" data-reveal>
            Tanti auguri!
          </p>
          <div className={styles.text}>
            <p className="eyebrow" data-reveal>
              Un modo diverso di festeggiare
            </p>
            <h2 className="display-m" data-split>
              Compleanno alternativo
            </h2>
            <p className="lead" data-reveal>
              Al festeggiato si offre un regalo simbolico, frutto della
              solidarietà degli altri bambini: una piccola somma da destinare a
              un progetto solidale, invece di un regalo materiale.
            </p>
            <p className="muted" data-reveal>
              Così il bambino vive la donazione non come un atto di pietà, ma
              come un piccolo contributo per aiutare bambini meno fortunati, con
              cui può nascere un rapporto di amicizia e di scambio. È grazie ai
              compleanni alternativi che nel 2003 abbiamo coperto quasi per
              intero la costruzione di una scuola a Cariaçica, in Brasile.
            </p>
            <div className={styles.actions} data-reveal>
              <a href={`mailto:${site.email}`} className="btn btn--yellow">
                Organizza il tuo compleanno <Icon name="arrow" />
              </a>
              <a href={site.phone.href} className="btn btn--outline">
                {site.phone.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="idee-regalo" className="section">
        <div className="container">
          <div className={styles.split}>
            <div className={styles.text}>
              <p className="eyebrow" data-reveal>
                Fatte a mano
              </p>
              <h2 className="display-m" data-split>
                Idee regalo
              </h2>
              <p className="lead" data-reveal>
                Realizziamo oggetti personalizzati per ogni occasione: Natale,
                compleanni, oggetti per la casa, accessori.
              </p>
              <p className="muted" data-reveal>
                Li trovi ai nostri mercatini o puoi chiederli direttamente:
                scrivici o chiamaci e ti raccontiamo cosa stiamo preparando.
              </p>
            </div>
            <figure className={styles.photo} data-reveal="right">
              <Image
                src={christmas.src}
                alt={christmas.alt}
                width={christmas.width}
                height={christmas.height}
                sizes="(min-width: 900px) 45vw, 100vw"
              />
            </figure>
          </div>

          <div className={styles.gallery}>
            <h3 className="title-s" data-reveal>
              Sfoglia le nostre creazioni
            </h3>
            <PhotoGallery sets={giftGalleries} />
          </div>
        </div>
      </section>

      <SupportBanner />
    </>
  );
}
