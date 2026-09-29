import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { CopyButton } from "@/components/ui/CopyButton";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Scrivi o chiama l'Associazione Il Sorriso: ${site.address.street}, ${site.address.area}, ${site.address.city}.`,
};

const channels: {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: "phone",
    label: "Telefono",
    value: site.phone.label,
    href: site.phone.href,
  },
  {
    icon: "mail",
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "mail",
    label: "PEC",
    value: site.pec,
    href: `mailto:${site.pec}`,
  },
  {
    icon: "pin",
    label: "Sede",
    value: `${site.address.street} – ${site.address.area}, ${site.address.postalCode} ${site.address.city}`,
    href: site.address.mapsUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Scrivici, ci fa piacere"
        lead="Per una bomboniera, un compleanno alternativo, una donazione o semplicemente per conoscerci."
      />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.channels}>
            <h2 className="title-s" data-reveal>
              {site.legalName}
            </h2>
            <ul>
              {channels.map((channel) => (
                <li key={channel.label} data-reveal>
                  <a
                    href={channel.href}
                    className={styles.channel}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                  >
                    <span className={styles.icon}>
                      <Icon name={channel.icon} />
                    </span>
                    <span>
                      <span className={styles.label}>{channel.label}</span>
                      <span className={styles.value}>{channel.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className={styles.socials} data-reveal>
              {site.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  <Icon name={social.icon} /> {social.label}
                </a>
              ))}
            </div>
            <p className={styles.tax} data-reveal>
              Codice fiscale <strong>{site.taxCode}</strong>
              <CopyButton value={site.taxCode} label="il codice fiscale" />
            </p>
          </div>

          <div className={styles.formCard} data-reveal="right">
            <h2 className="display-m">Mandaci un messaggio</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
