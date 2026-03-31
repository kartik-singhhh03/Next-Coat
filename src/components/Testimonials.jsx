import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Ellicott City, MD",
    text: "NextCoat transformed our entirely outdated living room into a modern masterpiece. The crew was incredibly professional, clean, and exact with their lines.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Columbia, MD",
    text: "From quote to final walkthrough, everything was seamless. They painted our kitchen cabinets and it looks like a brand new factory finish.",
    rating: 5,
  },
  {
    name: "Emily R.",
    location: "Clarksville, MD",
    text: "Professional, timely, and the results exceeded expectations. We hired them for a full exterior repaint and couldn't be happier with our new look.",
    rating: 5,
  },
  {
    name: "Michael B.",
    location: "Howard County, MD",
    text: "The attention to detail and clean finish was outstanding. Ana and her team left our home spotless after finishing.",
    rating: 5,
  },
  {
    name: "Laura K.",
    location: "Baltimore, MD",
    text: "Our cabinets look brand new. Highly recommend NextCoat for their craftsmanship and dedication to perfection.",
    rating: 5,
  },
];

// Duplicate for infinite scroll effect (ensures track is always populated)
const allTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          /* Shift by exactly 50% plus half the column gap (24px/2 = 12px) for perfect endless loop */
          100% { transform: translateX(calc(-50% - 12px)); }
        }
      
        .testimonial-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollLeft 35s linear infinite;
        }
        
        @media (max-width: 768px) {
          .testimonial-track {
            animation-duration: 45s;
          }
        }
      
        .testimonial-wrapper:hover .testimonial-track {
          animation-play-state: paused;
        }
      
        .testimonial-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 32px 28px;
          min-width: 320px;
          max-width: 360px;
          width: 360px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.04);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
      
        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          border-color: rgba(255,140,0,0.15);
        }
      
        .testimonial-splash {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          background: rgba(255, 140, 0, 0.08);
          filter: blur(60px);
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-heading text-[#0F2A44] leading-tight mb-4">
            Hear From Our Clients
          </h2>
          <p className="text-lg text-[#5A6A7A] font-light max-w-2xl mx-auto">
            We don't just paint homes; we build lasting relationships through
            trust, quality, and exceptional service.
          </p>
        </div>
      </div>

      {/* Testimonial Slider Wrapper */}
      <div className="testimonial-wrapper w-full relative pt-4 pb-12 overflow-hidden mx-auto max-w-[1600px]">
        {/* Edge Fade Masks for Premium Look */}
        <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none" />

        <div className="testimonial-track px-6">
          {allTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.name}-${idx}`}
              className="testimonial-card group"
            >
              {/* Premium Paint Touch */}
              <div className="testimonial-splash" />

              {/* Decorative Low Opacity Background Quote */}
              <Quote
                className="absolute top-8 right-8 w-16 h-16 text-gray-50 group-hover:text-[#FF8C00]/5 transition-colors duration-500 z-0 rotate-180 opacity-50"
                strokeWidth={1}
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex text-[#FF8C00] mb-6 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p
                  className="text-base leading-relaxed mb-10 italic flex-grow"
                  style={{ color: "#4A5A6A" }}
                >
                  "{testimonial.text}"
                </p>

                <div className="mt-auto border-t border-gray-50 pt-4">
                  <p
                    className="font-heading text-[17px] mb-1"
                    style={{ color: "#0F2A44", fontWeight: 600 }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-[13px] font-medium"
                    style={{ color: "#8A9AA8" }}
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
