import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SupportBanner } from "@/components/support/SupportBanner";
import { Icon } from "@/components/ui/Icon";
import { findProject, projects } from "@/data/projects";
import styles from "./page.module.scss";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/progetti/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.country}`,
    description: project.excerpt,
    openGraph: { images: [{ url: project.cover.src }] },
  };
}

export default async function ProjectPage(
  props: PageProps<"/progetti/[slug]">
) {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) notFound();

  const others = projects.filter((other) => other.slug !== project.slug);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.cover}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            sizes="100vw"
            priority
            data-parallax="8"
          />
        </div>
        <div className={`container ${styles.heroText}`}>
          <Link href="/progetti/" className={styles.back} data-reveal>
            <Icon name="chevronLeft" /> Tutti i progetti
          </Link>
          <p className="eyebrow" data-reveal>
            {project.place}
          </p>
          <h1 className="display-xl" data-split>
            {project.title}
          </h1>
          <p className={`lead ${styles.tagline}`} data-reveal>
            {project.tagline}
          </p>
        </div>
      </section>

      <section className="section--yellow">
        <ul className={`container ${styles.facts}`}>
          {project.facts.map((fact) => (
            <li key={fact.label} data-reveal>
              <p className={styles.factValue}>{fact.value}</p>
              <p>{fact.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="container">
          <p className={`lead ${styles.excerpt}`} data-reveal>
            {project.excerpt}
          </p>
          {project.sections.map((section) => (
            <article key={section.title} className={styles.block}>
              <h2 className="display-m" data-split>
                {section.title}
              </h2>
              <div className={styles.blockBody}>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} data-reveal>
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul className={styles.items}>
                    {section.items.map((item) => (
                      <li key={item.text} data-reveal>
                        {item.title && <strong>{item.title}</strong>}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <h2 className={`display-m ${styles.galleryTitle}`} data-split>
            Le foto del progetto
          </h2>
          <PhotoGallery
            sets={[
              {
                id: project.slug,
                label: project.title,
                photos: project.gallery,
              },
            ]}
          />
        </div>
      </section>

      {project.updates.length > 0 && (
        <section className="section">
          <div className="container">
            <div className={styles.updatesHead}>
              <p className="eyebrow" data-reveal>
                Aggiornamenti
              </p>
              <h2 className="display-l" data-split>
                Com&apos;è andata finora
              </h2>
            </div>
            <ol className={styles.updates}>
              {project.updates.map((update) => (
                <li key={update.date} className={styles.update}>
                  <div className={styles.updateMeta} data-reveal>
                    <span className={styles.date}>{update.date}</span>
                  </div>
                  <div className={styles.updateBody}>
                    <h3 className="title-s" data-reveal>
                      {update.title}
                    </h3>
                    {update.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} data-reveal>
                        {paragraph}
                      </p>
                    ))}
                    {update.quote && (
                      <blockquote className={styles.quote} data-reveal>
                        <p>{update.quote.text}</p>
                        <footer className="hand">{update.quote.author}</footer>
                      </blockquote>
                    )}
                    <PhotoGallery
                      sets={[
                        {
                          id: `${project.slug}-${update.date}`,
                          label: update.date,
                          photos: update.photos,
                        },
                      ]}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <SupportBanner
        title={<>Sostieni {project.title}</>}
        reason={`Progetto ${project.title}`}
      />

      <section className="section">
        <div className="container">
          <h2 className={`display-m ${styles.othersTitle}`} data-split>
            Gli altri progetti in corso
          </h2>
          <div className={styles.others}>
            {others.map((other) => (
              <div key={other.slug} data-reveal>
                <ProjectCard project={other} index={projects.indexOf(other)} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
