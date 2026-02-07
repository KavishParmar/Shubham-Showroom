import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import { siteContent } from "../utils/siteData";
import { FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Visit Us | Shubham Showroom</title>
        <meta
          name="description"
          content="Visit Shubham Showroom for premium men's ethnic and designer wear. Contact us for personalized styling or wedding appointments."
        />
        <meta
          name="keywords"
          content="Shubham Showroom contact, ethnic boutique address, bridal styling appointment"
        />
        <meta property="og:title" content="Contact Shubham Showroom" />
        <meta
          property="og:description"
          content="Book a styling visit or contact Shubham Showroom for designer ethnic wear."
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://shubham-showroom.netlify.app/contact"
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
                name: "Contact",
                item: "https://shubham-showroom.netlify.app/contact"
              }
            ]
          })}
        </script>
      </Helmet>
      <section className="page-hero" id="main-content">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <p className="badge">Contact</p>
          <h1 className="section-title mt-4">Visit Our Showroom</h1>
          <p className="section-subtitle">
            Book a private styling visit or reach out for product enquiries and
            availability.
          </p>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1.1fr,0.9fr] md:px-8">
          <ContactForm />
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h2 className="font-serif text-2xl text-maroon">Contact Details</h2>
              <p className="mt-4 text-sm text-zinc-600">
                <FiPhone className="mr-2 inline-block" />
                {siteContent.phoneDisplay}
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                <FiMapPin className="mr-2 inline-block" />
                {siteContent.address}
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                Hours: {siteContent.hours}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(
                    siteContent.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${siteContent.phoneLink}`}
                  className="secondary-btn"
                >
                  Call Now
                </a>
                <a
                  href={siteContent.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  <FiInstagram /> Instagram
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=23-24%20Mahalaxmi%20Nagar%2C%20Behind%20New%20Bus%20Stand%2C%20Rajgarh%20454116&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
