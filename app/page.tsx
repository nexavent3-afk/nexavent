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
    <main dir="rtl" className="overflow-hidden bg-[#060b11] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hood-hero.png')",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.16),transparent_35%),linear-gradient(rgba(4,9,15,.55),rgba(4,9,15,.94))]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-28 md:px-8">
          <div className="w-full text-center">
            <div className="mx-auto mb-8 inline-flex rounded-3xl border border-white/15 bg-white/5 px-5 py-3 shadow-2xl backdrop-blur-xl">
              <span className="text-sm font-medium text-cyan-300 md:text-base">
                פתרונות אוורור למטבחים מקצועיים
              </span>
            </div>

            <Image
              src="/images/logo.png"
              alt="NexaVent - מנדפים ומערכות סינון למטבחים מקצועיים"
              width={220}
              height={86}
              priority
              className="mx-auto mb-8 h-auto w-[170px] drop-shadow-[0_0_30px_rgba(34,211,238,0.25)] md:w-[220px]"
            />

            <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
              מנדפים ומערכות סינון
              <br />
              <span className="bg-gradient-to-l from-cyan-300 via-white to-cyan-500 bg-clip-text text-transparent">
                למטבחים מקצועיים
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl">
              תכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות
              סינון בהתאמה אישית למסעדות, בתי קפה, מאפיות
              ומטבחים מוסדיים.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-[#061018] shadow-[0_0_35px_rgba(34,211,238,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
              >
                לקבלת הצעת מחיר
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                השירותים שלנו
              </a>
            </div>

            {/* Floating stats */}
            <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
                <div className="text-2xl font-black text-cyan-300">✓</div>
                <div className="mt-2 font-bold">תכנון מקצועי</div>
                <div className="mt-1 text-sm text-gray-400">
                  התאמה לצורכי הפרויקט
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
                <div className="text-2xl font-black text-cyan-300">✓</div>
                <div className="mt-2 font-bold">ייצור והתקנה</div>
                <div className="mt-1 text-sm text-gray-400">
                  פתרון מקצה לקצה
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
                <div className="text-2xl font-black text-cyan-300">✓</div>
                <div className="mt-2 font-bold">שירות בכל הארץ</div>
                <div className="mt-1 text-sm text-gray-400">
                  ליווי אישי לאורך הפרויקט
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative bg-[#081018] px-5 py-24 md:px-8"
      >
        <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">
          <Services />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[#060b11] px-5 py-24 md:px-8">
        <WhyUs />
      </section>

      {/* WORK PROCESS */}
      <section className="relative bg-[#081018] px-5 py-24 text-white md:px-8">
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              איך זה עובד
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              תהליך העבודה שלנו
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              ליווי מסודר משלב הפנייה הראשונית ועד להשלמת הפרויקט.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {workSteps.map((step) => (
              <div
                key={step.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <div className="text-5xl font-black text-cyan-400/80 transition duration-500 group-hover:text-cyan-300">
                  {step.number}
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}