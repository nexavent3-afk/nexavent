export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "יצירת קשר",
      text: "פנייה טלפונית או דרך האתר וקבלת פרטי הפרויקט."
    },
    {
      number: "02",
      title: "מדידה ותכנון",
      text: "התאמת הפתרון לפי המטבח, הציוד ודרישות הפרויקט."
    },
    {
      number: "03",
      title: "ייצור",
      text: "ייצור מנדפים, תעלות וארובות מחומרי גלם איכותיים."
    },
    {
      number: "04",
      title: "התקנה",
      text: "התקנה מקצועית ובדיקת תקינות מלאה."
    }
  ];

  return (
    <section className="bg-[#0d131b] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-16 text-center text-5xl font-bold">
          תהליך העבודה שלנו
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
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
  );
}