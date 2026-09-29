import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  project: Project;
  index: number;
  className?: string;
};

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  return (
    <article className={`${styles.card} ${className ?? ""}`}>
      <Link href={`/progetti/${project.slug}/`} className={styles.link}>
        <div className={styles.media}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            sizes="(min-width: 900px) 40vw, 90vw"
          />
        </div>
        <div className={styles.body}>
          <p className={styles.meta}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{project.place}</span>
          </p>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.tagline}>{project.tagline}</p>
          <span className={styles.more}>
            Scopri il progetto <Icon name="arrow" />
          </span>
        </div>
      </Link>
    </article>
  );
}
