import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

export default function UrgencyCTA() {
  return (
    <div className="mt-16 text-center flex flex-col items-center justify-center reveal-on-scroll">
      <div className="inline-flex items-center gap-2 mb-4 bg-red-50 text-red-600 px-4 py-1.5 rounded-full border border-red-100">
        <Clock className="w-4 h-4 animate-pulse" />
        <span className="font-semibold text-sm tracking-wide">
          Limited slots available this month
        </span>
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-10 py-4 bg-secondary text-white font-bold text-lg rounded-full shadow-[0_10px_25px_rgba(240,125,42,0.4)] hover:bg-[#d96a20] hover:shadow-[0_15px_35px_rgba(240,125,42,0.5)] transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.03]"
      >
        Claim Your Free Estimate
      </Link>
    </div>
  );
}
