export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0b1118] py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-bold">
          צור קשר
        </h2>

        <p className="mt-6 text-center text-gray-400">
          רוצים הצעת מחיר? נשמח לעזור לכם בתכנון והקמת מערכת נידוף מקצועית.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              📞 טלפון
            </h3>

            <p className="leading-8 text-gray-300">
              054-610-6659
              <br />
              052-215-0105
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              💬 WhatsApp
            </h3>

            <a
              href="https://wa.me/972546106659"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              שלח הודעה
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131b24] p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold">
              ✉️ אימייל
            </h3>

            <a
              href="mailto:nexavent3@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              nexavent3@gmail.com
            </a>
          </div>
<div className="mt-16 rounded-2xl border border-white/10 bg-[#131b24] p-8">

  <h3 className="mb-8 text-center text-3xl font-bold">
    בקשת הצעת מחיר
  </h3>

  <form className="grid gap-5">

    <input
      type="text"
      placeholder="שם מלא"
      className="rounded-xl border border-white/10 bg-[#0b1118] p-4"
    />

    <input
      type="tel"
      placeholder="טלפון"
      className="rounded-xl border border-white/10 bg-[#0b1118] p-4"
    />

    <input
      type="text"
      placeholder="שם העסק"
      className="rounded-xl border border-white/10 bg-[#0b1118] p-4"
    />

    <textarea
      rows={5}
      placeholder="ספר לנו על הפרויקט..."
      className="rounded-xl border border-white/10 bg-[#0b1118] p-4"
    />

    <button
      className="rounded-xl bg-cyan-400 py-4 font-bold text-black transition hover:bg-cyan-300"
    >
      שלח בקשה להצעת מחיר
    </button>

  </form>

</div>
        </div>

      </div>
    </section>
  );
}