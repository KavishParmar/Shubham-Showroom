import { instagramPosts } from "./instagramData";

export const siteContent = {
  name: "Shubham Showroom",
  owner: "Mehul Shubham",
  tagline:
    "Premium men's ethnic & designer wear for weddings, festivities, and modern celebrations.",
  bioTagline:
    "Curated designer menswear with personalized styling and heritage craftsmanship.",
  instagramUrl: "https://www.instagram.com/shubham_showroom/",
  ownerInstagramUrl: "https://www.instagram.com/mehul.shubham/",
  whatsapp: "917042816202",
  phoneDisplay: "+91 70428 16202",
  phoneLink: "+917042816202",
  address: "Mahalaxmi nagar, behind new bus stand, Rajgarh, Madhya Pradesh",
  hours: "10:00 AM - 8:00 PM (All days)",
  whatsappMessage: "Hi, I'm interested in your menswear collection at Shubham Showroom.",
  navLinks: [
    { label: "Home", path: "/" },
    { label: "Collections", path: "/collections" },
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ],
  logo: "/images/logo.jpg"
};

export const heroSlides = [
  {
    id: "hero-1",
    image: "/images/products/post-1.jpg",
    title: "Designer Kurtas with Contemporary Edge",
    subtitle: "Statement silhouettes curated for weddings and festive seasons."
  },
  {
    id: "hero-2",
    image: "/images/products/post-2.jpg",
    title: "Wedding Sherwanis & Jodhpuri Sets",
    subtitle: "Premium craftsmanship for groomsmen and wedding celebrations."
  },
  {
    id: "hero-3",
    image: "/images/products/post-3.jpg",
    title: "Indo-Western Party Wear",
    subtitle: "Modern menswear for cocktail nights and festive glamour."
  }
];

export const featuredCollections = [
  {
    title: "Kurta Pajama",
    description: "Traditional sets with modern tailoring.",
    image: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Shirts",
    description: "Premium cotton and designer shirts for every occasion.",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccedfe5d7?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Pants",
    description: "Perfectly tailored pants and trousers.",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Coats",
    description: "Structured coats and blazers for formal flair.",
    image: "https://images.unsplash.com/photo-1591337673702-e29ad18bc9c2?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Shaadi Wear",
    description: "Complete menswear styling for grand weddings.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Indo-Western",
    description: "Fusion outfits for modern celebrations.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400"
  }
];

export const testimonials = [
  {
    name: "Aryan Sharma",
    quote:
      "The styling guidance was on point. My wedding sherwani felt premium and perfectly tailored."
  },
  {
    name: "Vikram Malhotra",
    quote:
      "Premium fabrics and immaculate detailing. The kurta set I bought was the talk of the event."
  },
  {
    name: "Rahul Khanna",
    quote:
      "A perfect blend of tradition and modern menswear. Highly recommend their personalized service."
  },
  {
    name: "Siddharth Verma",
    quote:
      "The Indo-western options were elegant and comfortable. Great range for cocktail nights."
  },
  {
    name: "Kabir Singh",
    quote:
      "Personalized attention and a curated collection made my wedding shopping seamless."
  }
];

const fallbackInstagram = [
  { id: "insta-1", image: "/images/gallery/insta-1.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-2", image: "/images/gallery/insta-2.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-3", image: "/images/gallery/insta-3.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-4", image: "/images/gallery/insta-4.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-5", image: "/images/gallery/insta-5.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-6", image: "/images/gallery/insta-6.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-7", image: "/images/gallery/insta-7.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-8", image: "/images/gallery/insta-8.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-9", image: "/images/gallery/insta-9.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-10", image: "/images/gallery/insta-10.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-11", image: "/images/gallery/insta-11.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-12", image: "/images/gallery/insta-12.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-13", image: "/images/gallery/insta-13.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-14", image: "/images/gallery/insta-14.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-15", image: "/images/gallery/insta-15.jpg", link: "https://www.instagram.com/shubham_showroom/" },
  { id: "insta-16", image: "/images/gallery/insta-16.jpg", link: "https://www.instagram.com/shubham_showroom/" }
];

export const instagramHighlights =
  instagramPosts.length > 0 ? instagramPosts : fallbackInstagram;


