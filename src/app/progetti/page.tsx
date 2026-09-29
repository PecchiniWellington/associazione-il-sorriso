import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SupportBanner } from "@/components/support/SupportBanner";
import { PageHero } from "@/components/ui/PageHero";
import { WorldMap } from "@/components/world/WorldMap";
import { projects } from "@/data/projects";
import { countriesReached, projectsSupported } from "@/data/world";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "I progetti in corso dell'Associazione Il Sorriso in Brasile, Perù e Kenya, e tutti i progetti sostenuti dal 1995 in Italia e nel mondo.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Progetti"
        title="Dove c'è bisogno di tanto"
        lead="Finanziamo progetti sanitari, strutture educative e percorsi per prevenire il disagio dei più giovani, insieme a persone e organizzazioni che conosciamo da vicino."
      />

      <section className="section">
        <div className="container">
          <div className={styles.head}>
            <p className="eyebrow" data-reveal>
              In corso
            </p>
            <h2 className="display-l" data-split>
              I progetti che stiamo sostenendo
            </h2>
          </div>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div key={project.slug} data-reveal>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="realizzati" className="section section--dark">
        <div className="container">
          <div className={styles.head}>
            <p className="eyebrow" data-reveal>
              Nel mondo
            </p>
            <h2 className="display-l" data-split>
              {projectsSupported} progetti sostenuti in {countriesReached} paesi
            </h2>
            <p className="lead muted" data-reveal>
              Scuole, pozzi, ospedali, case e mense: tutto quello che abbiamo
              contribuito a costruire. Tocca un punto sulla mappa o scegli un
              paese dall&apos;elenco.
            </p>
          </div>
          <WorldMap />
        </div>
      </section>

      <SupportBanner />
    </>
  );
}
