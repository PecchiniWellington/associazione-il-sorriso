import { photo, photoSeries, type Photo } from "@/lib/images";

export type ProjectSection = {
  title: string;
  paragraphs?: string[];
  items?: { title?: string; text: string }[];
};

export type ProjectUpdate = {
  date: string;
  title: string;
  paragraphs: string[];
  quote?: { text: string; author: string };
  photos: Photo[];
};

export type Project = {
  slug: string;
  title: string;
  country: string;
  place: string;
  tagline: string;
  excerpt: string;
  cover: Photo;
  facts: { value: string; label: string }[];
  sections: ProjectSection[];
  gallery: Photo[];
  updates: ProjectUpdate[];
};

const impariamoSorridendo: Project = {
  slug: "impariamo-sorridendo",
  title: "Impariamo Sorridendo",
  country: "Brasile",
  place: "Viseu, Pará — Brasile",
  tagline: "Un centro educativo per i bambini della Cidade Nova",
  excerpt:
    "A Viseu, nel bairro Cidade Nova, non c'era una scuola né un luogo dove i bambini potessero ritrovarsi per imparare. Oggi c'è una casa che si chiama «Il Sorriso».",
  cover: photo(
    "progetti/impariamo-sorridendo/cover",
    "Il nuovo centro educativo di Viseu, due edifici con il tetto spiovente"
  ),
  facts: [
    { value: "600", label: "famiglie nel bairro Cidade Nova" },
    { value: "50.000 €", label: "per costruire il centro" },
    { value: "18.000 €", label: "per tre anni di educatori e insegnanti" },
  ],
  sections: [
    {
      title: "I bambini della Cidade Nova",
      paragraphs: [
        "Nella città di Viseu, nello stato del Pará, esiste un bairro chiamato Cidade Nova: circa 600 famiglie. Qui non c'è una scuola, né un piccolo centro dove i bambini possano ritrovarsi per imparare. Una parte dei bambini va a scuola, ma purtroppo arriva alle medie senza padroneggiare lettura e scrittura.",
        "Le famiglie meno abbienti di Viseu, dove il numero di figli è relativamente alto e le entrate sono costituite solo da magri sussidi governativi (non si superano i 70 euro al mese), non riescono a seguire la crescita dei propri figli, soprattutto nel doposcuola e nel fine settimana: mancano del tutto offerte educative valide.",
        "I bambini passano così buona parte della giornata per strada, abbandonati a se stessi, a contatto diretto con i problemi duri dell'esistenza senza la capacità di affrontarli.",
      ],
    },
    {
      title: "Il progetto",
      paragraphs: [
        "«Impariamo Sorridendo» offre un'opportunità socio-educativa ai bambini della Cidade Nova: un centro dove i bambini, in particolare quelli in età scolare e i più vulnerabili, vengono accolti, ricevono un'istruzione di qualità, sono seguiti nei compiti e partecipano ad attività ludico-educative.",
        "Un ambiente sicuro e stimolante, che non migliora solo le competenze scolastiche ma protegge i più giovani dalla violenza e dalla criminalità.",
        "L'altra parte essenziale del progetto è la formazione e l'assunzione di educatori e animatori locali, con una retribuzione garantita per tre anni. Il progetto è condiviso con le istituzioni locali, perché l'impatto sia sostenibile e duraturo.",
      ],
    },
    {
      title: "Le strutture realizzate e le spese continuative",
      items: [
        { text: "Area coperta per le attività formative: 2 aule e un salone" },
        { text: "Una cucina e una piccola lavanderia" },
        {
          text: "Un chiosco, servizi igienici e un campetto per le attività ludiche",
        },
        { text: "Muro di cinta con recinzione" },
        { text: "Percorsi per il passeggio, alberi e verde" },
        {
          text: "Pannelli solari per contenere le spese e usare energia pulita",
        },
        {
          text: "Manutenzione annua del centro e retribuzione degli educatori",
        },
      ],
    },
  ],
  gallery: photoSeries(
    "progetti/impariamo-sorridendo",
    7,
    "Bambini e cantiere del progetto Impariamo Sorridendo",
    "progetto-"
  ),
  updates: [
    {
      date: "Dicembre 2024",
      title: "Il centro è stato inaugurato",
      paragraphs: [
        "È stata inaugurata la scuola/casa di accoglienza di Viseu. Siamo enormemente felici di essere riusciti, in 15 mesi, a finanziare e vedere realizzato un progetto di questa portata: 50.000 euro di spesa complessiva e un finanziamento di 18.000 euro per sostenere, nei prossimi tre anni, educatori e insegnanti.",
      ],
      quote: {
        text: "Il mio sogno coltivato da anni si è realizzato: offrire a questi bambini un'alternativa alla strada, piena di insidie e terreno fertile per delinquere, è più di quanto avrei sperato. Un grazie sentito all'Associazione Il Sorriso che ha creduto fortemente nel progetto: questa casa, guarda caso, si chiamerà «Il Sorriso».",
        author: "Gabriella Romano, referente del progetto",
      },
      photos: photoSeries(
        "progetti/impariamo-sorridendo",
        2,
        "L'inaugurazione del centro di Viseu",
        "2024-12-"
      ),
    },
    {
      date: "Marzo 2024",
      title: "Quasi pronti",
      paragraphs: [
        "Il centro di accoglienza, sotto lo sguardo attento e competente di Gabriella, è prossimo alla completa realizzazione e all'utilizzo da parte dei bambini, accompagnati da educatori e insegnanti.",
      ],
      photos: photoSeries(
        "progetti/impariamo-sorridendo",
        2,
        "Il centro di Viseu quasi ultimato",
        "2024-03-"
      ),
    },
    {
      date: "Novembre 2023",
      title: "Siamo al tetto!",
      paragraphs: ["La costruzione delle strutture continua."],
      photos: photoSeries(
        "progetti/impariamo-sorridendo",
        8,
        "Il cantiere del centro di Viseu",
        "2023-11-"
      ),
    },
  ],
};

