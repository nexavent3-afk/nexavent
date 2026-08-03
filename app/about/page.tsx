export const metadata = {
  title: "אודות | NexaVent",
  description:
    "הכירו את NexaVent – מומחים בתכנון, ייצור והתקנת מנדפים, תעלות פח ומערכות אוורור למטבחים מקצועיים.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#090d12] text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-bold text-center">
          אודות NexaVent
        </h1>

        <p className="mt-10 text-xl leading-9 text-gray-300 text-center max-w-4xl mx-auto">
          NexaVent מתמחה בתכנון, ייצור והתקנת מנדפים, תעלות פח,
          מפוחים ומערכות סינון למטבחים מקצועיים, מסעדות,
          בתי קפה, מאפיות, אולמות אירועים ומטבחים מוסדיים.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-[#131b24] p-8 border border-white/10">
            <h2 className="text-2xl font-bold">
              איכות ללא פשרות
            </h2>

            <p className="mt-4 text-gray-300 leading-8">
              אנו עובדים עם חומרי גלם איכותיים ומקפידים על גימור
              מקצועי בכל פרויקט.
            </p>
          </div>

          <div className="rounded-2xl bg-[#131b24] p-8 border border-white/10">
            <h2 className="text-2xl font-bold">
              תכנון מקצועי
            </h2>

            <p className="mt-4 text-gray-300 leading-8">
              כל מערכת מותאמת לדרישות המטבח, התקנים וצרכי הלקוח.
            </p>
          </div>

          <div className="rounded-2xl bg-[#131b24] p-8 border border-white/10">
            <h2 className="text-2xl font-bold">
              שירות בכל הארץ
            </h2>

            <p className="mt-4 text-gray-300 leading-8">
              אנו מעניקים שירות ללקוחות פרטיים ועסקיים בכל רחבי ישראל.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}