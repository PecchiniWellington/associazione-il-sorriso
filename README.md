# Il Sorriso OdV — sito

Il nuovo sito dell'Associazione Il Sorriso (Brescia): statico, veloce, senza
cookie, con le animazioni fatte in GSAP.

- **Next.js 16** (App Router) esportato come HTML statico (`output: "export"`)
- **TypeScript** + **SCSS modules**
- **GSAP 3** con ScrollTrigger, SplitText, DrawSVG, Flip e ScrollTo (dalla
  versione 3.13 tutti i plugin sono gratuiti, anche per uso commerciale)
- **Lenis** per lo scorrimento morbido, sincronizzato con il ticker di GSAP

## Comandi

```bash
npm install
npm run dev        # sviluppo su http://localhost:3000
npm run build      # sito statico nella cartella out/
npm run lint
npm run format
```

## Struttura

```
src/
  app/              una cartella per pagina (chi-siamo, progetti/[slug], …)
  components/       componenti divisi per area (home, gallery, world, …)
  data/             TUTTI i contenuti del sito, in file TypeScript
  lib/gsap.ts       registrazione dei plugin GSAP (importare sempre da qui)
  lib/images.ts     helper `photo()` per le immagini
  styles/           token (colori, font, spazi) e mixin dei breakpoint
public/
  images/           foto in WebP (piena + .thumb) generate da `npm run images`
  docs/             il PDF della rendicontazione
  _redirects        vecchi URL WordPress -> nuovi (Netlify, Cloudflare Pages)
  .htaccess         stessa mappa per hosting Apache/LiteSpeed
scripts/
  optimize-images.mjs
```

## Aggiornare i contenuti

Tutto il testo sta in `src/data/`: non serve toccare i componenti.

| Cosa                   | File              |
| ---------------------- | ----------------- |
| Contatti, IBAN, social | `site.ts`         |
| Progetti in corso      | `projects.ts`     |
| Punti sulla mappa      | `world.ts`        |
| Eventi                 | `events.ts`       |
| Testimonianze          | `testimonials.ts` |
| Tappe della storia     | `history.ts`      |
| Rendicontazione        | `transparency.ts` |
| Gallery e regali       | `galleries.ts`    |

Gli eventi si dividono da soli in «prossimi» e «passati» in base alla data
del momento in cui si fa la build: dopo un evento basta ricostruire il sito.

### Aggiungere foto

1. Metti gli originali (jpg/png) in una cartella qualsiasi, con la stessa
   struttura di `public/images` — es. `nuove/eventi/mercatino-2026.jpg`.
2. `npm run images -- nuove`
3. Usa la foto nel codice: `photo("eventi/mercatino-2026", "testo alternativo")`.
   Un percorso sbagliato fa fallire la build, non arriva mai online rotto.

Lo script ruota le foto secondo l'EXIF, toglie le bande bianche, crea la
versione piena (1800 px) e la miniatura (720 px) e aggiorna il manifest delle
dimensioni. Gli originali non vanno nel repository.

⚠️ `public/images/mappa/mondo.webp` non è una foto: è la **maschera** delle
terre emerse (oceano trasparente) usata dalla mappa. Non va rigenerata con lo
script.

### Aggiungere un punto sulla mappa

In `world.ts`, `x` e `y` sono percentuali sull'immagine della mappa:

```
x = 47.6 + longitudine × 0.2447
y = 62.2 − 26.92 × 1.25 × ln(tan(π/4 + 0.4 × latitudine in radianti))
```

## Animazioni

Le pagine sono Server Component: le animazioni si dichiarano nel markup con
attributi, e `components/motion/PageMotion.tsx` le attiva a ogni cambio pagina.

| Attributo                                | Effetto                                   |
| ---------------------------------------- | ----------------------------------------- |
| `data-reveal`                            | entra dal basso quando arriva in vista    |
| `data-reveal="fade\|scale\|left\|right"` | varianti dell'entrata                     |
| `data-split`                             | titolo che sale riga per riga (SplitText) |
| `data-parallax="10"`                     | immagine in parallasse (±10%)             |
| `data-count="800"`                       | numero che conta fino al valore           |
| `data-draw`                              | tratto SVG che si disegna (DrawSVG)       |

Animazioni dedicate: hero della home, nastri scorrevoli, progetti in
orizzontale (pin di ScrollTrigger), mappa, timeline, filtri della gallery
(Flip), menu mobile e tendina gialla tra le pagine.

Con «riduci movimento» attivo nel sistema operativo le animazioni e Lenis
si spengono e tutto il contenuto è subito visibile; senza JavaScript il sito
resta completamente leggibile.

## Pubblicazione

`npm run build` produce `out/`, da caricare così com'è su qualunque hosting:

- **hosting attuale (Apache/LiteSpeed)**: carica il contenuto di `out/`; il
  file `.htaccess` gestisce i redirect dai vecchi indirizzi e la pagina 404;
- **Netlify / Cloudflare Pages**: comando `npm run build`, cartella `out`;
  i redirect sono in `_redirects`;
- **Vercel**: funziona senza configurazione (i redirect andrebbero riportati
  in `vercel.json`).

Il modulo contatti non ha un server: apre il programma di posta con il
messaggio già scritto. Per un invio diretto dal sito serve un servizio
esterno (es. un form service) o un piccolo backend.
