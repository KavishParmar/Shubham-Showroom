import { productPosts } from "./instagramData";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price?: number;
  sizes?: string[];
  instagramUrl: string;
};


export const categories = [
  "All",
  "Kurta Pajama",
  "Sherwani",
  "Coats",
  "Shirts",
  "Pants",
  "Shaadi Wear",
  "Indo-Western",
  "Accessories"
];

const rawProducts = [
  {
    id: "prod-1",
    name: "Classic Silk Kurta Pajama",
    category: "Kurta Pajama",
    description: "Elegant silk kurta with matching pajama, perfect for festive occasions.",
    image: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&q=80&w=800",
    price: 2500,
    sizes: ["S", "M", "L", "XL", "XXL"],
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-2",
    name: "Royal Wedding Sherwani",
    category: "Sherwani",
    description: "Intricately embroidered sherwani for a grand wedding look.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    price: 15000,
    sizes: ["M", "L", "XL"],
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-3",
    name: "Formal Navy Coat",
    category: "Coats",
    description: "Single-breasted navy blue coat for formal events.",
    image: "https://images.unsplash.com/photo-1591337673702-e29ad18bc9c2?auto=format&fit=crop&q=80&w=800",
    price: 5500,
    sizes: ["S", "M", "L", "XL", "XXL"],
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-4",
    name: "Cotton White Shirt",
    category: "Shirts",
    description: "Premium cotton white shirt for a crisp look.",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccedfe5d7?auto=format&fit=crop&q=80&w=800",
    price: 1200,
    sizes: ["S", "M", "L", "XL"],
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-5",
    name: "Slim Fit Black Pants",
    category: "Pants",
    description: "Versatile black slim fit pants for any occasion.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
    price: 1800,
    sizes: ["30", "32", "34", "36"],
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-6",
    name: "Designer Shaadi Wear Set",
    category: "Shaadi Wear",
    description: "Complete traditional set for wedding guests.",
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800",
    price: 8500,
    sizes: ["M", "L", "XL"],
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-7",
    name: "Modern Indo-Western Suit",
    category: "Indo-Western",
    description: "Fusion of traditional and modern styles.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    price: 6500,
    sizes: ["S", "M", "L", "XL"],
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  },
  {
    id: "prod-8",
    name: "Gold Embroidered Stole",
    category: "Accessories",
    description: "Luxurious stole to complement your ethnic wear.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
    price: 950,
    sizes: ["One Size"],
    instagramUrl: "https://www.instagram.com/shubham_showroom/"
  }
];

const fallbackProducts: Product[] = rawProducts.map((product) => ({
  ...product,
  image: product.image
}));

export const products: Product[] = fallbackProducts;
