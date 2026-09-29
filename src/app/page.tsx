import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ProjectsRail } from "@/components/home/ProjectsRail";
import { Testimonials } from "@/components/home/Testimonials";
import { WaysToHelp } from "@/components/home/WaysToHelp";
import { SupportBanner } from "@/components/support/SupportBanner";
import { Marquee } from "@/components/ui/Marquee";
import { WorldMap } from "@/components/world/WorldMap";
import styles from "./page.module.scss";

const slogans = [
  "Fare del bene fa bene",
  "Scegli il sorriso",
  "Ogni bambino ha diritto ad una vita felice",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={slogans} tone="yellow" />
      <Intro />
      <ProjectsRail />
      <WaysToHelp />
      <section className="section section--dark">
        <div className="container">
          <div className={styles.mapHead}>
            <p className="eyebrow" data-reveal>
              Nel mondo
            </p>
            <h2 className="display-l" data-split>
              Dove arrivano i vostri sorrisi
            </h2>
            <p className="lead muted" data-reveal>
              Dal Brasile al Kenya, da Gaza a Brescia: tocca un punto sulla
              mappa per scoprire cosa abbiamo realizzato insieme.
            </p>
          </div>
          <WorldMap />
        </div>
      </section>
      <Testimonials />
      <SupportBanner />
    </>
  );
}
