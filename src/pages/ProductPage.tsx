import { useParams, useNavigate } from "react-router-dom";
import { products } from "../utils/products";
import { useCart } from "../utils/CartContext";
import { useToast } from "../utils/ToastContext";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import { ShoppingCart, Send, ChevronLeft, CheckCircle2 } from "lucide-react";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { showToast } = useToast();

    const product = products.find((p) => p.id === id);
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
                <h1 className="text-2xl font-serif text-maroon">Product Not Found</h1>
                <button
                    onClick={() => navigate("/collections")}
                    className="mt-6 flex items-center gap-2 text-maroon hover:underline"
                >
                    <ChevronLeft size={20} /> Back to Collections
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price || 0,
            image: product.image,
            size: selectedSize,
            quantity: quantity
        });
        showToast("Added to Cart");
    };

    const handleBuyNow = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price || 0,
            image: product.image,
            size: selectedSize,
            quantity: quantity
        });
        navigate("/cart");
    };

    return (
        <>
            <Helmet>
                <title>Buy {product.name} Online | Shubham Showroom</title>
                <meta name="description" content={`Shop the latest ${product.name} from our ${product.category} collection. Premium quality ethnic wear for men at Shubham Showroom.`} />
                <meta property="og:title" content={`${product.name} - Shubham Showroom`} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={product.image} />
                <meta property="og:type" content="product" />
            </Helmet>

            <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:py-12">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-zinc-500 hover:text-maroon transition-colors font-medium text-sm group"
                >
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Back to Collections
                </button>

                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Product Images - Left Column */}
                    <div className="lg:col-span-7">
                        <Reveal>
                            <div className="sticky top-32 space-y-4">
                                <div className="overflow-hidden rounded-3xl bg-white shadow-sm aspect-[4/5] relative group">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-maroon shadow-sm">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                                {/* Secondary dummy images placeholder */}
                                <div className="grid grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="aspect-square rounded-xl bg-zinc-100 overflow-hidden cursor-pointer hover:ring-2 ring-maroon transition-all opacity-60 hover:opacity-100">
                                            <img src={product.image} alt="Detail view" className="h-full w-full object-cover grayscale-[0.5]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Product Info - Right Column */}
                    <div className="lg:col-span-5 flex flex-col pt-4 lg:pt-0">
                        <Reveal>
                            <nav className="flex mb-4 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                                <span className="hover:text-maroon cursor-pointer">Home</span>
                                <span className="mx-2">/</span>
                                <span className="hover:text-maroon cursor-pointer">{product.category}</span>
                                <span className="mx-2">/</span>
                                <span className="text-maroon">{product.name}</span>
                            </nav>
                            <h1 className="font-serif text-3xl md:text-5xl text-zinc-900 mb-2 leading-tight">{product.name}</h1>
                            <p className="text-zinc-500 mb-6 text-lg leading-relaxed">{product.description}</p>

                            <div className="flex items-baseline gap-4 mb-2">
                                <span className="text-4xl font-bold text-maroon">₹{product.price?.toLocaleString()}</span>
                                <span className="text-xl text-zinc-400 line-through">₹{(product.price ? product.price * 1.5 : 0).toLocaleString()}</span>
                                <span className="text-green-600 font-bold text-sm">33% OFF</span>
                            </div>
                            <p className="text-xs font-medium text-zinc-500 mb-8 italic">Inclusive of all taxes</p>
                        </Reveal>

                        {/* Size Selection */}
                        <Reveal>
                            <div className="mb-10">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900">Select Size</h3>
                                    <button className="text-[10px] font-bold uppercase tracking-widest text-maroon hover:underline">Size Chart</button>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {product.sizes?.map((size, index) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`relative h-14 w-14 rounded-xl border-2 transition-all flex items-center justify-center font-bold text-sm ${selectedSize === size
                                                ? "border-maroon bg-maroon text-white shadow-lg shadow-maroon/20 scale-105"
                                                : "border-zinc-100 text-zinc-600 hover:border-maroon/30"
                                                }`}
                                        >
                                            {size}
                                            {index === 1 && (
                                                <span className="absolute -top-2 -right-2 bg-red-500 text-[8px] text-white px-1.5 py-0.5 rounded-full animate-pulse whitespace-nowrap">
                                                    Only 2 left!
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {/* Quantity */}
                        <Reveal>
                            <div className="mb-10">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">Quantity</h3>
                                <div className="inline-flex items-center gap-1 bg-zinc-100 p-1 rounded-2xl">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-xl transition-colors font-bold text-lg"
                                    >-</button>
                                    <span className="w-10 text-center font-bold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-xl transition-colors font-bold text-lg"
                                    >+</button>
                                </div>
                            </div>
                        </Reveal>

                        {/* Actions */}
                        <Reveal>
                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 h-14 rounded-2xl border-2 border-maroon text-maroon font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-maroon hover:text-white transition-all active:scale-95"
                                >
                                    <ShoppingCart size={18} /> Add to Cart
                                </button>
                                <button
                                    onClick={handleBuyNow}
                                    className="flex-1 h-14 rounded-2xl bg-maroon text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-zinc-900 transition-all active:scale-95 shadow-xl shadow-maroon/20"
                                >
                                    <Send size={18} /> Buy Now
                                </button>
                            </div>
                        </Reveal>

                        {/* Features/Trust Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-zinc-100 pt-8 mt-auto">
                            {[
                                { label: "Premium Craftsmanship", desc: "Hand-finished detailing" },
                                { label: "Easy 7-Day Exchange", desc: "No questions asked" },
                                { label: "Secured Payments", desc: "WhatsApp confirmation" },
                                { label: "Free Shipping", desc: "On orders above ₹5000" }
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="h-10 w-10 bg-zinc-50 rounded-xl flex items-center justify-center text-gold shrink-0">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-zinc-900">{feature.label}</p>
                                        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
