import { useNavigate } from "react-router-dom";
import { useCart } from "../utils/CartContext";
import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
                <div className="mb-6 h-24 w-24 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                    <ShoppingBag size={48} />
                </div>
                <h1 className="text-3xl font-serif text-maroon mb-4">Your Cart is Empty</h1>
                <p className="text-zinc-500 mb-8 max-w-md text-center">Looks like you haven't added anything to your cart yet. Explore our premium collections to find something special.</p>
                <button
                    onClick={() => navigate("/collections")}
                    className="btn btn-primary"
                >
                    Explore Collections
                </button>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Your Cart | Shubham Showroom</title>
            </Helmet>

            <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
                <Reveal>
                    <h1 className="font-serif text-4xl text-maroon mb-12">Shopping Cart</h1>
                </Reveal>

                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div key={`${item.id}-${item.size}`} className="flex gap-6 border-b border-zinc-100 pb-6 group">
                                    <div className="h-32 w-24 overflow-hidden rounded-lg bg-zinc-100">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover transition group-hover:scale-110" />
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-zinc-900 leading-tight">{item.name}</h3>
                                                <p className="text-sm font-medium text-maroon">Size: {item.size}</p>
                                            </div>
                                            <p className="font-bold text-zinc-900">₹{(item.price * item.quantity).toLocaleString()}</p>
                                        </div>

                                        <div className="mt-auto flex justify-between items-center">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                                    className="h-8 w-8 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 rounded"
                                                >-</button>
                                                <span className="w-4 text-center text-sm font-bold">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                                    className="h-8 w-8 border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 rounded"
                                                >+</button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id, item.size)}
                                                className="text-zinc-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="rounded-2xl bg-zinc-50 p-8 sticky top-32">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-zinc-600">
                                    <span>Subtotal</span>
                                    <span>₹{totalPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-zinc-600">
                                    <span>Delivery</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="border-t border-zinc-200 pt-4 flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-maroon">₹{totalPrice.toLocaleString()}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate("/checkout")}
                                className="w-full btn btn-primary flex items-center justify-center gap-2"
                            >
                                Checkout <ArrowRight size={20} />
                            </button>

                            <p className="mt-6 text-xs text-center text-zinc-500 leading-relaxed italic">
                                * By proceeding, you will be redirected to provide your contact details for finalizing the order via WhatsApp & Email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
