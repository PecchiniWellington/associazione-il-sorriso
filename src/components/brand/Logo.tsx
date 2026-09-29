import Link from "next/link";
import { SmileMark } from "./SmileMark";
import styles from "./Logo.module.scss";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`${styles.logo} ${className ?? ""}`}
      aria-label="Il Sorriso, torna alla home"
    >
      <SmileMark className={styles.mark} />
      <span className={styles.word}>Il Sorriso</span>
    </Link>
  );
}
