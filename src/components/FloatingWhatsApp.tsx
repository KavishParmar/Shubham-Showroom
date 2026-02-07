import { FiMessageCircle } from "react-icons/fi";
import { siteContent } from "../utils/siteData";

const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(
        siteContent.whatsappMessage
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-white shadow-soft transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <FiMessageCircle className="text-xl" />
    </a>
  );
};

export default FloatingWhatsApp;
