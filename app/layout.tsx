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
  openGraph: {
    title: "NexaVent | מומחים למנדפים ומערכות אוורור למטבחים מקצועיים",
    description:
      "תכנון, ייצור והתקנה של מנדפים, תעלות פח, מפוחים ומערכות אוורור למטבחים מסחריים ומוסדיים.",
    type: "website",
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
<Script
  src="https://cdn.userway.org/widget.js"
  data-account="gBrDW9RrGr"
  strategy="afterInteractive"
/>
      </body>
    </html>
  );
}