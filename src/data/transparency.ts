import { asset } from "@/lib/paths";

/** Dal PDF «Rendicontazione 2014–2018» (`public/docs`). Importi in euro. */
export type ReportYear = {
  year: number;
  donations?: number;
  fivePerThousand: { amount: number; referenceYear: number };
  funded: { name: string; amount: number }[];
};

export const reportPdf = asset("/docs/rendicontazione-2014-2018.pdf");

export const report: ReportYear[] = [
  {
    year: 2018,
    fivePerThousand: { amount: 8786.34, referenceYear: 2016 },
    funded: [
      { name: "Coop. Il Calabrone", amount: 10000 },
      { name: "Bambini farfalla Gaza", amount: 7000 },
      { name: "Giriteka Burundi", amount: 6000 },
      { name: "Clown in ospedale, missione Palestina", amount: 1500 },
    ],
  },
  {
    year: 2017,
    donations: 10090,
    fivePerThousand: { amount: 9441.34, referenceYear: 2015 },
    funded: [
      { name: "Padre Chiarini, orfanotrofio", amount: 3000 },
      { name: "Coop. Il Calabrone", amount: 10000 },
      { name: "Don Marco, terremoto Messico", amount: 5000 },
      { name: "Giriteka Burundi", amount: 4000 },
      { name: "Bambini farfalla Gaza", amount: 3000 },
    ],
  },
  {
    year: 2016,
    donations: 13263,
    fivePerThousand: { amount: 9643.45, referenceYear: 2014 },
    funded: [
      { name: "Padre Chiarini, Mutirão Brasile", amount: 4000 },
      { name: "Coop. Il Calabrone", amount: 10000 },
      { name: "Padre Strapazzon", amount: 5000 },
      { name: "Ospedali Burkina", amount: 5000 },
      { name: "Padre Strazieri, Ecuador", amount: 1500 },
      { name: "Noha Onlus Senegal", amount: 5000 },
      { name: "Ass. Nati per Vivere", amount: 5000 },
    ],
  },
  {
    year: 2015,
    donations: 19700,
    fivePerThousand: { amount: 8893.68, referenceYear: 2013 },
    funded: [
      { name: "Mamme oltre il Muro", amount: 6000 },
      { name: "Coop. Il Calabrone", amount: 10000 },
      { name: "Emergenza Nepal", amount: 1500 },
      { name: "Padre Chiarini, Mutirão Brasile", amount: 5000 },
      { name: "Padre Strazieri, Ecuador", amount: 2939.06 },
    ],
  },
  {
    year: 2014,
    donations: 17692,
    fivePerThousand: { amount: 9470.28, referenceYear: 2012 },
    funded: [
      { name: "Microcredito Caritas", amount: 5000 },
      { name: "Coop. Il Calabrone", amount: 15000 },
      { name: "Ospedali Burkina", amount: 5000 },
      { name: "Padre Chiarini, Mutirão Brasile", amount: 5000 },
    ],
  },
];

export const totalFunded = report.reduce(
  (sum, year) =>
    sum + year.funded.reduce((yearSum, item) => yearSum + item.amount, 0),
  0
);

export function euro(amount: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
    // In italiano i numeri a 4 cifre non avrebbero il punto (7000 accanto a
    // 10.000): "always" lo mette sempre, e le colonne restano coerenti.
    useGrouping: "always",
  }).format(amount);
}
