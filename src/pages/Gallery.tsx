import { Helmet } from "react-helmet-async";
import GalleryGrid from "../components/GalleryGrid";
import Reveal from "../components/Reveal";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Shubham Showroom</title>
        <meta
          name="description"
          content="Browse the latest designer sarees, lehengas, and Indo-Western looks from Shubham Showroom."
        />
        <meta
          name="keywords"
          content="designer wear gallery, Shubham Showroom Instagram, ethnic fashion photos"
        />
        <meta property="og:title" content="Gallery - Shubham Showroom" />
        <meta
          property="og:description"
          content="Explore outfit styling videos and gallery highlights from Shubham Showroom."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://shubham-showroom.netlify.app/gallery"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://shubham-showroom.netlify.app/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Gallery",
                item: "https://shubham-showroom.netlify.app/gallery"
              }
            ]
          })}
        </script>
      </Helmet>
      <section className="page-hero" id="main-content">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <p className="badge">Gallery</p>
            <h1 className="section-title mt-4">Runway Moments & Styling Edits</h1>
            <p className="section-subtitle">
              Explore outfit styling videos, product shoots, and behind-the-scenes
              moments from our Instagram.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
};

export default Gallery;
