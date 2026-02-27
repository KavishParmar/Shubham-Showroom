import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../utils/CartContext";
import { Helmet } from "react-helmet-async";
import Reveal from "../components/Reveal";
import { User, Phone, Mail, MapPin, CheckCircle2, ChevronLeft } from "lucide-react";

type CheckoutData = {
    name: string;
    phone: string;
    email: string;
    address: string;
};

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cart, totalPrice, clearCart } = useCart();

    // Handle direct buy from product page or cart
    const directBuy = location.state?.directBuy;
    const checkoutItems = directBuy ? [directBuy] : cart;
    const checkoutTotal = directBuy ? directBuy.price * directBuy.quantity : totalPrice;

    const [formData, setFormData] = useState<CheckoutData>({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePurchase = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare message for WhatsApp and Email
        const merchantPhone = "917042816202"; // Updated WhatsApp number
        const merchantEmail = "kavishparmar2@gmail.com"; // Updated Email

        const orderDate = new Date().toLocaleString();
        const orderItemsList = checkoutItems.map(item =>
            `📦 ${item.name}\n   Size: ${item.size} | Qty: ${item.quantity}\n   Price: ₹${(item.price * item.quantity).toLocaleString()}\n   Link: ${window.location.origin}/product/${item.id}`
        ).join("\n\n");

        const message = `✨ *NEW ORDER - SHUBHAM SHOWROOM* ✨\n` +
            `----------------------------------\n` +
            `📅 Date: ${orderDate}\n\n` +
            `👤 *CUSTOMER DETAILS*\n` +
            `Name: ${formData.name}\n` +
            `Phone: ${formData.phone}\n` +
            `Email: ${formData.email}\n` +
            `Address: ${formData.address}\n\n` +
            `🛒 *ORDER SUMMARY*\n` +
            `${orderItemsList}\n\n` +
            `----------------------------------\n` +
            `💰 *TOTAL AMOUNT: ₹${checkoutTotal.toLocaleString()}*\n` +
            `----------------------------------\n\n` +
            `🙏 *Thank you for shopping with us!*`;

        // 1. WhatsApp Redirect
        const whatsappUrl = `https://wa.me/${merchantPhone}?text=${encodeURIComponent(message)}`;

        // 2. Email Redirect (Mailto)
        const emailSubject = `Order #${Math.floor(Math.random() * 100000)} - ${formData.name}`;
        const mailtoUrl = `mailto:${merchantEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");

        // Trigger Email (using window.location for email tends to be better to avoid pop-up blockers)
        window.location.href = mailtoUrl;

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            if (!directBuy) clearCart();
        }, 1000);
    };

    if (checkoutItems.length === 0 && !isSuccess) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-serif text-maroon">Nothing to Checkout</h1>
                <button onClick={() => navigate("/collections")} className="mt-4 text-maroon hover:underline">Go to Collections</button>
            </div>
        );
    }

    if (isSuccess) {
        return (
            <div className="flex min-h-[70vh] flex-col items-center justify-center p-4">
                <div className="mb-6 h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={40} />
                </div>
                <h1 className="text-3xl font-serif text-maroon mb-4">Order Placed Successfully!</h1>
                <p className="text-center text-zinc-600 mb-8 max-w-md">
                    Thank you for choosing Shubham Showroom. We have received your order details via WhatsApp and Email. Our team will contact you shortly for confirmation.
                </p>
                <button onClick={() => navigate("/")} className="btn btn-primary">Return Home</button>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Checkout | Shubham Showroom</title>
            </Helmet>

            <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 text-maroon hover:gap-3 transition-all font-medium"
                >
                    <ChevronLeft size={20} /> Back
                </button>

                <Reveal>
                    <h1 className="font-serif text-4xl text-maroon mb-12 text-center md:text-left">Finalize Your Purchase</h1>
                </Reveal>

                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Order Details Preview */}
                    <div className="order-last lg:order-first">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-maroon"></span>
                            Order Summary
                        </h2>
                        <div className="rounded-2xl border border-zinc-100 p-6 space-y-4">
                            {checkoutItems.map((item) => (
                                <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center">
                                    <div className="h-16 w-12 rounded bg-zinc-50 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-sm leading-tight">{item.name}</p>
                                        <p className="text-xs text-zinc-500">Qty: {item.quantity} • Size: {item.size}</p>
                                    </div>
                                    <p className="font-bold text-sm">₹{(item.price * item.quantity).toLocaleString()}</p>
                                </div>
                            ))}
                            <div className="border-t border-zinc-100 pt-4 mt-6">
                                <div className="flex justify-between text-lg font-bold">
                                    <span>Total Amount</span>
                                    <span className="text-maroon">₹{checkoutTotal.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <div className="mb-8 p-4 rounded-2xl bg-gold/5 border border-gold/10">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">Items in Order</h3>
                            <div className="flex -space-x-4 overflow-hidden">
                                {checkoutItems.map((item, i) => (
                                    <div key={i} className="h-16 w-12 rounded-lg border-2 border-white shadow-sm overflow-hidden z-[i]">
                                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p className="mt-3 text-[10px] text-zinc-500 font-medium">These products will be automatically listed in your WhatsApp/Email order message.</p>
                        </div>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-gold"></span>
                            Contact Details
                        </h2>
                        <form onSubmit={handlePurchase} className="space-y-6">
                            <div className="relative">
                                <span className="absolute left-4 top-4 text-zinc-400"><User size={20} /></span>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-2 border-zinc-100 bg-zinc-50 py-4 pl-12 pr-4 focus:border-maroon focus:outline-none transition-all"
                                />
                            </div>

                            <div className="relative">
                                <span className="absolute left-4 top-4 text-zinc-400"><Phone size={20} /></span>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    placeholder="WhatsApp Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-2 border-zinc-100 bg-zinc-50 py-4 pl-12 pr-4 focus:border-maroon focus:outline-none transition-all"
                                />
                            </div>

                            <div className="relative">
                                <span className="absolute left-4 top-4 text-zinc-400"><Mail size={20} /></span>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-2 border-zinc-100 bg-zinc-50 py-4 pl-12 pr-4 focus:border-maroon focus:outline-none transition-all"
                                />
                            </div>

                            <div className="relative">
                                <span className="absolute left-4 top-4 text-zinc-400"><MapPin size={20} /></span>
                                <textarea
                                    required
                                    name="address"
                                    placeholder="Delivery Address"
                                    rows={4}
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-2 border-zinc-100 bg-zinc-50 py-4 pl-12 pr-4 focus:border-maroon focus:outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                disabled={isSubmitting}
                                className="w-full btn btn-primary py-6 text-lg font-serif tracking-widest flex items-center justify-center gap-2 group"
                            >
                                {isSubmitting ? "Processing..." : "PLACE ORDER & CONTINUE"}
                                <CheckCircle2 className={`transition-transform ${isSubmitting ? '' : 'group-hover:scale-125'}`} size={24} />
                            </button>

                            <p className="text-xs text-center text-zinc-400 italic">
                                Clicking the button will open WhatsApp and your Email client to send the order details automatically.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
