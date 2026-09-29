import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={`section--yellow ${styles.page}`}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.face} aria-hidden="true">
          :(
        </p>
        <h1 className="display-l">Questa pagina non c&apos;è</h1>
        <p className="lead">
          Forse è stata spostata con il nuovo sito. Ma un sorriso lo troviamo lo
          stesso.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn">
            Torna alla home <Icon name="arrow" />
          </Link>
          <Link href="/progetti/" className="btn btn--outline">
            Scopri i progetti
          </Link>
        </div>
      </div>
    </section>
  );
}
