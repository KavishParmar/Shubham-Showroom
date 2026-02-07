/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F9F6F1",
        maroon: "#5E1A24",
        emerald: "#0E3B2E",
        bronze: "#C18B4B",
        gold: "#D6B26C"
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "serif"],
        sans: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 15px 40px rgba(15, 10, 6, 0.12)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(1200px 600px at 10% 10%, rgba(214, 178, 108, 0.35), transparent 60%), radial-gradient(900px 700px at 90% 20%, rgba(94, 26, 36, 0.25), transparent 60%)",
        "linen":
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,246,241,0.85) 50%, rgba(255,255,255,0.9) 100%)"
      }
    }
  },
  plugins: []
};
