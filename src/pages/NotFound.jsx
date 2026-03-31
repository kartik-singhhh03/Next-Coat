import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      <SEO
        title="Page Not Found | NextCoat Painting"
        description="The page you are looking for does not exist."
      />
      <h1 className="text-7xl md:text-9xl font-heading text-primary font-bold mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-[#0C2C4C] mb-6">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-500 max-w-md mx-auto mb-10 font-body">
        Sorry, we couldn't find the page you're looking for. It might have been
        moved or removed.
      </p>
      <Link
        to="/"
        className="inline-block bg-secondary text-white font-body font-semibold px-8 py-4 rounded-[12px] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
