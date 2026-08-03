export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#0d131b] py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center text-4xl font-bold">
          שירותים שלנו
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              מנדפים
            </h3>

            <p className="text-gray-300">
              אספקת והתקנת מנדפים תעשייתיים באיכות גבוהה.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              מפוחים
            </h3>

            <p className="text-gray-300">
              אספקת והתקנת מפוחים תעשייתיים באיכות גבוהה.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              תעלות
            </h3>

            <p className="text-gray-300">
              ייצור והתקנת תעלות פח מגולוון ושחור לפי התקן.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              ארובות
            </h3>

            <p className="text-gray-300">
              תכנון והקמת מערכות פליטה וארובות למסעדות ומטבחים.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}