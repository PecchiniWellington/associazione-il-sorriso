/**
 * Prefisso del sito quando non è pubblicato alla radice del dominio (su
 * GitHub Pages sta sotto `/associazione-il-sorriso`). `next/link` lo aggiunge
 * da solo; immagini e file di `public/` vanno invece prefissati con `asset`.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${basePath}${path}`;
}
