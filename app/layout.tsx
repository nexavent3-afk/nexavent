import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexavent.vercel.app"),

  title: {
    default: "NexaVent | מנדפים ומערכות סינון למטבחים מקצועיים",
    template: "%s | NexaVent",
  },

  description:
    "NexaVent מתמחה בתכנון, ייצור והתקנת מנדפים, תעלות פח, מפוחים ומערכות סינון למטבחים מקצועיים, מסעדות, בתי קפה, מאפיות ומטבחים מוסדיים.",

  keywords: [
    "מנדפים למסעדות",
    "מנדפים למטבחים מקצועיים",
    "מנדף למטבח",
    "תעלות פח מגולוונות",
    "תעלות פח למנדפים",
    "מפוחי אוורור",
    "מערכות סינון למטבח",
    "מערכת אוורור למטבח",
    "מנדפים למאפיות",
    "מנדפים למטבח מוסדי",
    "אוורור מטבחים",
    "NexaVent",
  ],

  verification: {
    google: "nQjT-GPlhQXFhZ7VnJok9DnC_HqlXnHPwAeLpIlkFpk",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "NexaVent | מנדפים ומערכות סינון למטבחים מקצועיים",
    description:
      "תכנון, ייצור והתקנה של מנדפים, תעלות פח, מפוחים ומערכות סינון למטבחים מסחריים ומוסדיים.",
    type: "website",
    locale: "he_IL",
    url: "https://nexavent.vercel.app",
    siteName: "NexaVent",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "NexaVent - מנדפים ומערכות סינון למטבחים מקצועיים",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NexaVent | מנדפים ומערכות סינון",
    description:
      "תכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות סינון למטבחים מקצועיים.",
    images: ["/images/logo.png"],
  },

  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2CMEXZ67PN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2CMEXZ67PN');
          `}
        </Script>

        {/* Schema.org */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "NexaVent - מנדפים ומערכות סינון",
            image: "https://nexavent.vercel.app/images/logo.png",
            url: "https://nexavent.vercel.app",
            telephone: "+972546106659",
            email: "nexavent3@gmail.com",

            address: {
              "@type": "PostalAddress",
              addressLocality: "אור עקיבא",
              addressCountry: "IL",
            },

            areaServed: {
              "@type": "Country",
              name: "Israel",
            },

            sameAs: [
              "https://www.facebook.com/share/14mxwZnZx7t/",
            ],

            description:
              "תכנון, ייצור והתקנה של מנדפים, תעלות פח, מפוחים ומערכות סינון למטבחים מקצועיים.",
          })}
        </Script>

        {/* UserWay Accessibility */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="gBrDW9RrGr"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}