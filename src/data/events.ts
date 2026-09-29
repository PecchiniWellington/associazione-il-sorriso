import { photo, type Photo } from "@/lib/images";

export type SiteEvent = {
  title: string;
  /** Data d'inizio in formato ISO: decide l'ordine e se l'evento è passato. */
  startsOn: string;
  when: string;
  where: string;
  text: string;
  image: Photo;
};

export const events: SiteEvent[] = [
  {
    title: "Mercatino di Natale",
    startsOn: "2024-11-30",
    when: "Sabato 30 novembre, 14:30–19:00 · Domenica 1 dicembre, 8:00–19:00",
    where: "Oratorio di Buffalora, Sala Cappella — via Buffalora 91, Brescia",
    text: "Vieni a trovarci! Gli oggetti belli emozionano; quelli pensati per una cerimonia e con un significato solidale amplificano le emozioni e rendono orgogliosi.",
    image: photo(
      "eventi/mercatino-natale-2024",
      "Il volantino del Mercatino di Natale 2024 dell'Associazione Il Sorriso"
    ),
  },
  {
    title: "La Dott.ssa Elisa Lupi a Buffalora",
    startsOn: "2024-07-22",
    when: "Lunedì 22 luglio, ore 20:30",
    where: "Teatro Parrocchiale di Buffalora, Brescia",
    text: "La Dott.ssa Elisa Lupi lavora come ginecologa in un ospedale in Kenya e, con il progetto Newlife, accompagna le ragazze di strada verso una professione e una vita dignitosa. È venuta a raccontarci la sua storia.",
    image: photo(
      "eventi/elisa-lupi-buffalora",
      "La Dott.ssa Elisa Lupi con un gruppo di ragazze e bambini a Nairobi"
    ),
  },
];

export function sortedEvents(today = new Date()) {
  const isoToday = today.toISOString().slice(0, 10);
  const byDateDesc = [...events].sort((a, b) =>
    b.startsOn.localeCompare(a.startsOn)
  );
  return {
    upcoming: byDateDesc
      .filter((event) => event.startsOn >= isoToday)
      .reverse(),
    past: byDateDesc.filter((event) => event.startsOn < isoToday),
  };
}

export function eventYear(event: SiteEvent) {
  return event.startsOn.slice(0, 4);
}
