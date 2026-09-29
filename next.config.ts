import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sito interamente statico: `npm run build` produce la cartella `out/`,
  // pubblicabile su qualunque hosting (anche il vecchio hosting condiviso).
  output: "export",
  // `/chi-siamo/` -> `out/chi-siamo/index.html`: funziona su ogni server web
  // senza regole di riscrittura, e mantiene gli URL con la barra finale del
  // vecchio sito WordPress.
  trailingSlash: true,
  // L'ottimizzazione di next/image richiede un server: le immagini sono già
  // convertite in WebP da `npm run images`.
  images: { unoptimized: true },
};

export default nextConfig;
