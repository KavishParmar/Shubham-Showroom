import Masonry from "react-masonry-css";
import { useState } from "react";
import { instagramHighlights } from "../utils/siteData";
import type { InstagramItem } from "../utils/instagramData";
import { FiX, FiInstagram } from "react-icons/fi";

const breakpointColumnsObj = {
  default: 4,
  1024: 3,
  768: 2,
  480: 1
};

const GalleryGrid = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="space-y-4"
      >
      {(instagramHighlights as InstagramItem[]).map((item, index) => (
          <div key={item.id} className="overflow-hidden rounded-3xl bg-white">
            <button
              type="button"
              className="group block w-full"
              onClick={() => setActive(index)}
              aria-label="Open gallery item"
            >
              <img
                src={item.image}
                alt="Shubham Showroom gallery item"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
            {item.caption && (
              <div className="border-t border-zinc-100 px-4 py-3 text-xs text-zinc-600">
                {item.caption.split("\n")[0]}
              </div>
            )}
          </div>
        ))}
      </Masonry>

      {active !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white">
            <img
              src={instagramHighlights[active].image}
              alt="Selected gallery item"
              className="h-full w-full object-contain"
            />
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-zinc-700"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <FiX />
            </button>
            <a
              href={instagramHighlights[active].link}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-maroon px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white"
            >
              <FiInstagram /> View Post
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
