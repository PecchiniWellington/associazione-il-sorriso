export const site = {
  name: "Il Sorriso",
  legalName: "Il Sorriso OdV",
  kind: "Organizzazione di Volontariato",
  url: "https://www.associazioneilsorriso.it",
  motto: "Ogni bambino, ovunque nasca, ha diritto ad una vita felice.",
  foundedYear: 1995,
  description:
    "Il Sorriso è un'organizzazione di volontariato di Brescia che dal 1995 sostiene progetti per l'infanzia in Italia e nel mondo.",
  address: {
    street: "Via Quinta, 22",
    area: "Villaggio Buffalora",
    postalCode: "25129",
    city: "Brescia",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Via+Quinta+22+25129+Brescia",
  },
  phone: { label: "+39 333 345 7094", href: "tel:+393333457094" },
  email: "associazioneilsorriso@hotmail.it",
  pec: "ilsorrisoodv@pec.it",
  taxCode: "01745350205",
  bank: {
    name: "BTL – Banca del Territorio Lombardo",
    iban: "IT87F0873511202029000290090",
    account: "290090",
    abi: "08735",
    cab: "11202",
  },
  socials: [
    {
      label: "Facebook",
      icon: "facebook",
      href: "https://www.facebook.com/ilsorrisoODV",
    },
    {
      label: "Instagram",
      icon: "instagram",
      href: "https://www.instagram.com/associazioneilsorriso",
    },
  ],
} as const;

export const navigation = [
  { label: "Chi siamo", href: "/chi-siamo/" },
  { label: "Progetti", href: "/progetti/" },
  { label: "Regali solidali", href: "/regali-solidali/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "News ed eventi", href: "/news-eventi/" },
  { label: "Contatti", href: "/contatti/" },
] as const;

/** `IT87F087…` -> `IT87 F087 …`: leggibile, ma si copia sempre senza spazi. */
export function formatIban(iban: string) {
  return iban.replace(/(.{4})/g, "$1 ").trim();
}
