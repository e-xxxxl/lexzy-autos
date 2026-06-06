import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lexzy Autos | Trusted Car Dealer in Ibadan & Lagos, Nigeria",
  description: "Lexzy Autos is Ibadan and Lagos's most trusted car dealership. Browse brand new cars, clean tokunbo (fairly used) cars, and luxury exotic vehicles. Quality you can trust.",
  keywords: ["car dealer Ibadan", "tokunbo cars Nigeria", "luxury cars Lagos", "fairly used cars Ibadan", "buy cars Nigeria", "car dealer in Ibadan", "tokunbo cars in Ibadan", "buy cars in Lagos Nigeria", "luxury cars for sale in Nigeria", "fairly used cars Ibadan"],
  openGraph: {
    title: "Lexzy Autos | Premium Car Dealership in Nigeria",
    description: "Brand new, fairly used & luxury exotic cars in Ibadan and Lagos. Trusted by hundreds of Nigerians.",
    url: "https://lexzyautos.com",
    siteName: "Lexzy Autos",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lexzy Autos — Curated Premium Automotive Masterpieces in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexzy Autos Nigeria",
    description: "Premium car dealership in Ibadan and Lagos",
    images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://lexzyautos.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="google-site-verification" content="GSC_VERIFICATION_PLACEHOLDER_LEXZY_AUTOS" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoDealer",
              "name": "Lexzy Autos",
              "url": "https://lexzyautos.com",
              "logo": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=200&fit=crop",
              "description": "Ibadan and Lagos's most trusted destination for brand new, tokunbo, and luxury exotic cars.",
              "telePhone": "+2347065000000",
              "priceRange": "₦₦₦",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ring Road Area, Challenge",
                "addressLocality": "Ibadan",
                "addressRegion": "Oyo State",
                "postalCode": "200211",
                "addressCountry": "NG"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "214"
              }
            }),
          }}
        />
      </head>
      <body className="bg-obsidian text-cream antialiased selection:bg-gold selection:text-obsidian">
        {children}
      </body>
    </html>
  );
}
