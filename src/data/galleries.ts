import { photo, photoSeries, type ImageKey, type Photo } from "@/lib/images";
import { projects } from "./projects";

export type GallerySet = { id: string; label: string; photos: Photo[] };

const giriteka: [string, string][] = [
  ["01-ragazzi-accolti", "Ragazzi accolti al Centro Giriteka"],
  ["02-arrivo-al-centro", "L'arrivo al Centro"],
  ["03-arrivo-al-centro", "L'arrivo al Centro"],
  ["04-rifiuto-famiglia", "Il rifiuto della madre e della famiglia"],
  ["05-rifiuto-famiglia", "Il rifiuto della madre e della famiglia"],
  ["06-cucito", "Il laboratorio di cucito"],
  ["07-parrucchiere", "Il laboratorio da parrucchiere"],
  ["08-forneria", "La forneria"],
  ["09-scuola", "A scuola"],
  ["10-tamburi", "I tamburi"],
  ["11-accoglienza-riuscita", "Il sorriso di un'accoglienza riuscita"],
  ["12-vita-serena", "La gioia per una vita serena"],
  ["13-scuola-secondaria", "Studenti arrivati alla scuola secondaria"],
];

const projectSets: GallerySet[] = projects.map((project) => ({
  id: project.slug,
  label: project.title,
  photos: [
    ...project.gallery,
    ...project.updates.flatMap((update) => update.photos),
  ],
}));

/** La pagina Gallery: prima i progetti in corso, poi quelli sostenuti. */
export const projectGalleries: GallerySet[] = [
  ...projectSets,
  {
    id: "bambini-farfalla",
    label: "Bambini farfalla",
    photos: photoSeries(
      "gallery/bambini-farfalla",
      3,
      "I bambini farfalla di Gaza"
    ),
  },
  {
    id: "giriteka",
    label: "Giriteka",
    photos: giriteka.map(([file, caption]) =>
      photo(`gallery/giriteka/${file}` as ImageKey, caption, caption)
    ),
  },
  {
    id: "discarica-catadores",
    label: "Discarica Catadores",
    photos: photoSeries(
      "gallery/discarica-catadores",
      9,
      "Le famiglie dei catadores alla discarica"
    ),
  },
  {
    id: "mutirao",
    label: "Mutirão",
    photos: photoSeries(
      "gallery/mutirao",
      6,
      "La costruzione delle case del Mutirão"
    ),
  },
  {
    id: "clown-in-ospedale",
    label: "Clown in ospedale",
    photos: photoSeries(
      "gallery/clown-in-ospedale",
      6,
      "I clown volontari in ospedale"
    ),
  },
  {
    id: "burkina",
    label: "Burkina Faso",
    photos: photoSeries("gallery/burkina", 7, "Bambini in Burkina Faso"),
  },
  {
    id: "senegal",
    label: "Senegal",
    photos: photoSeries("gallery/senegal", 2, "Il progetto in Senegal"),
  },
];

export const giftGalleries: GallerySet[] = [
  {
    id: "bomboniere",
    label: "Bomboniere",
    photos: photoSeries(
      "regali/bomboniere",
      26,
      "Bomboniera solidale fatta a mano"
    ),
  },
  {
    id: "idee-regalo",
    label: "Idee regalo",
    photos: photoSeries(
      "regali/idee-regalo",
      20,
      "Idea regalo fatta a mano dai volontari"
    ),
  },
  {
    id: "natale",
    label: "Natale",
    photos: photoSeries(
      "regali/natale",
      30,
      "Creazione natalizia fatta a mano dai volontari"
    ),
  },
];
