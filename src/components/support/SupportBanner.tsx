import Link from "next/link";
import { SmileMark } from "@/components/brand/SmileMark";
import { CopyButton } from "@/components/ui/CopyButton";
import { Icon } from "@/components/ui/Icon";
import { formatIban, site } from "@/data/site";
import styles from "./SupportBanner.module.scss";

type SupportBannerProps = {
  title?: React.ReactNode;
  /** Suggerimento per la causale del bonifico, es. il nome del progetto. */
  reason?: string;
};

export function SupportBanner({
  title = "Scegli il sorriso.",
  reason,
}: SupportBannerProps) {
  return (
    <section className={`section section--yellow ${styles.banner}`}>
      <SmileMark className={styles.bgMark} />
      <div className="container">
        <p className="eyebrow" data-reveal>
          Sostienici
        </p>
        <h2 className={`display-xl ${styles.title}`} data-split>
          {title}
        </h2>

        <div className={styles.grid}>
          <div className={styles.box} data-reveal>
            <p className={styles.label}>5×1000 · codice fiscale</p>
            <p className={styles.value}>{site.taxCode}</p>
            <CopyButton value={site.taxCode} label="il codice fiscale" />
          </div>
          <div className={styles.box} data-reveal>
            <p className={styles.label}>Bonifico · {site.bank.name}</p>
            <p className={`${styles.value} ${styles.iban}`}>
              {formatIban(site.bank.iban)}
            </p>
            <CopyButton value={site.bank.iban} label="l'IBAN" />
            {reason && (
              <p className={styles.reason}>
                Causale: <strong>{reason}</strong>
              </p>
            )}
          </div>
          <div className={styles.more} data-reveal>
            <p>
              Puoi aiutarci anche con le bomboniere solidali, un compleanno
              alternativo o passando ai nostri mercatini.
            </p>
            <Link href="/sostienici/" className="btn">
              Tutti i modi per sostenerci <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
