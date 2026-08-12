import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexavent.vercel.app"),

  title: "NexaVent | מנדפים למטבחים מקצועיים",

  description:
    "NexaVent מתמחה בתכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות סינון למסעדות, בתי קפה, מאפיות ומטבחים מקצועיים בכל הארץ.",

  keywords: [
    "מנדפים",
    "מנדפים למטבחים",
    "מנדפים למסעדות",
    "מנדף למסעדה",
    "מנדף למטבח",
    "מנדף תעשייתי",
    "מערכות סינון למטבחים",
    "מפוחים למטבחים",
    "תעלות פח למטבחים",
    "NexaVent",
  ],

  alternates: {
    canonical: "https://nexavent.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "NexaVent | מנדפים למטבחים מקצועיים",
    description:
      "תכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות סינון למסעדות, בתי קפה, מאפיות ומטבחים מקצועיים.",
    url: "https://nexavent.vercel.app/",
    siteName: "NexaVent",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "/images/hood-hero.png",
        width: 1200,
        height: 630,
        alt: "NexaVent - מנדפים למטבחים מקצועיים",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NexaVent | מנדפים למטבחים מקצועיים",
    description:
      "תכנון, ייצור והתקנת מנדפים ומערכות סינון למטבחים מקצועיים.",
    images: ["/images/hood-hero.png"],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "NexaVent",
    url: "https://nexavent.vercel.app/",
    logo: "https://nexavent.vercel.app/images/logo.png",
    image: "https://nexavent.vercel.app/images/hood-hero.png",
    description:
      "תכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות סינון למטבחים מקצועיים.",
    areaServed: {
      "@type": "Country",
      name: "Israel",
    },
    serviceType: [
      "מנדפים למטבחים",
      "מנדפים למסעדות",
      "מערכות סינון למטבחים",
      "מפוחים",
      "תעלות יניקה",
    ],
  };

  const workSteps = [
    {
      number: "01",
      title: "יצירת קשר",
      text: "פנייה טלפונית או דרך האתר וקבלת פרטי הפרויקט.",
    },
    {
      number: "02",
      title: "מדידה ותכנון",
      text: "התאמת הפתרון לפי המטבח, הציוד ודרישות הפרויקט.",
    },
    {
      number: "03",
      title: "ייצור",
      text: "ייצור מנדפים, תעלות ומערכות יניקה מחומרי גלם איכותיים.",
    },
    {
      number: "04",
      title: "התקנה",
      text: "התקנה מקצועית ובדיקת תקינות מלאה.",
    },
  ];

  return (
    <main dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Navbar />

      <section
        className="relative flex min-h-screen items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,12,18,.72),rgba(8,12,18,.72)),url('/images/hood-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Image
            src="/images/logo.png"
            alt="NexaVent - מנדפים ומערכות סינון למטבחים מקצועיים"
            width={220}
            height={86}
            priority
            className="mx-auto mb-8 h-auto w-[220px]"
          />

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            מנדפים ומערכות סינון
            <br />
            למטבחים מקצועיים
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            תכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות
            סינון בהתאמה אישית למסעדות, בתי קפה, מאפיות
            ומטבחים מוסדיים.
          </p>
        </div>
      </section>

      <div className="border-y border-white/10 bg-[#081018]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold text-cyan-400">✓</h3>
              <p className="mt-2 text-white">תכנון מקצועי</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">✓</h3>
              <p className="mt-2 text-white">עמידה בתקנים</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">✓</h3>
              <p className="mt-2 text-white">התקנה בכל הארץ</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400">✓</h3>
              <p className="mt-2 text-white">ליווי אישי</p>
            </div>
          </div>
        </div>
      </div>

      <Services />

      <WhyUs />

      {/* תהליך העבודה שלנו */}
      <section className="bg-[#081018] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-5xl font-bold">
            תהליך העבודה שלנו
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#131b24] p-8"
              >
                <div className="mb-6 text-5xl font-black text-cyan-400">
                  {step.number}
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="leading-8 text-gray-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <Projects />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}