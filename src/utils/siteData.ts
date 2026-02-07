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
  whatsapp: "919009014111",
  phoneDisplay: "+91 90090 14111",
  phoneLink: "+919009014111",
  address: "Mahalaxmi nagar, behind new bus stand, Rajgarh, Madhya Pradesh",
  hours: "10:00 AM - 8:00 PM (All days)",
  whatsappMessage: "Hi, I'm interested in your collection at Shubham Showroom.",
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
    title: "Kurta Sets",
    description: "Festive kurta pajama sets in premium fabrics.",
    image: "/images/products/post-4.jpg"
  },
  {
    title: "Sherwani",
    description: "Wedding-ready sherwanis with rich embroidery.",
    image: "/images/products/post-5.jpg"
  },
  {
    title: "Jodhpuri",
    description: "Tailored Jodhpuri sets for royal occasions.",
    image: "/images/products/post-6.jpg"
  },
  {
    title: "Indo-Western",
    description: "Fusion silhouettes for cocktail and festive evenings.",
    image: "/images/products/post-7.jpg"
  },
  {
    title: "Wedding Collection",
    description: "Complete menswear styling for wedding functions.",
    image: "/images/products/post-8.jpg"
  },
  {
    title: "Party Wear",
    description: "Bold outfits for celebrations and events.",
    image: "/images/products/post-9.jpg"
  }
];

export const testimonials = [
  {
    name: "Aarohi Jain",
    quote:
      "The styling guidance was on point. My wedding outfit felt premium and tailored."
  },
  {
    name: "Meera Kapoor",
    quote:
      "Premium fabrics and immaculate detailing. The kurta set was a show-stopper."
  },
  {
    name: "Nandini Rao",
    quote:
      "A perfect blend of tradition and modern menswear. Highly recommend their styling service."
  },
  {
    name: "Ritika Sharma",
    quote:
      "Indo-western options were elegant, comfortable, and beautifully curated."
  },
  {
    name: "Priya Choudhary",
    quote:
      "Personalized attention and a curated collection made shopping seamless."
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


