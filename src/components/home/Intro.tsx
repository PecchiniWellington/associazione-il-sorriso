import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { projects } from "@/data/projects";
import { countriesReached, projectsSupported } from "@/data/world";
import { photo } from "@/lib/images";
import styles from "./Intro.module.scss";

const groupPhoto = photo(
  "chi-siamo/gruppo-2023",
  "Il gruppo di volontarie e volontari dell'associazione Il Sorriso in un parco, novembre 2023"
);

const stats = [
  {
    value: 800,
    prefix: "~",
    label: "adozioni internazionali, dal 1995 al 2002",
  },
  { value: countriesReached, label: "paesi raggiunti dai nostri progetti" },
  {
    value: projectsSupported,
    label: "progetti sostenuti in Italia e nel mondo",
  },
  { value: projects.length, label: "progetti in corso, adesso" },
];

export function Intro() {
  return (
    <section id="scopri" className="section">
      <div className="container">
        <div className={styles.head}>
          <p className="eyebrow" data-reveal>
            Chi siamo
          </p>
          <h2 className="display-l" data-split>
            Dal 1995 dalla parte dei <span className="highlight">bambini</span>.
          </h2>
          <div className={styles.text}>
            <p className="lead" data-reveal>
              Riconosciamo come inalienabile il diritto di ogni minore, ovunque
              nasca, a vivere e crescere in buona salute e a essere educato in
              una famiglia o in una struttura che gli permetta una vita
              dignitosa.
            </p>
            <p className="muted" data-reveal>
              Per questo sosteniamo organizzazioni che, in Italia e
              all&apos;estero, lavorano contro l&apos;emarginazione, per
              l&apos;integrazione e nelle emergenze. I fondi li raccogliamo
              anche con le nostre mani: bomboniere, idee regalo, oggetti di
              Natale.
            </p>
            <Link href="/chi-siamo/" className="btn btn--outline" data-reveal>
              La nostra storia <Icon name="arrow" />
            </Link>
          </div>
        </div>

        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.label} className={styles.stat} data-reveal>
              <p className={styles.value}>
                {stat.prefix}
                <span data-count={stat.value}>{stat.value}</span>
              </p>
              <p className={styles.label}>{stat.label}</p>
            </li>
          ))}
        </ul>

        <figure className={styles.photo}>
          <div className={styles.frame} data-reveal="scale">
            <Image
              src={groupPhoto.src}
              alt={groupPhoto.alt}
              width={groupPhoto.width}
              height={groupPhoto.height}
              sizes="(min-width: 1320px) 1320px, 100vw"
              data-parallax="8"
            />
          </div>
          <figcaption className="hand">
            Il nostro gruppo, novembre 2023 :)
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
