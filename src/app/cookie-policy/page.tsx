import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Il sito dell'Associazione Il Sorriso non usa cookie.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Cookie policy"
        title="Questo sito non usa cookie"
        lead="Nessun banner da chiudere: non tracciamo chi ci visita."
      />
      <section className="section">
        <div className={`container ${styles.body}`}>
          <h2 className="title-s">Nessun cookie, nessun tracciamento</h2>
          <p>
            Il sito dell&apos;Associazione Il Sorriso non installa cookie sul
            tuo dispositivo: né cookie tecnici, né cookie di profilazione, né
            cookie di terze parti. Non usiamo strumenti di statistica o di
            pubblicità, e i caratteri tipografici sono ospitati sul nostro
            stesso sito, senza richieste a servizi esterni.
          </p>

          <h2 className="title-s">Link verso altri siti</h2>
          <p>
            Quando segui un link verso Facebook, Instagram o Google Maps lasci
            il nostro sito: da quel momento valgono le informative di quei
            servizi.
          </p>

          <h2 className="title-s">Il modulo di contatto</h2>
          <p>
            Il modulo della pagina Contatti non invia dati al sito: prepara un
            messaggio nel tuo programma di posta, che decidi tu se spedire. Le
            email che riceviamo le usiamo solo per risponderti.
          </p>

          <h2 className="title-s">Dati tecnici</h2>
          <p>
            Come ogni sito, il servizio che lo ospita può registrare dati
            tecnici delle visite (per esempio l&apos;indirizzo IP) per motivi di
            sicurezza e di funzionamento.
          </p>

          <h2 className="title-s">Titolare</h2>
          <p>
            {site.legalName}, {site.address.street} – {site.address.area},{" "}
            {site.address.postalCode} {site.address.city} ·{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> · PEC{" "}
            <a href={`mailto:${site.pec}`}>{site.pec}</a>
          </p>

          <p className="muted">Ultimo aggiornamento: 29 settembre 2026.</p>
        </div>
      </section>
    </>
  );
}
