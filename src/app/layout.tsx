import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SocialSidebar from "../components/common/SocialSidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://pulakgraphics.com"),

  title: {
    default: "Pulak Graphics | Printing, Publication, Media & Live Coverage",
    template: "%s | Pulak Graphics",
  },

  description:
    "Pulak Graphics provides professional printing, publication, media coverage, event photography, videography, branding, design and live event coverage services in Delhi NCR.",

  keywords: [
    "Pulak Graphics",
    "Printing Services Delhi",
    "Publication Services",
    "Media Coverage",
    "Live Event Coverage",
    "Event Photography",
    "Event Videography",
    "Graphic Designing",
    "Flex Printing",
    "Book Printing",
    "Religious Publications",
    "Branding Services",
    "Delhi Printing Company",
    "Professional Printing",
    "Jinsharnam Media",
  ],

  authors: [
    {
      name: "Pulak Graphics",
      url: "https://pulakgraphics.com",
    },
  ],

  creator: "Pulak Graphics",
  publisher: "Pulak Graphics",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://pulakgraphics.com",
  },

  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pulakgraphics.com",
    siteName: "Pulak Graphics",

    title:
      "Pulak Graphics | Printing, Publication, Media & Live Coverage",

    description:
      "Professional printing, publication, branding, media production and live event coverage services.",

    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Pulak Graphics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pulak Graphics | Printing, Publication, Media & Live Coverage",

    description:
      "Professional printing, publication, branding, media production and live event coverage services.",

    images: ["/logo1.png"],
  },

  category: "Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          bg-gradient-to-b
          from-white
          via-slate-50
          to-white
          text-slate-900
          antialiased
          overflow-x-hidden
        "
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Pulak Graphics",
              url: "https://pulakgraphics.com",
              logo: "https://pulakgraphics.com/logo1.png",
              telephone: "+91-9810900699",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "4/2771, Street Number 3, Bihari Colony",
                addressLocality: "Shahdara",
                addressRegion: "Delhi",
                postalCode: "110032",
                addressCountry: "IN",
              },
            }),
          }}
        />
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
        <SocialSidebar />
      </body>
    </html>
  );
}