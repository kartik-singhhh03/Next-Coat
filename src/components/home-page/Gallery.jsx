import { useState } from "react";
const images = [
  "/images/gallery/g1.jpeg",
  "/images/gallery/g2.jpeg",
  "/images/gallery/g3.jpeg",
  "/images/gallery/g4.jpeg",
  "/images/gallery/g5.jpeg",
  "/images/gallery/g6.jpeg",
];

const Overlay = () => (
  <div className="absolute inset-0 bg-transparent group-hover:bg-primary/40 transition-colors duration-500 flex items-center justify-center pointer-events-none">
    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 translate-y-4 group-hover:translate-y-0">
      <svg
        className="w-6 h-6 text-primary"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 8v6M8 11h6"
        />
      </svg>
    </div>
  </div>
);

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden md:block h-px w-12 bg-secondary" />
            <span className="text-secondary text-sm font-body font-semibold tracking-[0.2em] uppercase">
              Our Work
            </span>
            <span className="hidden md:block h-px w-12 bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            See the NextCoat Transformation
          </h2>
          <p className="text-accent text-lg font-light font-body leading-relaxed max-w-2xl mx-auto">
            Real homes. Real results. Premium finishes that speak for
            themselves.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 md:gap-6 md:h-[700px]">
          {/* g1 ? large */}
          <div
            onClick={() => {
              setSelected(images[0]);
              document.body.style.overflow = "hidden";
            }}
            className="md:col-span-6 md:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer h-64 md:h-auto shadow-md hover:shadow-2xl transition-all duration-500 ease-out"
          >
            <img
              src={images[0]}
              alt="Interior painting MD - NextCoat Project"
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
            />
            <Overlay />
          </div>

          {/* g2 */}
          <div
            onClick={() => {
              setSelected(images[1]);
              document.body.style.overflow = "hidden";
            }}
            className="md:col-span-3 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer h-48 md:h-auto shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
          >
            <img
              src={images[1]}
              alt="Interior painting MD - NextCoat Project"
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
            />
            <Overlay />
          </div>

          {/* g3 */}
          <div
            onClick={() => {
              setSelected(images[2]);
              document.body.style.overflow = "hidden";
            }}
            className="md:col-span-3 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer h-48 md:h-auto shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
          >
            <img
              src={images[2]}
              alt="Interior painting MD - NextCoat Project"
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
            />
            <Overlay />
          </div>

          {/* g4 */}
          <div
            onClick={() => {
              setSelected(images[3]);
              document.body.style.overflow = "hidden";
            }}
            className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer h-48 md:h-auto shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
          >
            <img
              src={images[3]}
              alt="Interior painting MD - NextCoat Project"
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
            />
            <Overlay />
          </div>

          {/* g5 */}
          <div
            onClick={() => {
              setSelected(images[4]);
              document.body.style.overflow = "hidden";
            }}
            className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer h-48 md:h-auto shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
          >
            <img
              src={images[4]}
              alt="Interior painting MD - NextCoat Project"
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
            />
            <Overlay />
          </div>

          {/* g6 */}
          <div
            onClick={() => {
              setSelected(images[5]);
              document.body.style.overflow = "hidden";
            }}
            className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer h-48 md:h-auto shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
          >
            <img
              src={images[5]}
              alt="Interior painting MD - NextCoat Project"
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
            />
            <Overlay />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-5 animate-fade-in"
          onClick={() => {
            setSelected(null);
            document.body.style.overflow = "auto";
          }}
        >
          <div className="relative flex items-center justify-center max-w-[95%] max-h-[90%]">
            <button
              className="absolute top-5 right-5 bg-black/60 text-white rounded-full p-2 cursor-pointer z-[10000] transition-all duration-300 hover:bg-secondary"
              onClick={() => {
                setSelected(null);
                document.body.style.overflow = "auto";
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img
                src={selected}
                alt="NextCoat Painting Project Full View"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[fadeZoom_0.3s_ease]"
                onClick={(e) => e.stopPropagation()}
              />
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
    </section>
  );
}
