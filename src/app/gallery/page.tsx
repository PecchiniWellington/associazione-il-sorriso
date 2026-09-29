import type { Metadata } from "next";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { SupportBanner } from "@/components/support/SupportBanner";
import { PageHero } from "@/components/ui/PageHero";
import { projectGalleries } from "@/data/galleries";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Le foto dei progetti sostenuti dall'Associazione Il Sorriso: Brasile, Perù, Kenya, Burundi, Burkina Faso, Senegal, Gaza e Brescia.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="I volti dei nostri progetti"
        lead="Scuole che crescono, mense, diplomi, cantieri e tanti sorrisi. Scegli un progetto e tocca una foto per ingrandirla."
      />
      <section className="section">
        <div className="container">
          <PhotoGallery sets={projectGalleries} initial="tutte" withAll />
        </div>
      </section>
      <SupportBanner />
    </>
  );
}
