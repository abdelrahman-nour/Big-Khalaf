import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile as p } from "@/data/profile";

const title = `${p.name} | مكملات غذائية في ${p.location.city} - بروتين وكرياتين`;
const description = `${p.name} - ${p.tagline}: مكملات غذائية أصلية في ${p.location.city}. واي بروتين، كرياتين، ماس جينر وفيتامينات. اطلب على واتساب ${p.phoneDisplay}.`;

export const metadata: Metadata = {
  metadataBase: new URL(p.siteUrl),
  title,
  description,
  keywords: p.keywords,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: p.logo ? { icon: p.logo, apple: p.logo } : undefined,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: p.name,
    locale: "ar_EG",
    type: "website",
    images: p.logo ? [{ url: p.logo, alt: p.name }] : undefined,
  },
  twitter: { card: "summary_large_image", title, description, images: p.logo ? [p.logo] : undefined },
};

export const viewport: Viewport = { themeColor: "#0A0A0A" };

// بيانات منظمة لجوجل: بتعرّفه إن ده محل حقيقي برقم وعنوان ومواعيد
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: p.name,
  alternateName: p.tagline,
  description,
  url: p.siteUrl,
  telephone: `+${p.phone}`,
  image: p.logo ? new URL(p.logo, p.siteUrl).toString() : undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress: p.location.street,
    addressLocality: p.location.city,
    addressRegion: p.location.region,
    addressCountry: "EG",
  },
  hasMap: p.location.mapsUrl,
  openingHours: `Mo-Su ${String(p.hours.open).padStart(2, "0")}:00-${String(p.hours.close % 24).padStart(2, "0")}:00`,
  sameAs: Object.values(p.socials),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cairo:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
