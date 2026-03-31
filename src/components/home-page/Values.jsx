import React from "react";
import { Calculator, ClipboardList, MapPin } from "lucide-react";

const values = [
  {
    number: "01",
    icon: Calculator,
    heading: "Financial Integrity",
    description:
      'We value precision over "guesstimates." We provide line-item digital quotes that are guaranteed. With NextCoat, the price we shake hands on is the price you pay — no hidden fees, no mid-project surprises.',
  },
  {
    number: "02",
    icon: ClipboardList,
    heading: "Process-Driven Excellence",
    description:
      "We replace chaos with corporate-grade project management. Using professional-grade scheduling and communication tools, we ensure your project hits every milestone on time.",
  },
  {
    number: "03",
    icon: MapPin,
    heading: "A Local Legacy",
    description:
      "We aren't a revolving-door franchise; we are your neighbors in Fulton. Our reputation is built one home at a time. We treat your property's long-term value as a personal investment.",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-12 bg-secondary" />
            <span className="text-secondary text-sm font-body font-bold tracking-[0.2em] uppercase">
              Core Philosophy
            </span>
            <span className="h-px w-12 bg-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            The NextCoat Difference
          </h2>
          <p className="text-accent text-lg font-body leading-relaxed max-w-2xl mx-auto">
            We elevate the painting industry with data driven discipline,
            transparent accountability, and a deep commitment to the communities
            we serve.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {values.map((value, idx) => (
            <div
              key={value.number}
              className="card group relative bg-white border border-gray-100 rounded-2xl p-10 hover:border-secondary/30 overflow-hidden reveal-on-scroll "
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              {/* Paint Blob / Radial Gradient Background Effects */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-700 pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none"></div>

              <div className="card-content flex flex-col h-full relative z-10">
                {/* Top Row: Icon & Number */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-secondary/10 group-hover:scale-110 transition-all duration-500">
                    <value.icon
                      className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="block text-4xl font-heading font-bold text-primary/5 group-hover:text-secondary/10 transition-colors duration-500">
                    {value.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-heading font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                    {value.heading}
                  </h3>
                  <p className="text-accent text-base font-body leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Bottom Edge Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/80 to-primary/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
