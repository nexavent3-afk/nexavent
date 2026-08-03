import Image from "next/image";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Process from "./components/Process";
import WorkProcess from "./components/WorkProcess";
import Accessibility from "./components/Accessibility";
export default function Home() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#090d12] text-white"
    >
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
            alt="NexaVent"
            width={140}
            height={55}
            style={{
              width: "220px",
              height: "auto",
            }}
            className="mx-auto mb-8"
          />
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            מנדפים ומערכות סינון
            <br />
            למטבחים מקצועיים
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-300 leading-9">
            תכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות
            סינון בהתאמה אישית למסעדות, בתי קפה, מאפיות
            ומטבחים מוסדיים.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">


            <a
              href="https://wa.me/"
              className="rounded-full border border-white px-8 py-4 hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </a>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
                      </div>

        </div>
      </section>
      <div className="bg-[#081018] border-y border-white/10">
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
      <Process />
      <Contact />
      <Projects />
      <WorkProcess />
      <Footer />
      <FloatingWhatsApp />
      <Accessibility />
    </main>
  );
}