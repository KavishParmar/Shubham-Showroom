import { productPosts } from "./instagramData";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  instagramUrl: string;
};

const productImages = [
  "/images/products/look-1.jpg",
  "/images/products/look-2.jpg",
  "/images/products/look-3.jpg",
  "/images/products/look-4.jpg",
  "/images/products/look-5.jpg",
  "/images/products/look-6.jpg",
  "/images/products/look-7.jpg",
  "/images/products/look-8.jpg",
  "/images/products/look-9.jpg",
  "/images/products/look-10.jpg",
  "/images/products/look-11.jpg",
  "/images/products/look-12.jpg"
];

export const categories = [
  "All",
  "Kurta Sets",
  "Sherwani",
  "Jodhpuri",
  "Suits",
  "Indo-Western",
  "Party Wear",
  "Wedding",
  "Festive"
];

const rawProducts = [
  {
    id: "prod-1",
    name: "Banarasi Silk Saree",
    category: "Sarees",
    description: "Rich zari work with timeless drape.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-2",
    name: "Ivory Bridal Lehenga",
    category: "Lehengas",
    description: "Intricate embroidery with modern elegance.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-3",
    name: "Emerald Festive Kurti",
    category: "Kurtis",
    description: "Luxurious fabric with subtle detailing.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-4",
    name: "Maroon Anarkali Suit",
    category: "Suits",
    description: "Flowing silhouette with zari accents.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-5",
    name: "Champagne Indo-Western Set",
    category: "Indo-Western",
    description: "Contemporary drape with bold textures.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-6",
    name: "Ruby Bridal Saree",
    category: "Wedding",
    description: "Grand zari and hand embroidery.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-7",
    name: "Rose Gold Lehenga",
    category: "Lehengas",
    description: "Soft shimmer with elegant motifs.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-8",
    name: "Pastel Organza Saree",
    category: "Sarees",
    description: "Lightweight drape with floral accents.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-9",
    name: "Midnight Blue Kurti",
    category: "Kurtis",
    description: "Statement sleeves with rich detailing.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-10",
    name: "Ivory Sharara Suit",
    category: "Suits",
    description: "Layered silhouette with gold embroidery.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-11",
    name: "Festive Brocade Saree",
    category: "Festive",
    description: "Classic brocade with rich drape.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-12",
    name: "Pearl Embellished Lehenga",
    category: "Wedding",
    description: "Luxurious pearl detailing and flair.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-13",
    name: "Rust Silk Kurti",
    category: "Kurtis",
    description: "Everyday elegance with silk sheen.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-14",
    name: "Gold Tissue Saree",
    category: "Sarees",
    description: "Lightweight shimmer for celebrations.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-15",
    name: "Embroidered Jacket Set",
    category: "Indo-Western",
    description: "Structured jacket with festive flair.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-16",
    name: "Classic Red Bridal Lehenga",
    category: "Wedding",
    description: "Traditional red with heavy embroidery.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-17",
    name: "Mint Green Saree",
    category: "Sarees",
    description: "Soft pastels with delicate border.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-18",
    name: "Velvet Festive Suit",
    category: "Festive",
    description: "Velvet richness for evening events.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-19",
    name: "Couture Lehenga Set",
    category: "Lehengas",
    description: "Runway-inspired craftsmanship.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-20",
    name: "Rosewood Kurti Set",
    category: "Kurtis",
    description: "Elegant kurti with tonal embroidery.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-21",
    name: "Sequined Indo-Western",
    category: "Indo-Western",
    description: "Glamorous shimmer with modern cuts.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-22",
    name: "Classic Silk Saree",
    category: "Sarees",
    description: "Traditional weave with bold border.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-23",
    name: "Sunset Lehenga",
    category: "Festive",
    description: "Vibrant tones for festive nights.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-24",
    name: "Champagne Saree",
    category: "Sarees",
    description: "Minimal shimmer with chic drape.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-25",
    name: "Modern Kurti Dress",
    category: "Kurtis",
    description: "Contemporary silhouette for evenings.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-26",
    name: "Royal Blue Suit",
    category: "Suits",
    description: "Bold hue with intricate neckline.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-27",
    name: "Gold Bridal Saree",
    category: "Wedding",
    description: "Opulent zari with hand details.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-28",
    name: "Blush Indo-Western Gown",
    category: "Indo-Western",
    description: "Flowing gown with fusion flair.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-29",
    name: "Emerald Festive Saree",
    category: "Festive",
    description: "Statement green with ornate border.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-30",
    name: "Statement Lehenga",
    category: "Lehengas",
    description: "Rich textures with luxe embroidery.",
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  }
];

const fallbackProducts: Product[] = rawProducts.map((product, index) => ({
  ...product,
  image: productImages[index % productImages.length]
}));

export const products: Product[] =
  productPosts.length > 0 ? productPosts : fallbackProducts;
