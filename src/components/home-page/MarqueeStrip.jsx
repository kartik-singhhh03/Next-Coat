import React from "react";

const marqueeItems = [
  "Licensed & Fully Insured",
  "5-Star Rated Painting Company",
  "Interior • Exterior • Cabinet Painting",
  "Serving Howard County & Central Maryland",
  "Premium Quality Finishes",
  "Locally Owned and Operated",
  "Free Estimates Available",
];

export default function MarqueeStrip() {
  return (
    <section className="bg-gradient-to-r from-[#0C2C4C] to-[#133d63] text-white flex items-center relative h-14 md:h-[70px] border-y border-white/10">
      <div className="flex whitespace-nowrap overflow-hidden group w-full marquee-mask">
        {/* First Block */}
        <div className="animate-marquee flex items-center flex-shrink-0 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`first-${idx}`}>
              <span className="marquee-text font-body font-medium px-6 md:px-10 text-[13px] md:text-[15px]">
                {item}
              </span>
              <span className="text-[#F07D2A] text-lg opacity-[0.85] select-none drop-shadow-[0_0_8px_rgba(240,125,42,0.3)]">
                •
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Block for Seamless Loop */}
        <div
          className="animate-marquee flex items-center flex-shrink-0 group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`second-${idx}`}>
              <span className="marquee-text font-body font-medium px-6 md:px-10 text-[13px] md:text-[15px]">
                {item}
              </span>
              <span className="text-[#F07D2A] text-lg opacity-[0.85] select-none drop-shadow-[0_0_8px_rgba(240,125,42,0.3)]">
                •
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .marquee-text {
          letter-spacing: 0.5px;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }

        .animate-marquee {
          animation: marqueeScroll 35s linear infinite;
        }
        
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
