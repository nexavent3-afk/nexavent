export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090d12] py-10 text-center text-gray-400">
      <div className="mx-auto max-w-7xl px-6">

        <h3 className="text-2xl font-bold text-white">
          NexaVent
        </h3>

        <p className="mt-3">
          פתרונות נידוף מקצועיים למסעדות, בתי קפה ומטבחים תעשייתיים.
        </p>

        <div className="mt-6 space-y-2">

          <p>📞 054-610-6659</p>

          <p>📞 052-215-0105</p>

          <p>✉️ nexavent3@gmail.com</p>

        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} NexaVent. כל הזכויות שמורות.
        </div>

      </div>
    </footer>
  );
}