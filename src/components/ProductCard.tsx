import React from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Product } from "../utils/products";
import { useCart } from "../utils/CartContext";
import { useToast } from "../utils/ToastContext";
import { ShoppingCart, Send } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price || 0,
      image: product.image,
      size: product.sizes?.[0] || "M",
      quantity: 1
    });
    showToast("Added to Cart");
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price || 0,
      image: product.image,
      size: product.sizes?.[0] || "M",
      quantity: 1
    });
    navigate("/cart");
  };

  return (
    <div className="glass-card flex flex-col h-full overflow-hidden transition-all hover:shadow-2xl group">
      <Link to={`/product/${product.id}`} className="aspect-[4/5] w-full overflow-hidden block relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={handleAddToCart}
            className="h-10 w-10 bg-white text-maroon rounded-full flex items-center justify-center shadow-xl hover:bg-maroon hover:text-white transition-all transform hover:scale-110"
          >
            <ShoppingCart size={18} />
          </button>
          <button
            onClick={handleBuyNow}
            className="h-10 w-10 bg-maroon text-white rounded-full flex items-center justify-center shadow-xl hover:bg-zinc-900 transition-all transform hover:scale-110"
          >
            <Send size={18} />
          </button>
        </div>
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-xl text-maroon hover:text-gold transition-colors">{product.name}</h3>
          </Link>
          <p className="font-bold text-lg text-zinc-900">₹{product.price?.toLocaleString()}</p>
        </div>
        <p className="mt-2 text-sm text-zinc-600 line-clamp-2 mb-4">{product.description}</p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-100">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold bg-gold/10 px-1 py-0.5 rounded">
            {product.category}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="h-8 w-8 border border-maroon text-maroon rounded flex items-center justify-center hover:bg-maroon hover:text-white transition-all"
              title="Add to Cart"
            >
              <ShoppingCart size={14} />
            </button>
            <button
              onClick={handleBuyNow}
              className="text-[10px] font-bold uppercase tracking-[0.2em] bg-maroon text-white px-3 py-1.5 rounded hover:bg-zinc-900 transition-colors shadow-md shadow-maroon/10"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
