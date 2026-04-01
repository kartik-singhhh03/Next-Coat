import { useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2, X } from "lucide-react";
import SEO from "../components/SEO";

// Categorized data based on actual folder contents
const galleryImages = [
  // --- Cabinet Images (g1 to g6) ---
  {
    id: 1,
    src: "/images/gallery/g1.jpeg",
    category: "cabinet",
    alt: "Cabinet painting",
  },
  {
    id: 2,
    src: "/images/gallery/g2.jpeg",
    category: "cabinet",
    alt: "Cabinet painting",
  },
  {
    id: 3,
    src: "/images/gallery/g3.jpeg",
    category: "cabinet",
    alt: "Cabinet painting",
  },
  {
    id: 4,
    src: "/images/gallery/g4.jpeg",
    category: "cabinet",
    alt: "Cabinet painting",
  },
  {
    id: 5,
    src: "/images/gallery/g5.jpeg",
    category: "cabinet",
    alt: "Cabinet painting",
  },
  {
    id: 6,
    src: "/images/gallery/g6.jpeg",
    category: "cabinet",
    alt: "Cabinet painting",
  },

  // --- Interior Images (Except g16) ---
  {
    id: 7,
    src: "/images/gallery/g7.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 8,
    src: "/images/gallery/g8.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 9,
    src: "/images/gallery/g9.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 10,
    src: "/images/gallery/g10.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 11,
    src: "/images/gallery/g11.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 12,
    src: "/images/gallery/g12.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 13,
    src: "/images/gallery/g13.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 14,
    src: "/images/gallery/g14.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 15,
    src: "/images/gallery/g15.jpeg",
    category: "interior",
    alt: "Interior painting",
  },

  // --- Exterior Images (g16 ONLY) ---
  {
    id: 16,
    src: "/images/gallery/g16.jpeg",
    category: "exterior",
    alt: "Exterior painting",
  },

  // --- Interior Images (Remaining) ---
  {
    id: 17,
    src: "/images/gallery/g17.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 18,
    src: "/images/gallery/g18.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 19,
    src: "/images/gallery/g19.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 20,
    src: "/images/gallery/g20.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 21,
    src: "/images/gallery/g21.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
  {
    id: 22,
    src: "/images/gallery/g22.jpeg",
    category: "interior",
    alt: "Interior painting",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [sliderPosition, setSliderPosition] = useState(50); // For Before/After

  const categories = ["All", "cabinet", "interior", "exterior"];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Painting Gallery | NextCoat Painting MD"
        description="Explore our gallery of real transformations. See our stunning interior painting, exterior painting, and cabinet painting services in Howard County."
        keywords="Howard County painters, Interior painting MD, Exterior painting Maryland, Cabinet painting services, painting gallery, portfolio"
      />
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
          <img
            src="/images/gallery/g5.jpeg"
            alt="Beautifully painted home"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6 reveal-on-scroll">
            Our Work Speaks for Itself
          </h1>
          <p
            className="text-xl text-gray-200 font-light max-w-2xl mx-auto reveal-on-scroll"
            style={{ animationDelay: "100ms" }}
          >
            Explore real transformations by NextCoat.
          </p>
        </div>
      </section>

      {/* 2 & 4. FILTER & IMAGE GRID */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                  filter === cat
                    ? "bg-secondary text-white shadow-lg shadow-secondary/30"
                    : "bg-white text-primary border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid via Tailwind Columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg shadow-primary/5 cursor-pointer bg-white"
                onClick={() => {
                  setSelectedImage(img);
                  document.body.style.overflow = "hidden";
                }}
              >
                <img
                  src={img.src}
                  alt={`${img.alt} - NextCoat Painting Maryland`}
                  loading="lazy"
                  className="w-full h-auto object-cover transform transition-transform duration-[1.5s] group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <Maximize2 className="text-white w-10 h-10 transform scale-50 group-hover:scale-100 transition-transform duration-500" />
                </div>
                {/* Image Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                  <span className="text-secondary text-xs font-bold tracking-widest uppercase block mb-1">
                    {img.category}
                  </span>
                  <span className="font-heading text-lg">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BEFORE/AFTER SLIDER */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            The Power of Paint
          </h2>
          <p className="text-lg text-accent font-light max-w-2xl mx-auto">
            Swipe to see how a professional coat of paint can completely
            revitalize a space.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl flex select-none">
            {/* "After" Image */}
            <img
              src="/images/gallery/g4.jpeg"
              alt="After Transformation - Cabinet painting services"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-primary font-bold text-sm tracking-wide z-10 shadow-lg pointer-events-none">
              AFTER
            </div>

            {/* "Before" Image (Simulated with grayscale for dramatic effect) */}
            <img
              src="/images/gallery/g4.jpeg"
              alt="Before Transformation - Cabinet painting services"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 brightness-90 z-20 pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            />
            <div
              className="absolute top-6 left-6 bg-primary/90 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-sm tracking-wide z-30 shadow-lg pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              BEFORE (SIMULATED)
            </div>

            {/* Slider Handle UI */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white flex items-center justify-center transform -translate-x-1/2 pointer-events-none pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] flex items-center justify-center text-primary">
                {/* Custom Left/Right chevron SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-180"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </div>
            </div>

            {/* Invisible Range Input for Interaction */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(e.target.value)}
              className="absolute inset-0 z-40 w-full h-full opacity-0 cursor-ew-resize m-0 p-0"
            />
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('/images/gallery/g1.jpeg')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-lg text-gray-300 font-light mb-10 max-w-xl mx-auto">
            Ready to add your home to our gallery? Request a free, no-obligation
            estimate and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-secondary text-white font-medium rounded-full shadow-lg shadow-secondary/30 hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
            >
              Get a Free Estimate
            </Link>
          </div>
          <p className="mt-6 text-white font-semibold text-sm tracking-wide animate-pulse">
            ?? Limited slots this month
          </p>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-5 animate-fade-in"
          onClick={() => {
            setSelectedImage(null);
            document.body.style.overflow = "auto";
          }}
        >
          <div className="relative flex items-center justify-center max-w-[95%] max-h-[90%]">
            <button
              className="absolute top-5 right-5 bg-black/60 text-white rounded-full p-2 cursor-pointer z-[10000] transition-all duration-300 hover:bg-secondary"
              onClick={() => {
                setSelectedImage(null);
                document.body.style.overflow = "auto";
              }}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img
                src={selectedImage.src}
                alt={`${selectedImage.alt} - NextCoat Howard County painters`}
                loading="lazy"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[fadeZoom_0.3s_ease]"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="mt-4 text-center text-white">
                <span className="text-secondary text-xs font-bold tracking-widest uppercase block mb-1">
                  {selectedImage.category}
                </span>
                <span className="font-heading text-xl">
                  {selectedImage.alt}
                </span>
              </div>
            </div>
            <style>{`
              @keyframes fadeZoom {
                from {
                  opacity: 0;
                  transform: scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
            `}</style>
          </div>
        </div>
      )}
    </div>
  );
}