const ninosEsperanza: Project = {
  slug: "ninos-esperanza",
  title: "Niños Esperanza",
  country: "Perù",
  place: "Huaycán, Lima — Perù",
  tagline: "Un pasto dignitoso nel cuore delle colline di Huaycán",
  excerpt:
    "Una mensa comunitaria sulle colline aride di Ate Vitarte: pasti equilibrati ogni giorno per bambini, anziani e madri sole, contro denutrizione e anemia.",
  cover: photo(
    "progetti/ninos-esperanza/cover",
    "Le case di legno sulle colline di Huaycán"
  ),
  facts: [
    { value: "150", label: "pasti gratuiti ogni giorno" },
    { value: "100", label: "famiglie nella comunità della Zona K" },
    { value: "5.000 €", label: "il budget di un anno di mensa" },
  ],
  sections: [
    {
      title: "La comunità",
      paragraphs: [
        "Il progetto risponde alle necessità fondamentali di sopravvivenza delle famiglie che vivono in condizioni di estrema povertà nella Zona K di Huaycán. La mensa «Niños Esperanza de Huaycán» opera in un'area vulnerabile sulle aride colline di Ate Vitarte.",
        "La comunità conta circa 100 famiglie di madrelingua quechua, arrivate dalle montagne e dalla foresta, che vivono in abitazioni improvvisate e molto precarie, prive dei servizi di base. Una famiglia tipo ha più di 5 membri e, nella maggior parte dei casi, è una donna a esserne il capofamiglia.",
        "I bambini soffrono in generale di denutrizione e malnutrizione, parassitosi intestinale, anemia e malattie allergiche, e c'è il rischio di contagio da tubercolosi, molto diffusa nelle famiglie povere. L'iniziativa offre un sostegno concreto a chi non riceve alcun aiuto dallo Stato.",
      ],
    },
    {
      title: "Cosa facciamo",
      items: [
        {
          title: "Distribuzione dei pasti",
          text: "Garantiamo 150 pasti gratuiti al giorno per anziani, persone con disabilità o con problemi di salute mentale e madri sole disoccupate.",
        },
        {
          title: "Ampliamento del servizio",
          text: "Estendiamo la mensa a 50 bambini e alle loro famiglie nel quartiere marginale Señor de Muruhuay.",
        },
        {
          title: "Nutrizione di qualità",
          text: "Pranzi equilibrati con cereali (quinoa, riso, mais), proteine (carne o pesce) e verdure, nel rispetto delle abitudini culinarie locali.",
        },
        {
          title: "Organizzazione comunitaria",
          text: "I pasti li preparano le madri beneficiarie: la formazione e il lavoro di squadra promuovono la leadership femminile e aiutano a superare il maschilismo.",
        },
      ],
    },
    {
      title: "Obiettivi del progetto",
      items: [
        {
          title: "Sostentamento vitale",
          text: "Garantire la sicurezza alimentare alle persone più vulnerabili della Zona K.",
        },
        {
          title: "Salute",
          text: "Ridurre parassitosi e anemia tra i bambini grazie a un'alimentazione corretta.",
        },
        {
          title: "Sviluppo sociale",
          text: "Creare uno spazio di aggregazione che favorisca stili di vita sani e migliori l'ambiente circostante.",
        },
        {
          title: "Sostenibilità",
          text: "Avviare le pratiche per il riconoscimento comunale della mensa e l'accesso a ulteriori benefici.",
        },
      ],
    },
    {
      title: "Costi del progetto",
      paragraphs: [
        "Per far funzionare la mensa Señor de Muruhuay è previsto un budget annuo di 5.000 euro (pari a 20.000 soles): garantisce una media di 50 pasti al giorno e copre alimenti freschi e a lunga conservazione, il gas per la cucina, i trasporti e le spese di gestione.",
      ],
    },
  ],
  gallery: photoSeries(
    "progetti/ninos-esperanza",
    4,
    "La comunità di Huaycán",
    "progetto-"
  ),
  updates: [],
};

