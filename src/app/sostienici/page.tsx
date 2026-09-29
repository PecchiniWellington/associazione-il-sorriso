import type { Metadata } from "next";
import Link from "next/link";
import { Transparency } from "@/components/about/Transparency";
import { CopyButton } from "@/components/ui/CopyButton";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { formatIban, site } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Sostienici",
  description: `Dona il 5×1000 all'Associazione Il Sorriso (codice fiscale ${site.taxCode}) o fai un bonifico: ogni contributo va ai progetti per l'infanzia.`,
};

const otherWays = [
  {
    title: "Bomboniere solidali",
    text: "Per battesimi, comunioni, cresime, lauree e matrimoni.",
    href: "/regali-solidali/#bomboniere",
  },
  {
    title: "Compleanno alternativo",
    text: "Un regalo simbolico che diventa un aiuto concreto.",
    href: "/regali-solidali/#compleanno",
  },
  {
    title: "Idee regalo e mercatini",
    text: "Oggetti fatti a mano, per Natale e per ogni occasione.",
    href: "/regali-solidali/#idee-regalo",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Sostienici"
        title="Aiutaci a realizzare le speranze di chi ha bisogno"
        lead="Ci aiuterai a difendere il diritto di ogni bambino, ovunque nasca, ad avere una vita felice."
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <article className={`${styles.card} ${styles.featured}`} data-reveal>
            <p className={styles.kicker}>5×1000</p>
            <h2 className="display-m">Una firma che non costa nulla</h2>
            <p>
              Nella dichiarazione dei redditi puoi destinare il 5×1000
              dell&apos;IRPEF alle organizzazioni non profit. Non è una spesa
              per te: è una quota di imposta a cui lo Stato rinuncia. Se non
              scegli, il tuo 5×1000 resta allo Stato.
            </p>
            <p>
              In tutti i modelli (730, Redditi, CU) c&apos;è un riquadro per la
              destinazione del 5×1000: firma e scrivi il nostro codice fiscale.
            </p>
            <div className={styles.code}>
              <span className={styles.codeLabel}>Codice fiscale</span>
              <span className={styles.codeValue}>{site.taxCode}</span>
              <CopyButton value={site.taxCode} label="il codice fiscale" />
            </div>
          </article>

          <article className={styles.card} data-reveal>
            <p className={styles.kicker}>Bonifico</p>
            <h2 className="display-m">Una donazione diretta</h2>
            <dl className={styles.bank}>
              <div>
                <dt>Intestato a</dt>
                <dd>{site.legalName}</dd>
              </div>
              <div>
                <dt>Banca</dt>
                <dd>{site.bank.name}</dd>
              </div>
              <div>
                <dt>IBAN</dt>
                <dd className={styles.iban}>
                  {formatIban(site.bank.iban)}
                  <CopyButton value={site.bank.iban} label="l'IBAN" />
                </dd>
              </div>
              <div>
                <dt>C/C · ABI · CAB</dt>
                <dd>
                  {site.bank.account} · {site.bank.abi} · {site.bank.cab}
                </dd>
              </div>
            </dl>
            <p className="muted">
              Se vuoi sostenere un progetto in particolare, scrivilo nella
              causale.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <h2 className={`display-l ${styles.otherTitle}`} data-split>
            Altri modi per esserci
          </h2>
          <ul className={styles.others}>
            {otherWays.map((way) => (
              <li key={way.title} data-reveal>
                <Link href={way.href} className={styles.other}>
                  <span className="title-s">{way.title}</span>
                  <span className="muted">{way.text}</span>
                  <Icon name="arrow" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Transparency />
    </>
  );
}
