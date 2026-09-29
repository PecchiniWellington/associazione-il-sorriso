import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";
import styles from "./WaysToHelp.module.scss";

const ways = [
  {
    word: "Auguri!",
    title: "Compleanno alternativo",
    text: "Invece di un regalo, gli amici del festeggiato fanno una piccola donazione a un progetto solidale. Un gesto che i bambini capiscono benissimo.",
    href: "/regali-solidali/#compleanno",
    cta: "Come funziona",
  },
  {
    word: "Sì, lo voglio",
    title: "Bomboniere solidali",
    text: "Bomboniere creative e personalizzate per battesimi, comunioni, cresime, lauree e matrimoni. Il ricavato va ai nostri progetti.",
    href: "/regali-solidali/#bomboniere",
    cta: "Guarda le bomboniere",
  },
  {
    word: "5×1000",
    title: "Firma per noi",
    text: `Nella dichiarazione dei redditi scrivi il codice fiscale ${site.taxCode}: a te non costa nulla, per i bambini vale moltissimo.`,
    href: "/sostienici/",
    cta: "Tutti i modi per aiutarci",
  },
];

export function WaysToHelp() {
  return (
    <section className="section section--yellow">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow" data-reveal>
            Scegli il sorriso
          </p>
          <h2 className="display-l" data-split>
            Tre modi per regalare un sorriso
          </h2>
        </div>

        <ol className={styles.cards}>
          {ways.map((way, index) => (
            <li key={way.title} className={styles.card} data-reveal="up">
              <p className={`hand ${styles.word}`}>{way.word}</p>
              <span className={styles.number}>0{index + 1}</span>
              <h3 className="title-s">{way.title}</h3>
              <p className={styles.text}>{way.text}</p>
              <Link href={way.href} className={styles.link}>
                {way.cta} <Icon name="arrow" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