const newlife: Project = {
  slug: "newlife",
  title: "Newlife",
  country: "Kenya",
  place: "Nairobi — Kenya",
  tagline: "Una nuova vita per le ragazze di Githurai 45",
  excerpt:
    "Con la Comunità Papa Giovanni XXIII accompagniamo le ragazze di strada di uno dei quartieri più poveri di Nairobi verso un lavoro dignitoso.",
  cover: photo(
    "progetti/newlife/progetto-01",
    "Volontarie e ragazze del progetto Newlife sorridono abbracciate a Nairobi"
  ),
  facts: [
    { value: "2022", label: "l'anno in cui è partito il progetto" },
    { value: "20+", label: "anni di presenza della Comunità a Nairobi" },
    { value: "1 a 1", label: "percorsi costruiti su ogni ragazza" },
  ],
  sections: [
    {
      title: "Nairobi, Kenya",
      paragraphs: [
        "Il progetto è partito nel maggio 2022 all'interno della Comunità Papa Giovanni XXIII, presente a Nairobi da oltre vent'anni. La Comunità ha sempre avuto un'attenzione particolare per le ragazze di strada, in Italia e nelle missioni nel mondo.",
        "All'inizio Newlife era un'estensione del progetto per gli street boys dello stesso quartiere; oggi è un progetto a sé.",
      ],
    },
    {
      title: "Le ragazze di Githurai 45",
      paragraphs: [
        "Githurai 45 è uno dei quartieri più poveri di Nairobi. La prostituzione, benché illegale in Kenya, qui è molto diffusa: numerosi locali, aperti 24 ore su 24, oltre ad alcol e droghe offrono anche «servizi» forniti da ragazze.",
        "L'età delle ragazze nei club varia moltissimo, dalle diciassettenni alle donne di sessant'anni. Ciò che le accomuna è la lotta quotidiana per sopravvivere: pagare la scuola dei figli, l'affitto, il cibo. Quasi tutte sono madri, e cercano di dare ai loro bambini una vita migliore.",
      ],
    },
    {
      title: "Il progetto",
      paragraphs: [
        "Tutto è cominciato con incontri settimanali nei club, durante la pausa pranzo: tè, caffè e biscotti, un momento di pausa e qualcuno che ascolta senza giudizio.",
        "Toccata con mano la povertà che domina le loro vite, la Comunità ha iniziato a costruire progetti personalizzati per offrire un'alternativa: corsi di formazione, come estetista o panificazione, oppure piccoli finanziamenti per avviare un'attività al mercato o una cucina di strada. Prima di ogni sostegno ci sono incontri fuori dai club e visite a casa, per conoscere davvero ogni ragazza.",
        "Sono in programma anche percorsi sulla gestione del denaro e sul ruolo delle donne nella società, in collaborazione con Lifebloom, un'associazione di Naivasha che da anni lavora in questo campo.",
      ],
    },
  ],
  gallery: photoSeries(
    "progetti/newlife",
    6,
    "Le ragazze e le volontarie del progetto Newlife",
    "progetto-"
  ),
  updates: [
    {
      date: "Dicembre 2024",
      title: "Il racconto della Dott.ssa Lupi a Buffalora",
      paragraphs: [
        "Il 22 luglio, al Teatro Parrocchiale di Buffalora, la Dott.ssa Elisa Lupi, insieme al suo collaboratore Lorenzo, ci ha raccontato i suoi quattro anni in Kenya. Oltre 100 persone, tra cui un nutrito gruppo di giovani, hanno ascoltato rapite un racconto a tratti doloroso, divertente, angosciante e di fede.",
        "Il progetto Newlife continua, non senza difficoltà: cresce il numero delle ragazze di strada che vogliono cambiare vita imparando una professione, per ritrovare la speranza di una vita dignitosa dopo un'esistenza segnata dal disprezzo e dall'abbandono.",
      ],
      photos: photoSeries(
        "progetti/newlife",
        8,
        "Le ragazze del progetto Newlife",
        "2024-12-"
      ),
    },
    {
      date: "Marzo 2024",
      title: "Verso professioni dignitose",
      paragraphs: [
        "La Dott.ssa Lupi prosegue nell'integrazione delle ragazze di strada, guidandole verso professioni dignitose che cambieranno la vita a loro e ai loro figli.",
      ],
      photos: photoSeries(
        "progetti/newlife",
        2,
        "Il gruppo del progetto Newlife a Nairobi",
        "2024-03-"
      ),
    },
    {
      date: "Novembre 2023",
      title: "Graduation Day",
      paragraphs: [
        "Alcune ragazze hanno terminato i percorsi di formazione e conseguito il diploma. La Dott.ssa Elisa Lupi ha partecipato all'emozionante cerimonia.",
      ],
      photos: [
        photo(
          "progetti/newlife/2023-11-diplomi",
          "Le ragazze con i diplomi appena conseguiti"
        ),
        photo(
          "progetti/newlife/2023-11-discorso",
          "Un discorso durante la cerimonia di consegna"
        ),
        photo("progetti/newlife/2023-11-elisa-lupi", "La Dott.ssa Elisa Lupi"),
        photo(
          "progetti/newlife/2023-11-commozione",
          "Un momento di commozione alla cerimonia"
        ),
        photo(
          "progetti/newlife/2023-11-scuola-cucina",
          "Il corso di cucina",
          "Scuola di cucina"
        ),
        photo(
          "progetti/newlife/2023-11-scuola-estetica",
          "Il corso di estetica",
          "Scuola di estetica"
        ),
        photo(
          "progetti/newlife/2023-11-scuola-parrucchiere",
          "Il corso da parrucchiera",
          "Scuola da parrucchiera"
        ),
        photo(
          "progetti/newlife/2023-11-scuola-panificazione",
          "Il corso di panificazione",
          "Scuola di panificazione"
        ),
      ],
    },
  ],
};

export const projects = [impariamoSorridendo, ninosEsperanza, newlife];

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
