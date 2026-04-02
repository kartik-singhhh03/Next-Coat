import { Phone } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="hidden md:flex fixed bottom-8 right-6 z-50 items-center">
      <a
        href="tel:+12403426095"
        className="relative flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white rounded-full shadow-[0_10px_35px_rgba(240,125,42,0.5)] hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(240,125,42,0.7)] transition-all duration-300 focus:outline-none overflow-hidden group"
        aria-label="Call Now"
      >
        <span className="absolute inset-0 bg-white/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

        <Phone className="w-5 h-5 relative z-10" fill="currentColor" />
        <span className="font-heading font-semibold tracking-wider uppercase text-base relative z-10">
          Call Now
        </span>
      </a>
    </div>
  );
}
