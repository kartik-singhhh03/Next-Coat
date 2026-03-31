import React, { useEffect, useRef, useState } from "react";
import UrgencyCTA from "../UrgencyCTA";

const processSteps = [
  {
    title: "Precision Quote",
    description: "Detailed, clear, and exact pricing with no hidden fees.",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Protection Phase",
    description: "Meticulous masking and covering of all your belongings.",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Curated Specs",
    description: "Expert color consultation and premium paint selection.",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        ></path>
      </svg>
    ),
  },
  {
    title: "Active Management",
    description: "Daily updates and strict adherence to timelines.",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        ></path>
      </svg>
    ),
  },
  {
    title: "Final Walkthrough",
    description: "Thorough inspection to ensure absolute perfection.",
    icon: (
      <svg
        className="w-8 h-8 md:w-10 md:h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    ),
  },
];

const Process = () => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const nodePositions = [
    { x: 15, y: 35 },
    { x: 55, y: 35 },
    { x: 92, y: 52.5 },
    { x: 55, y: 70 },
    { x: 15, y: 70 },
  ];

  // Staggered delays mimicking path travel time (0ms to 2000ms)
  const stepDelays = [0, 400, 1000, 1600, 2000];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-gray-50 border-t border-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-28 reveal-on-scroll">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="hidden md:block h-px w-12 bg-secondary" />
            <span className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase">
              Our Methodology
            </span>
            <span className="hidden md:block h-px w-12 bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 tracking-tight">
            Our Proven Process
          </h2>
          <p className="text-accent text-lg font-body leading-relaxed max-w-2xl mx-auto">
            Every project follows a disciplined, transparent system â€” so you
            always know what to expect.
          </p>
        </div>

        {/* Desktop U-Shape Timeline (Hidden on Mobile) */}
        <div
          className="hidden lg:block w-full max-w-[1000px] mx-auto relative mb-32"
          style={{ aspectRatio: "1000 / 400" }}
        >
          <svg
            viewBox="0 0 1000 400"
            className="absolute inset-0 w-full h-full overflow-visible"
          >
            {/* Base Line */}
            <path
              d="M 150 140 H 850 A 70 70 0 0 1 920 210 V 210 A 70 70 0 0 1 850 280 H 150"
              stroke="#e5e7eb"
              strokeWidth="4"
              fill="none"
            />
            {/* Animated Active Line */}
            <path
              d="M 150 140 H 850 A 70 70 0 0 1 920 210 V 210 A 70 70 0 0 1 850 280 H 150"
              stroke="#F07D2A"
              strokeWidth="4"
              fill="none"
              pathLength="1"
              strokeDasharray="1"
              style={{
                strokeDashoffset: isInView ? 0 : 1,
                transition:
                  "stroke-dashoffset 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                filter: "drop-shadow(0 0 8px rgba(240, 125, 42, 0.4))",
              }}
            />
          </svg>

          {/* Timeline Nodes */}
          {processSteps.map((step, idx) => {
            const pos = nodePositions[idx];
            return (
              <div
                key={idx}
                className="absolute w-24 h-24 -ml-12 -mt-12 rounded-full flex flex-col items-center justify-center z-10 group"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                {/* Visual Node */}
                <div
                  className={`relative w-20 h-20 rounded-full border-4 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(240,125,42,0.4)] bg-white
                    ${isInView ? "border-secondary text-secondary shadow-[0_0_30px_rgba(240,125,42,0.3)] scale-110" : "border-gray-200 text-gray-400 scale-90"}`}
                  style={{ transitionDelay: `${stepDelays[idx]}ms` }}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-colors duration-700 ${isInView ? "bg-secondary/10" : "bg-transparent"}`}
                  ></div>
                  {step.icon}
                </div>

                {/* Text Content */}
                <div
                  className={`absolute w-64 text-center transition-all duration-700 pointer-events-none 
                    ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    ${pos.y === 35 ? "-top-32" : "top-28"}`}
                  style={{ transitionDelay: `${stepDelays[idx] + 200}ms` }}
                >
                  <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2">
                    Step 0{idx + 1}
                  </p>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-accent font-light leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline (Hidden on Desktop) */}
        <div className="lg:hidden relative py-10 px-4 mb-20">
          {/* Base vertical line */}
          <div className="absolute left-[44px] top-12 bottom-12 w-1 bg-gray-200 rounded-full" />

          {/* Animated vertical line */}
          <div
            className="absolute left-[44px] top-12 w-1 bg-secondary rounded-full"
            style={{
              height: isInView ? "calc(100% - 96px)" : "0%",
              transition: "height 2.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          />

          <div className="flex flex-col gap-14 relative z-10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <div
                  className={`shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-sm relative bg-white
                    ${isInView ? "border-secondary text-secondary shadow-[0_0_20px_rgba(240,125,42,0.3)] scale-110" : "border-gray-200 text-gray-400 scale-90"}`}
                  style={{ transitionDelay: `${stepDelays[idx]}ms` }}
                >
                  <div
                    className={`absolute inset-0 rounded-full transition-colors duration-700 ${isInView ? "bg-secondary/10" : "bg-transparent"}`}
                  ></div>
                  {step.icon}
                </div>

                <div
                  className={`pt-1 transition-all duration-700 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  style={{ transitionDelay: `${stepDelays[idx] + 200}ms` }}
                >
                  <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-1">
                    Step 0{idx + 1}
                  </p>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-accent font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <UrgencyCTA />
        </div>
      </div>
    </section>
  );
};

export default Process;
