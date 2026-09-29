import manifest from "@/data/images.generated.json";

export type ImageKey = keyof typeof manifest;

export type Photo = {
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

/**
 * Le chiavi arrivano dal manifest generato da `npm run images`: un percorso
 * sbagliato fa fallire la build, invece di pubblicare un'immagine rotta.
 */
export function photo(key: ImageKey, alt: string, caption?: string): Photo {
  const entry = manifest[key];
  if (!entry) throw new Error(`Immagine assente dal manifest: ${key}`);
  const { width, height } = entry;
  return {
    src: `/images/${key}.webp`,
    thumb: `/images/${key}.thumb.webp`,
    width,
    height,
    alt,
    caption,
  };
}

/** Serie numerate (`01`, `02`, …) di una stessa cartella, con lo stesso alt. */
export function photoSeries(
  folder: string,
  count: number,
  alt: string,
  prefix = ""
): Photo[] {
  return Array.from({ length: count }, (_, index) => {
    const key = `${folder}/${prefix}${String(index + 1).padStart(2, "0")}`;
    return photo(key as ImageKey, `${alt} (${index + 1} di ${count})`);
  });
}
