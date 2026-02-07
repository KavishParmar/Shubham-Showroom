import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { heroSlides, siteContent } from "../utils/siteData";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero-glow">
      <div className="absolute inset-0 bg-[url('/images/hero/hero-pattern.svg')] opacity-20" />
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="h-[560px] md:h-[640px]"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full">
                <div className="flex h-full w-full items-center justify-center bg-black/10">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-contain"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-maroon/70 via-maroon/20 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
                    <div className="max-w-xl text-white">
                      <p className="badge border-white/40 bg-white/10 text-white">
                        {siteContent.tagline}
                      </p>
                      <h1 className="mt-6 font-serif text-4xl font-semibold md:text-5xl">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-base text-white/90 md:text-lg">
                        {slide.subtitle}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-4">
                        <Link to="/collections" className="primary-btn">
                          Explore Collections
                        </Link>
                        <Link to="/contact" className="secondary-btn">
                          Book a Styling Visit
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
