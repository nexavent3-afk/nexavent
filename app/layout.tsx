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
  title: "NexaVent | מומחים למנדפים ומערכות אוורור למטבחים מקצועיים",

  description:
    "NexaVent מתמחה במנדפים, תעלות פח, מפוחים ומערכות אוורור למסעדות, בתי מלון, מאפיות ומטבחים מוסדיים.",

  metadataBase: new URL("https://nexavent.vercel.app"),

  keywords: [
    "מנדפים למסעדות",
    "תעלות פח מגולבנות",
    "מפוחי אוורור",
    "מערכת אוורור למטבח",
    "מנדפים למטבחים מקצועיים",
    "שדרוג מטבח מסחרי",
    "מערכות אוורור למאפיות",
    "מנדפים למטבח מוסדי",
  ],

  verification: {
    google: "nQjT-GPlhQXFhZ7VnJok9DnC_HqlXnHPwAeLpIlkFpk",
  },

  openGraph: {
    title: "NexaVent | מומחים למנדפים ומערכות אוורור למטבחים מקצועיים",

    description:
      "תכנון, ייצור והתקנה של מנדפים, תעלות פח, מפוחים ומערכות אוורור למטבחים מסחריים ומוסדיים.",

    type: "website",
    locale: "he_IL",
    url: "https://nexavent.vercel.app",
    siteName: "NexaVent",
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
      <body className="min-h-full flex flex-col">
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
            name: "NexaVent - מנדפים ומערכות אוורור",
            image: "https://nexavent.vercel.app/images/logo.png",
            url: "https://nexavent.vercel.app",
            telephone: "+972546106659",
            email: "nexavent3@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "אור עקיבא",
              addressCountry: "IL",
            },
            areaServed: "ישראל",
            sameAs: [
              "https://www.facebook.com/share/14mxwZnZx7t/"
            ],
            description:
              "תכנון, ייצור והתקנה של מנדפים, תעלות פח, מפוחים ומערכות אוורור למטבחים מקצועיים.",
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