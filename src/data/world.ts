/**
 * I punti sulla mappa del mondo (`public/images/mappa/mondo.webp`).
 *
 * `x` e `y` sono percentuali sull'immagine, ricavate dalle coordinate reali
 * con la proiezione di Miller della mappa: longitudine -> x = 47.6 + lon * 0.2447,
 * latitudine -> y = 62.2 - 26.92 * miller(lat). Per aggiungere un luogo basta
 * rifare lo stesso conto.
 */
export type Place = {
  id: string;
  country: string;
  x: number;
  y: number;
  active?: boolean;
  projects: { title: string; text: string; href?: string }[];
};

export const places: Place[] = [
  {
    id: "brasile-viseu",
    country: "Brasile · Viseu",
    x: 36.3,
    y: 62.8,
    active: true,
    projects: [
      {
        title: "Impariamo Sorridendo",
        text: "Un centro educativo per i bambini del bairro Cidade Nova, inaugurato a dicembre 2024.",
        href: "/progetti/impariamo-sorridendo/",
      },
    ],
  },
  {
    id: "peru",
    country: "Perù · Huaycán",
    x: 28.8,
    y: 67.9,
    active: true,
    projects: [
      {
        title: "Niños Esperanza",
        text: "Una mensa comunitaria che garantisce pasti gratuiti alle famiglie più povere della Zona K.",
        href: "/progetti/ninos-esperanza/",
      },
    ],
  },
  {
    id: "kenya",
    country: "Kenya · Nairobi",
    x: 56.6,
    y: 62.8,
    active: true,
    projects: [
      {
        title: "Newlife",
        text: "Formazione e piccole attività per le ragazze di strada di Githurai 45.",
        href: "/progetti/newlife/",
      },
    ],
  },
  {
    id: "brasile",
    country: "Brasile",
    x: 37.7,
    y: 71.8,
    projects: [
      {
        title: "Scuola primaria a Cariaçica",
        text: "Costruita con gli insegnanti di Cariaçica e della scuola M. Bellini di Buffalora (Brescia).",
      },
      {
        title: "Casa da Criança",
        text: "Una sala-ambulatorio per accogliere mamme con figli piccoli (Don Marco Marelli).",
      },
      {
        title: "Quadra",
        text: "Una sala polivalente usata da bambini e ragazzi come centro ricreativo (Don Marco Marelli).",
      },
      {
        title: "Mutirão",
        text: "Materiali per costruire case per le famiglie in difficoltà (Padre Giuseppe Chiarini).",
      },
      {
        title: "Escola das Artes",
        text: "Spazi per musica e teatro a Castanhal do Pará, per offrire opportunità di riscatto a chi vive in grande disagio (Don Marco Marelli).",
      },
    ],
  },
  {
    id: "messico",
    country: "Messico",
    x: 23.3,
    y: 53,
    projects: [
      {
        title: "La Sonrisa de Dios",
        text: "Attrezzature per la riabilitazione motoria di bambini con disabilità (Don Marco Marelli).",
      },
      {
        title: "Terremoto 2017",
        text: "Sostegno alle famiglie di Città del Messico più colpite dal terremoto.",
      },
    ],
  },
  {
    id: "bolivia",
    country: "Bolivia",
    x: 31.4,
    y: 70.5,
    projects: [
      {
        title: "Il convitto di Sergio e Silvana Vitali",
        text: "22 ragazzi accolti da una famiglia che li accompagna nello studio e nella crescita.",
      },
    ],
  },
  {
    id: "ecuador",
    country: "Ecuador",
    x: 28.5,
    y: 63,
    projects: [
      {
        title: "Padre Strazieri",
        text: "Sostegno all'opera di Padre Strazieri (2015–2016).",
      },
    ],
  },
  {
    id: "italia",
    country: "Italia · Brescia",
    x: 50.1,
    y: 39.2,
    projects: [
      {
        title: "Cooperativa Il Calabrone",
        text: "Da oltre 40 anni accoglie e accompagna chi attraversa un periodo di disagio.",
      },
      {
        title: "Nati per Vivere",
        text: "Sostegno alle famiglie con bambini affetti da patologie rare.",
      },
      {
        title: "Mamme oltre il Muro",
        text: "Aiuto alle famiglie con bambini, ragazzi e adulti con disabilità (Borgosatollo).",
      },
      {
        title: "Microcredito Caritas",
        text: "Partecipazione al progetto di microcredito di Castenedolo.",
      },
      {
        title: "Clown in ospedale",
        text: "Momenti di gioco per alleviare le sofferenze dei bambini ricoverati (Dottor Clown Italia).",
      },
      {
        title: "Aiutiamo Brescia",
        text: "Nel 2020-21, durante l'emergenza sanitaria, abbiamo contribuito alla raccolta fondi per la nostra provincia.",
      },
    ],
  },
  {
    id: "senegal",
    country: "Senegal",
    x: 43.3,
    y: 55.2,
    projects: [
      {
        title: "Équipe mediche",
        text: "Sostegno alle équipe mediche italiane in una struttura ospedaliera (Ass. Noha, Dott.ssa Marlene Alberti).",
      },
    ],
  },
  {
    id: "burkina",
    country: "Burkina Faso",
    x: 47.5,
    y: 56.5,
    projects: [
      {
        title: "Ospedale di Koupéla",
        text: "Attrezzature per una sala radiologica e il reparto di pediatria (Dott. Gualtiero Danieli).",
      },
      {
        title: "Un pozzo",
        text: "Realizzato con l'Associazione Cuore Amico Beppe Ussoli.",
      },
    ],
  },
  {
    id: "palestina",
    country: "Palestina · Gaza",
    x: 56,
    y: 46.9,
    projects: [
      {
        title: "Bambini farfalla",
        text: "Cure per i bambini affetti da epidermolisi bollosa: fragili come le ali delle farfalle (Gianna Pasini).",
      },
    ],
  },
  {
    id: "burundi",
    country: "Burundi",
    x: 54.8,
    y: 63.8,
    projects: [
      {
        title: "Giriteka",
        text: "«Ritrova la tua dignità»: il centro di Suor Gisèle per il recupero dei ragazzi di strada.",
      },
    ],
  },
  {
    id: "madagascar",
    country: "Madagascar",
    x: 58.7,
    y: 71.2,
    projects: [
      {
        title: "Un ponte",
        text: "Un ponte in cemento per collegare due villaggi rimasti isolati (Padre Strapazzon).",
      },
    ],
  },
  {
    id: "nepal",
    country: "Nepal",
    x: 68.5,
    y: 48.9,
    projects: [
      {
        title: "Emergenza Nepal",
        text: "Un contributo per l'emergenza nel 2015.",
      },
    ],
  },
];

export const countriesReached = new Set(
  places.map((place) => place.country.split(" · ")[0])
).size;

export const projectsSupported = places.reduce(
  (total, place) => total + place.projects.length,
  0
);
