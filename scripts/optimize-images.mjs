/**
 * Converte le foto originali in WebP dentro `public/images` e rigenera il
 * manifest con le dimensioni (`src/data/images.generated.json`).
 *
 * Uso:  npm run images -- <cartella-con-gli-originali>
 *
 * La struttura delle cartelle viene mantenuta: `originali/gallery/burkina/01.jpg`
 * diventa `public/images/gallery/burkina/01.webp` (+ `01.thumb.webp`) e si usa
 * nel codice come `photo("gallery/burkina/01", "testo alternativo")`.
 *
 * Il manifest si ricostruisce leggendo TUTTO `public/images`, non solo i file
 * appena convertiti: così aggiungere una sola cartella non cancella le altre.
 */
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUTPUT_DIR = path.join(ROOT, "public/images");
const MANIFEST = path.join(ROOT, "src/data/images.generated.json");

const FULL = { size: 1800, quality: 78 };
const THUMB = { size: 720, quality: 70 };
const SOURCE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => path.join(entry.parentPath, entry.name));
}

async function writeWebp(source, target, { size, quality }) {
  // `rotate()` senza argomenti applica l'orientamento EXIF: le foto da
  // telefono altrimenti escono coricate. `trim()` toglie le bande bianche
  // con cui alcune foto verticali erano state caricate su una tela orizzontale.
  await sharp(source)
    .rotate()
    .trim({ background: "#ffffff", threshold: 12 })
    .resize({
      width: size,
      height: size,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality })
    .toFile(target);
}

async function convert(inputDir) {
  const sources = (await listFiles(inputDir)).filter((file) =>
    SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase())
  );

  for (const source of sources) {
    const relative = path.relative(inputDir, source).replace(/\.[^.]+$/, "");
    const target = path.join(OUTPUT_DIR, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeWebp(source, `${target}.webp`, FULL);
    await writeWebp(source, `${target}.thumb.webp`, THUMB);
  }

  return sources.length;
}

async function buildManifest() {
  const images = (await listFiles(OUTPUT_DIR)).filter(
    (file) => file.endsWith(".webp") && !file.endsWith(".thumb.webp")
  );

  const entries = await Promise.all(
    images.map(async (file) => {
      const { width, height } = await sharp(file).metadata();
      const key = path.relative(OUTPUT_DIR, file).replace(/\.webp$/, "");
      return [key.split(path.sep).join("/"), { width, height }];
    })
  );

  entries.sort(([a], [b]) => a.localeCompare(b));
  await writeFile(
    MANIFEST,
    `${JSON.stringify(Object.fromEntries(entries), null, 2)}\n`
  );
  return entries.length;
}

const inputDir = process.argv[2];
if (inputDir) {
  const converted = await convert(path.resolve(inputDir));
  console.log(
    `Convertite ${converted} immagini in ${path.relative(ROOT, OUTPUT_DIR)}`
  );
}
const total = await buildManifest();
console.log(`Manifest aggiornato: ${total} immagini`);
