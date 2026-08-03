export default function Process() {
  const steps = [
    "פנייה וקבלת פרטים",
    "מדידה ותכנון",
    "הצעת מחיר",
    "ייצור והתקנה",
  ];

  return (
    <section className="bg-[#0d131b] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-4xl font-bold">
          איך אנחנו עובדים
        </h2>

        <div className="grid gap-6 md:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-[#131b24] p-8 text-center"
            >
              <div className="mb-6 text-5xl font-black text-cyan-400">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}