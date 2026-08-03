export default function WhyUs() {
  const items = [
    {
      title: "תכנון מקצועי",
      text: "התאמה מלאה לכל מטבח ולכל דרישת פרויקט."
    },
    {
      title: "עמידה בתקנים",
      text: "עבודה לפי דרישות התקן והנחיות הרשויות."
    },
    {
      title: "ייצור איכותי",
      text: "מנדפים, תעלות וארובות מחומרי גלם איכותיים."
    },
    {
      title: "ליווי אישי",
      text: "משלב התכנון ועד סיום ההתקנה."
    },
    {
      title: "זמינות ארצית",
      text: "שירות בפרויקטים בכל רחבי הארץ."
    },
    {
      title: "פתרון מלא",
      text: "מנדפים, מפוחים, תעלות וארובות במקום אחד."
    },
  ];

  return (
    <section className="bg-[#0b1118] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-4 text-center text-4xl font-bold">
          למה לבחור ב־NexaVent?
        </h2>

        <p className="mx-auto mb-16 max-w-3xl text-center text-gray-400">
          אנחנו מלווים כל פרויקט משלב התכנון ועד ההתקנה,
          עם דגש על איכות, שירות ועמידה בתקנים.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#131b24] p-8 transition duration-300 hover:border-cyan-400"
            >
              <h3 className="mb-4 text-2xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}