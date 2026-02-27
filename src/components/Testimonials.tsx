import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { testimonials } from "../utils/siteData";

const Testimonials = () => {
  return (
    <section className="bg-linen py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="badge">Testimonials</p>
        <h2 className="section-title mt-4">Loved by Our Clients</h2>
        <p className="section-subtitle">
          Every outfit is styled with care. Hear from clients who found their
          perfect looks at Shubham Showroom.
        </p>
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="glass-card h-full p-6">
                  <p className="text-sm text-zinc-600">"{item.quote}"</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-maroon">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
