import { SmileMark } from "@/components/brand/SmileMark";
import styles from "./PageHero.module.scss";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className={`section--yellow ${styles.hero}`}>
      <SmileMark className={styles.mark} />
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow" data-reveal>
          {eyebrow}
        </p>
        <h1 className={`display-xl ${styles.title}`} data-split>
          {title}
        </h1>
        {lead && (
          <p className={`lead ${styles.lead}`} data-reveal>
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
