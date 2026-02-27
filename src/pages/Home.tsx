import Hero from "../components/Hero";
import InstagramGrid from "../components/InstagramGrid";
import Testimonials from "../components/Testimonials";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import { featuredCollections, siteContent } from "../utils/siteData";
import { products } from "../utils/products";
import { FiPhone, FiArrowRight } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  const trendingProducts = products.slice(0, 8);

  return (
    <>
      <Helmet>
        <title>Shubham Showroom - Premium Designer Menswear & Ethnic Wear</title>
        <meta name="description" content="Discover exclusive collections of designer menswear, kurta sets, sherwanis, and Indo-Western outfits at Shubham Showroom." />
        <meta name="keywords" content="designer menswear, ethnic wear, sherwani, kurta set, wedding collection" />
        <meta property="og:title" content="Shubham Showroom" />
        <link rel="canonical" href="https://shubham-showroom.netlify.app/" />
      </Helmet>

      <Hero />

      {/* What's your vibe? - Arch Style Categories */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-5xl text-zinc-900 mb-4 italic tracking-tight">What's your vibe?</h2>
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mb-12">Discover Curated Styles</p>
          </Reveal>

          <div className="flex overflow-x-auto pb-8 gap-6 md:gap-8 scrollbar-hide no-scrollbar snap-x justify-start md:justify-center px-4">
            {featuredCollections.map((item) => (
              <Reveal key={item.title}>
                <Link
                  to={`/collections?category=${encodeURIComponent(item.title)}`}
                  className="flex flex-col items-center group snap-center min-w-[140px]"
                >
                  <div className="h-44 w-32 md:h-56 md:w-40 overflow-hidden border-2 border-zinc-100 group-hover:border-maroon transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2"
                    style={{ borderTopLeftRadius: '100px', borderTopRightRadius: '100px' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <span className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 group-hover:text-maroon transition-colors">{item.title}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Grid */}
      <section className="py-16 md:py-24 bg-linen/30">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <p className="badge mb-4">Trending Now</p>
                <h2 className="section-title italic">Bestsellers of the Season</h2>
              </div>
              <Link to="/collections" className="text-xs font-bold uppercase tracking-widest text-maroon hover:underline flex items-center gap-2">
                Explore More <FiArrowRight />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingProducts.map((product) => (
              <Reveal key={product.id}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/collections" className="primary-btn px-12 py-4">
              See All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-16 md:py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <Reveal>
            <div className="text-center mb-16 px-4">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white underline-offset-4 mb-4">Customer Satisfaction</p>
              <h2 className="font-serif text-3xl md:text-5xl italic mb-4 text-ivory">Glimpses of Happy Hearts</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base">Real stories from our valued clients. See how Shubham Showroom styles your life's best moments.</p>
            </div>
          </Reveal>

          <div className="flex overflow-x-auto gap-6 scrollbar-hide no-scrollbar snap-x px-4 pb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Reveal key={i}>
                <div className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative rounded-3xl overflow-hidden glass-card border-white/10 group cursor-pointer snap-center shadow-2xl">
                  <img
                    src={`https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400&h=711&sig=feed-${i}`}
                    alt="Customer feedback"
                    className="h-full w-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                    <p className="text-sm md:text-base font-serif italic text-ivory/90 mb-3 leading-relaxed">"The attention to detail and fit were exceptional. Highly recommended for wedding wear!"</p>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full border border-gold/50 overflow-hidden bg-zinc-800">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="h-full w-full object-cover" />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Verified Client Review</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-20 w-20 bg-maroon/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InstagramGrid />
      <Testimonials />

      {/* Booking Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="glass-card grid items-center gap-10 p-10 md:grid-cols-[1.2fr,0.8fr]">
            <div>
              <p className="badge">Visit Our Showroom</p>
              <h2 className="section-title mt-4 italic">Experience Personalized Menswear Styling</h2>
              <p className="section-subtitle">Book a private styling session or walk in to explore curated menswear collections with our experts.</p>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/contact" className="primary-btn w-full justify-center">Plan Your Visit</Link>
              <a href={`tel:${siteContent.phoneLink}`} className="secondary-btn w-full justify-center">
                <FiPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-linen/20 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Curated Designer Drops", desc: "We handpick styles from leading designers to keep your wardrobe fashion-forward." },
              { title: "Personalized Styling", desc: "Our stylists guide you to the perfect fit, palette, and silhouette for your occasion." },
              { title: "Premium Fabrics", desc: "Experience luxurious textiles and timeless craftsmanship in every piece." }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 hover:shadow-xl transition-shadow">
                <h3 className="font-serif text-xl text-maroon mb-3 italic">{feature.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
