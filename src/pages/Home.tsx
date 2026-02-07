import Hero from "../components/Hero";
import InstagramGrid from "../components/InstagramGrid";
import Testimonials from "../components/Testimonials";
import Reveal from "../components/Reveal";
import { featuredCollections, siteContent } from "../utils/siteData";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Shubham Showroom - Premium Designer Sarees, Lehengas & Ethnic Wear
        </title>
        <meta
          name="description"
          content="Discover exclusive collections of designer menswear, kurta sets, sherwanis, and Indo-Western outfits at Shubham Showroom. Premium ethnic wear for weddings and celebrations."
        />
        <meta
          name="keywords"
          content="designer menswear, ethnic wear, sherwani, kurta set, wedding collection, premium boutique"
        />
        <meta property="og:title" content="Shubham Showroom" />
        <meta
          property="og:description"
          content="Premium designer menswear, sherwanis, kurta sets, and Indo-Western outfits for weddings and celebrations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/products/post-1.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://shubham-showroom.netlify.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: siteContent.name,
            image: "/images/hero/hero-1.jpg",
            url: "https://shubham-showroom.netlify.app/",
            telephone: siteContent.phoneDisplay,
            address: {
              "@type": "PostalAddress",
              streetAddress: siteContent.address,
              addressLocality: "[City]",
              addressRegion: "[State]",
              addressCountry: "IN"
            },
            openingHours: siteContent.hours
          })}
        </script>
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
              }
            ]
          })}
        </script>
      </Helmet>
      <Hero />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <p className="badge">Featured Collections</p>
            <h2 className="section-title mt-4">
              Designer Menswear for Every Occasion
            </h2>
            <p className="section-subtitle">{siteContent.bioTagline}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCollections.map((item) => (
              <Reveal key={item.title}>
                <div className="glass-card overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-maroon">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      {item.description}
                    </p>
                    <Link
                      to="/collections"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
                    >
                      Explore <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <InstagramGrid />
      <Testimonials />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="glass-card grid items-center gap-10 p-10 md:grid-cols-[1.2fr,0.8fr]">
            <div>
              <p className="badge">Visit Our Showroom</p>
              <h2 className="section-title mt-4">
                Experience Personalized Menswear Styling
              </h2>
              <p className="section-subtitle">
                Book a private styling session or walk in to explore curated
                menswear collections with our experts.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="primary-btn w-full justify-center"
              >
                Plan Your Visit
              </Link>
              <a
                href={`tel:${siteContent.phoneLink}`}
                className="secondary-btn w-full justify-center"
              >
                <FiPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card p-6">
              <h3 className="font-serif text-xl text-maroon">
                Curated Designer Drops
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                We handpick styles from leading designers and artisan ateliers
                to keep your wardrobe fashion-forward.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-xl text-maroon">
                Personalized Styling
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Our stylists guide you to the perfect fit, palette, and
                silhouette for your occasion.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-serif text-xl text-maroon">
                Premium Fabrics
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Experience luxurious textiles, intricate detailing, and timeless
                craftsmanship in every piece.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
