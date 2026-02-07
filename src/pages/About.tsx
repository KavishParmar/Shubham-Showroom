import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import { siteContent } from "../utils/siteData";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Shubham Showroom</title>
        <meta
          name="description"
          content="Learn about Shubham Showroom, a premium men's ethnic and designer wear boutique with curated sherwanis, kurtas, and Indo-Western outfits."
        />
        <meta
          name="keywords"
          content="Shubham Showroom story, premium ethnic wear boutique, designer sarees"
        />
        <meta property="og:title" content="About Shubham Showroom" />
        <meta
          property="og:description"
          content="Discover the story and vision behind Shubham Showroom."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://shubham-showroom.netlify.app/about"
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
                name: "About",
                item: "https://shubham-showroom.netlify.app/about"
              }
            ]
          })}
        </script>
      </Helmet>
      <section className="page-hero" id="main-content">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-8">
          <Reveal>
            <p className="badge">About Us</p>
            <h1 className="section-title mt-4">
              Crafted Heritage, Modern Menswear
            </h1>
            <p className="section-subtitle">
              Shubham Showroom is a premier destination for men seeking
              exquisite ethnic and designer wear. We curate exclusive collections
              that celebrate Indian craftsmanship and modern aesthetics.
            </p>
          </Reveal>
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src="/images/showroom/showroom-1.jpg"
              alt="Shubham Showroom interior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <h2 className="section-title">Our Story</h2>
              <p className="mt-4 text-sm text-zinc-600">
                Shubham Showroom was founded with a vision to bring the finest
                traditional and contemporary menswear under one roof. Our showroom
                offers a carefully selected range of designer pieces, from
                elegant everyday ethnic wear to stunning wedding and festive
                collections. We pride ourselves on quality fabrics, intricate
                detailing, and staying ahead of fashion trends while honoring
                timeless traditional designs.
              </p>
              <p className="mt-4 text-sm text-zinc-600">
                At Shubham Showroom, every customer receives personalized
                attention and styling guidance to find the perfect outfit for
                their occasion. Whether you are looking for a wedding sherwani,
                festive kurta set, or contemporary Indo-Western ensemble, our
                collection and expertise ensure you find something that reflects
                your unique style.
              </p>
            </Reveal>
            <Reveal>
              <div className="glass-card p-6">
                <h3 className="font-serif text-2xl text-maroon">
                  Why Choose Us
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                  <li>Quality assurance with premium fabrics and detailing.</li>
                  <li>Curated menswear collections for every occasion.</li>
                  <li>Personalized service with expert styling guidance.</li>
                  <li>Competitive pricing for luxury ethnic fashion.</li>
                </ul>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <img
                  src="/images/showroom/showroom-2.jpg"
                  alt="Showroom display"
                  className="h-40 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <img
                  src="/images/showroom/showroom-3.jpg"
                  alt="Designer outfits in showroom"
                  className="h-40 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-linen py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[0.9fr,1.1fr] md:px-8">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src="/images/owner.jpg"
              alt={`Portrait of ${siteContent.owner}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <Reveal>
            <p className="badge">Founder</p>
            <h2 className="section-title mt-4">{siteContent.owner}</h2>
            <p className="mt-4 text-sm text-zinc-600">
              {siteContent.owner} is the founder and creative force behind
              Shubham Showroom. With a deep passion for ethnic fashion and a keen
              eye for design, Mehul curates each collection with meticulous
              attention to fabric quality, craftsmanship, and evolving fashion
              trends.
            </p>
            <p className="mt-4 text-sm text-zinc-600">
              His approach blends traditional values with modern business
              practices, delivering a shopping experience that is both
              personalized and professional. Mehul&apos;s vision is to make
              designer ethnic wear accessible and to help every woman feel
              confident and beautiful in traditional attire.
            </p>
            <a
              href={siteContent.ownerInstagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald"
            >
              Follow on Instagram
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;

