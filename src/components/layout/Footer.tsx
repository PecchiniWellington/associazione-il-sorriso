import Link from "next/link";
import { SmileMark } from "@/components/brand/SmileMark";
import { CopyButton } from "@/components/ui/CopyButton";
import { Icon } from "@/components/ui/Icon";
import { formatIban, navigation, site } from "@/data/site";
import { reportPdf } from "@/data/transparency";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <p className={`display-l ${styles.claim}`}>
            Fare del bene <span className={styles.yellow}>fa bene.</span>
          </p>
          <SmileMark className={styles.mark} />
        </div>

        <div className={styles.grid}>
          <div className={styles.brand}>
            <p className={styles.name}>{site.legalName}</p>
            <p className="hand">
              …ogni bambino, ovunque nasca, ha diritto ad una vita felice…
            </p>
            <div className={styles.socials}>
              {site.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (si apre in una nuova scheda)`}
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className={styles.heading}>Contatti</h2>
            <address className={styles.list}>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener">
                {site.address.street} – {site.address.area}
                <br />
                {site.address.postalCode} {site.address.city}
              </a>
              <a href={site.phone.href}>{site.phone.label}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`mailto:${site.pec}`}>PEC: {site.pec}</a>
            </address>
          </div>

          <nav aria-label="Mappa del sito">
            <h2 className={styles.heading}>Il sito</h2>
            <ul className={styles.list}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={styles.heading}>Sostienici</h2>
            <dl className={styles.support}>
              <div>
                <dt>5×1000 · Codice fiscale</dt>
                <dd>
                  <span>{site.taxCode}</span>
                  <CopyButton value={site.taxCode} label="il codice fiscale" />
                </dd>
              </div>
              <div>
                <dt>IBAN</dt>
                <dd>
                  <span className={styles.iban}>
                    {formatIban(site.bank.iban)}
                  </span>
                  <CopyButton value={site.bank.iban} label="l'IBAN" />
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {site.legalName} · C.F. {site.taxCode}
          </p>
          <ul>
            <li>
              <a href={reportPdf} target="_blank" rel="noopener">
                Rendicontazione 2014–2018
              </a>
            </li>
            <li>
              <Link href="/cookie-policy/">Cookie policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
