"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/data/site";
import styles from "./ContactForm.module.scss";

const topics = [
  "Informazioni",
  "Bomboniere solidali",
  "Compleanno alternativo",
  "Idee regalo",
  "Donazioni",
  "Diventare volontario",
];

/**
 * Il sito è statico e non ha un server a cui inviare i dati: il modulo
 * prepara l'email nel programma di posta di chi scrive. Nessun dato passa
 * dal sito.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `[${data.get("topic")}] ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")}\n${data.get("email")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Nome e cognome</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>La tua email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>

      <fieldset className={styles.topics}>
        <legend>Di cosa vuoi parlarci?</legend>
        {topics.map((topic, index) => (
          <label key={topic}>
            <input
              type="radio"
              name="topic"
              value={topic}
              defaultChecked={index === 0}
            />
            <span>{topic}</span>
          </label>
        ))}
      </fieldset>

      <label className={styles.field}>
        <span>Messaggio</span>
        <textarea name="message" rows={6} required />
      </label>

      <div className={styles.footer}>
        <button type="submit" className="btn">
          Scrivi la tua email <Icon name="arrow" />
        </button>
        <p className={styles.note} aria-live="polite">
          {sent
            ? `Se il programma di posta non si è aperto, scrivici a ${site.email}.`
            : "Si aprirà il tuo programma di posta con il messaggio già pronto."}
        </p>
      </div>
    </form>
  );
}
