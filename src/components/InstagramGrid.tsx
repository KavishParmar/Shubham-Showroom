import { instagramHighlights } from "../utils/siteData";
import type { InstagramItem } from "../utils/instagramData";

const InstagramGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="badge">Instagram</p>
        <h2 className="section-title mt-4">Latest Looks from @shubham_showroom</h2>
        <p className="section-subtitle">
          A curated snapshot of our latest designer drops and styling moments.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(instagramHighlights as InstagramItem[]).map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-3xl bg-white"
            >
              <img
                src={item.image}
                alt="Shubham Showroom Instagram post"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {item.caption && (
                <div className="border-t border-zinc-100 px-4 py-3 text-xs text-zinc-600">
                  {item.caption.split("\n")[0]}
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
