import type { Product } from "../utils/products";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="glass-card overflow-hidden">
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-maroon">{product.name}</h3>
        <p className="mt-2 text-sm text-zinc-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">
            {product.category}
          </span>
          <a
            href={product.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
