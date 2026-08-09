import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות NexaVent | מנדפים למטבחים מקצועיים",
  description:
    "הכירו את NexaVent – חברה המתמחה בתכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות סינון למסעדות, בתי קפה, מאפיות ומטבחים מקצועיים בכל הארץ.",

  keywords: [
    "NexaVent",
    "אודות NexaVent",
    "מנדפים למטבחים מקצועיים",
    "מנדפים למסעדות",
    "מנדף למטבח",
    "מערכות סינון למטבחים",
    "מפוחים למטבחים",
    "תעלות פח למנדפים",
  ],

  alternates: {
    canonical: "https://nexavent.vercel.app/about",
  },

  openGraph: {
    title: "אודות NexaVent | מנדפים למטבחים מקצועיים",
    description:
      "NexaVent מתמחה בתכנון, ייצור והתקנת מנדפים, מפוחים, תעלות ומערכות סינון למטבחים מקצועיים.",
    url: "https://nexavent.vercel.app/about",
    siteName: "NexaVent",
    locale: "he_IL",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#081018] px-6 py-24 text-white"
    >
      <section className="mx-auto max-w-6xl">
        <h1 className="text-center text-5xl font-bold md:text-6xl">
          אודות NexaVent
        </h1>

        <p className="mx-auto mt-10 max-w-4xl text-center text-xl leading-9 text-gray-300">
          NexaVent מתמחה בתכנון, ייצור והתקנת מנדפים, תעלות פח,
          מפוחים ומערכות סינון למטבחים מקצועיים, מסעדות, בתי קפה,
          מאפיות, אולמות אירועים ומטבחים מוסדיים.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8">
            <h2 className="text-2xl font-bold">איכות ללא פשרות</h2>

            <p className="mt-4 leading-8 text-gray-300">
              אנו עובדים עם חומרי גלם איכותיים ומקפידים על גימור
              מקצועי בכל פרויקט.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8">
            <h2 className="text-2xl font-bold">תכנון מקצועי</h2>

            <p className="mt-4 leading-8 text-gray-300">
              כל מערכת מותאמת לדרישות המטבח, לתנאי השטח ולצרכי
              הלקוח, תוך התייחסות לדרישות ולתקנים הרלוונטיים.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8">
            <h2 className="text-2xl font-bold">שירות בכל הארץ</h2>

            <p className="mt-4 leading-8 text-gray-300">
              אנו מעניקים שירות ללקוחות עסקיים בכל רחבי ישראל,
              החל משלב התכנון ועד הייצור וההתקנה.
            </p>
          </div>
        </div>

        <section className="mt-20">
          <h2 className="text-center text-3xl font-bold">
            פתרונות למטבחים מקצועיים
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-center leading-8 text-gray-300">
            פתרונות NexaVent מיועדים למסעדות, בתי קפה, מאפיות,
            מטבחי שווארמה, מטבחים מוסדיים ועסקי מזון נוספים.
            אנו מספקים פתרונות הכוללים מנדפים, תעלות יניקה,
            מפוחים ומערכות סינון בהתאם לצורכי הפרויקט.
          </p>
        </section>
      </section>
    </main>
  );
}