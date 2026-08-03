import Image from "next/image";

const navItems = ["אודות", "שירותים", "פרויקטים", "לקוחות", "צור קשר"];
const servicePills = ["✓ תכנון", "✓ ייצור", "✓ התקנה", "✓ שירות"];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#090d12] text-white antialiased selection:bg-cyan-400/40">
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#090d12]">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hood-hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_42%)]" />

        <header className="absolute inset-x-0 top-0 z-20">
          <nav className="mx-auto flex max-w-6xl items-center justify-center px-5 py-5 sm:px-8 lg:px-10">
            <div className="hidden items-center gap-8 text-[12px] font-medium text-white/80 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition duration-300 hover:text-cyan-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-24 text-center sm:px-8 lg:px-10">
          <div className="mb-8 flex justify-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <Image
              src="/images/logo.png"
              alt="NexaVent logo"
              width={150}
              height={150}
              priority
              className="h-auto w-[150px] object-contain"
            />
          </div>

          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.38em] text-cyan-300/80 opacity-0 animate-[fadeIn_1.1s_ease-out_0.15s_forwards]">
            NEXAVENT
          </p>

          <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-[7rem] opacity-0 animate-[fadeIn_1.2s_ease-out_0.25s_forwards]">
            מנדפים ומערכות סינון
            <span className="mt-2 block">למטבחים מקצועיים</span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-200/90 sm:text-lg opacity-0 animate-[fadeIn_1.3s_ease-out_0.35s_forwards]">
            תכנון, ייצור והתקנה של מערכות מנדפים, מערכות סינון,
            מפוחים, תעלות ומערכות אוורור למסעדות, בתי קפה,
            מטבחים מוסדיים ועסקים בתחום המזון.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0 animate-[fadeIn_1.5s_ease-out_0.45s_forwards]">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3.5 text-base font-semibold text-[#0b1117] shadow-[0_18px_50px_rgba(34,211,238,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              קבל הצעת מחיר
            </a>

            <a
              href="https://wa.me/972000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200 opacity-0 animate-[fadeIn_1.6s_ease-out_0.6s_forwards]">
            {servicePills.map((pill) => (
              <span key={pill} className="inline-flex items-center justify-center">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
