import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/972546106659?text=שלום,%20הגעתי%20מהאתר%20של%20NexaVent%20ואשמח%20לקבל%20פרטים."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/40"
    >
      <FaWhatsapp size={34} color="white" />
    </a>
  );
}