import { FiInstagram, FiPhone, FiMapPin } from "react-icons/fi";
import { siteContent } from "../utils/siteData";

const Footer = () => {
  return (
    <footer className="border-t border-white/70 bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="font-serif text-2xl text-maroon">{siteContent.name}</h3>
          <p className="mt-3 text-sm text-zinc-600">{siteContent.tagline}</p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={siteContent.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-maroon/20 p-2 text-maroon transition hover:bg-maroon hover:text-white"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-maroon">
            Visit Us
          </h4>
          <p className="mt-3 text-sm text-zinc-600">
            <FiMapPin className="mr-2 inline-block" />
            {siteContent.address}
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Hours: {siteContent.hours}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-maroon">
            Contact
          </h4>
          <p className="mt-3 text-sm text-zinc-600">
            <FiPhone className="mr-2 inline-block" />
            {siteContent.phoneDisplay}
          </p>
          <a
            href={`https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(
              siteContent.whatsappMessage
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center rounded-full border border-maroon/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-maroon"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
      <div className="border-t border-white/70 py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {siteContent.name}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
