import { Link } from "react-router-dom";
import UrgencyCTA from "../UrgencyCTA";
import interior from "/images/interior.jpeg";
import exterior from "/images/exterior.jpeg";
import cabinet from "/images/hero3.jpeg";

const servicesList = [
  {
    title: "Interior Painting MD",
    description:
      "Precision wall and ceiling coatings with flawless finishes that redefine your living space.",
    image: interior,
    alt: "Interior painting MD - NextCoat Painting",
  },
  {
    title: "Exterior Painting Maryland",
    description:
      "Durable, weather-resistant coatings that enhance curb appeal and protect your home.",
    image: exterior,
    alt: "Exterior painting Maryland - Howard County painters",
  },
  {
    title: "Cabinet Painting Services",
    description:
      "Transform your kitchen with smooth, factory-quality cabinet finishes.",
    image: cabinet,
    alt: "Cabinet painting services - Kitchen transformation",
  },
];
export default function Services() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F3FBFD 0%, #EAF7FB 100%)",
      }}
    >
      {/* Background premium textures and gradients */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3), transparent 40%)",
        }}
      ></div>
      <div
        className="absolute w-[400px] h-[400px] rounded-full z-0 pointer-events-none -top-[100px] -right-[100px]"
        style={{
          background: "rgba(255, 140, 0, 0.08)",
          filter: "blur(120px)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 reveal-on-scroll">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden md:block h-px w-12 bg-secondary" />
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase">
              Expertise
            </span>
            <span className="hidden md:block h-px w-12 bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-primary leading-tight mb-6">
            Our Core Services
          </h2>
          <p className="text-accent text-lg font-light max-w-2xl mx-auto leading-relaxed">
            We specialize in high-end residential painting services designed to
            elevate your home's appearance and value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {servicesList.map((service, idx) => (
            <div
              key={idx}
              className={`card group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer reveal-on-scroll ${idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : ""}`}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.alt || service.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Card Content */}
              <div className="card-content flex flex-col flex-1 p-8 md:p-10 relative z-20 bg-white">
                <h3 className="text-2xl font-heading text-primary font-semibold mb-4 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-accent text-base leading-relaxed font-light mb-8 flex-1">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-sm font-medium tracking-wide text-primary group-hover:text-secondary transition-colors duration-300"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <UrgencyCTA />
        </div>
      </div>
    </section>
  );
}
