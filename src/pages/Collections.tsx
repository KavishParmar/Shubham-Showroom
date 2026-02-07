import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../utils/products";
import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Collections | Shubham Showroom</title>
        <meta
          name="description"
          content="Browse kurta sets, sherwanis, Indo-Western, wedding and festive menswear collections curated by Shubham Showroom."
        />
        <meta
          name="keywords"
          content="designer menswear, sherwani, kurta sets, indo-western, wedding outfits, festive wear"
        />
        <meta property="og:title" content="Collections - Shubham Showroom" />
        <meta
          property="og:description"
          content="Browse curated kurta sets, sherwanis, Indo-Western, wedding and festive menswear collections."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://shubham-showroom.netlify.app/collections"
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
                name: "Collections",
                item: "https://shubham-showroom.netlify.app/collections"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.slice(0, 10).map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Product",
                name: product.name,
                category: product.category,
                image: product.image
              }
            }))
          })}
        </script>
      </Helmet>
      <section className="page-hero" id="main-content">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <p className="badge">Collections</p>
            <h1 className="section-title mt-4">
              Explore Designer Menswear
            </h1>
            <p className="section-subtitle">
              Filter by category and discover premium menswear tailored for every
              celebration.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  activeCategory === category
                    ? "bg-maroon text-white"
                    : "border border-maroon/20 text-maroon hover:border-maroon"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;
