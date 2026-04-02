import { Link } from "react-router-dom";
import ana from "/images/ana-img.webp";

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Decorative background elements to enhance glassmorphism contrast */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:items-center md:text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="hidden md:block h-px w-8 bg-secondary" />
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase">
              The Face of NextCoat
            </span>
            <span className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-primary leading-tight">
            Meet Ana G. Ricks
          </h2>
          <p className="text-lg text-accent mt-2 font-light italic">
            Principal & Director of Operations
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch group/about reveal-on-scroll">
          {/* Left Column - Image */}
          <div className="w-full lg:w-5/12 shrink-0 h-[500px] lg:h-auto rounded-2xl overflow-hidden shadow-2xl relative shadow-primary/10 group-hover/about:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-700">
            <img
              src={ana}
              alt="Ana G. Ricks - Principal & Director of Operations, NextCoat Howard County painters"
              loading="lazy"
              className="w-full h-full object-cover object-center transform group-hover/about:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Inner subtle gradient overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Right Column - Glassmorphism Card */}
          <div className="w-full lg:w-7/12 flex">
            <div className="w-full bg-white/70 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 border border-white/50 flex flex-col justify-center relative overflow-hidden transition-all duration-500 ease-out">
              {/* Background faint quote mark */}
              <span className="absolute -top-6 -right-6 text-[180px] text-primary/[0.03] font-heading leading-none select-none">
                "
              </span>

              {/* Bio Paragraphs */}
              <div className="space-y-6 text-accent text-base md:text-lg leading-relaxed font-light mb-10 relative z-10">
                <p>
                  As a homeowner, Ana knows exactly what it feels like to be on
                  the other side of a renovation. She and her husband have lived
                  through the common frustrations of the industry—the
                  contractors who don&apos;t show up on time, the broken
                  commitments, and the "disappearing acts" that make home
                  improvement more stressful than it should be.
                </p>
                <p>
                  At NextCoat, Ana&apos;s mission is to ensure you never have
                  that experience. By applying her background in community
                  banking—where trust and clear communication are the gold
                  standard—she manages every project with precision. She
                  believes that a professional result starts with a professional
                  relationship.
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative z-10 border-l-4 border-secondary pl-6 md:pl-8 py-2 bg-gradient-to-r from-secondary/5 to-transparent rounded-r-lg">
                <h3 className="text-secondary text-sm font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-sm"></h3>
                <blockquote className="text-primary text-lg md:text-xl leading-relaxed italic font-heading">
                  "I&apos;m here to take the logistics off your plate. We honor
                  the trust you place in us by treating your home with the same
                  care and reliability we expect in our own.
                  <br />
                  <br />
                  And you can rest assured that we will treat your pets (like
                  our puppy, Woodford!) and your property with the utmost
                  respect."
                </blockquote>
              </div>

              {/* Signature / CTA */}
              <div className="mt-10 pt-8 border-t border-primary/10 flex items-center justify-between relative z-10">
                <img
                  src="/logo.svg"
                  alt="NextCoat"
                  className="h-6 opacity-30 grayscale"
                />
                <Link
                  to="/about"
                  className="px-8 py-3 bg-white text-primary border border-primary/20 text-sm font-medium tracking-wide rounded-full hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 shadow-sm"
                >
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
