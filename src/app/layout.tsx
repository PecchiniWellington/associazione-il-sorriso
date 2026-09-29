import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat, Figtree } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { site } from "@/data/site";
import { basePath } from "@/lib/paths";
import "@/styles/globals.scss";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — ${site.motto}`,
    template: `%s · ${site.legalName}`,
  },
  description: site.description,
  // L'anteprima su GitHub Pages non deve finire su Google al posto del sito.
  robots: basePath ? { index: false, follow: false } : undefined,
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: site.legalName,
    images: [{ url: "/images/home/mani-sorriso.webp", width: 1800 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#feda0a",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email,
  telephone: site.phone.href.replace("tel:", ""),
  taxID: site.taxCode,
  foundingDate: String(site.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: "IT",
  },
  sameAs: site.socials.map((social) => social.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="it"
      className={`${display.variable} ${body.variable} ${hand.variable}`}
      // Lo script qui sotto aggiunge la classe `js` prima dell'idratazione.
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </head>
      <body>
        <a href="#contenuto" className="skip-link">
          Vai al contenuto
        </a>
        <SmoothScroll />
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
