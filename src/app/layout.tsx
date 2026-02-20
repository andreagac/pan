import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Panadería Antofagasta — Más de 80 años de tradición panadera",
  description:
    "Panadería familiar en Santiago Centro con más de 80 años de tradición. Marraquetas, empanadas de pino, pan fresco y dulces artesanales. Antofagasta 2899, Santiago Centro.",
  metadataBase: new URL("https://panaderiaantofagasta.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panadería Antofagasta — Más de 80 años de tradición panadera",
    description:
      "Panadería familiar en Santiago Centro con más de 80 años de tradición. Marraquetas, empanadas de pino, pan fresco y dulces artesanales.",
    url: "https://panaderiaantofagasta.cl",
    siteName: "Panadería Antofagasta",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Panadería Antofagasta",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Panadería Antofagasta — Más de 80 años de tradición panadera",
    description:
      "Panadería familiar en Santiago Centro con más de 80 años de tradición. Pan artesanal horneado con amor.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Panadería Antofagasta",
  description:
    "Panadería familiar en Santiago Centro con más de 80 años de tradición. Marraquetas, empanadas de pino, pan fresco y dulces artesanales.",
  url: "https://panaderiaantofagasta.cl",
  telephone: "+56224036861",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Antofagasta 2899",
    addressLocality: "Santiago Centro",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.4585,
    longitude: -70.6595,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "06:30",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:30",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://instagram.com/panaderia_antofagasta",
    "https://web.facebook.com/PanaderiaAntofagasta/",
  ],
  image: "https://panaderiaantofagasta.cl/logo.png",
  priceRange: "$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
