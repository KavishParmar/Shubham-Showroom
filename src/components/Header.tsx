import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { siteContent } from "../utils/siteData";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-maroon focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <NavLink
          to="/"
          className="flex items-center gap-3 font-serif text-2xl font-semibold text-maroon"
        >
          <img
            src={siteContent.logo}
            alt="Shubham Showroom logo"
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <span>{siteContent.name}</span>
        </NavLink>
        <nav className="hidden items-center gap-8 md:flex">
          {siteContent.navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className="nav-link">
              {link.label}
            </NavLink>
          ))}
          <a
            href={siteContent.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Instagram"
            className="rounded-full border border-maroon/20 p-2 text-maroon transition hover:bg-maroon hover:text-white"
          >
            <FiInstagram />
          </a>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-full border border-maroon/30 p-2 text-maroon md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-zinc-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {siteContent.navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={siteContent.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
