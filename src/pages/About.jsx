import { Link } from "react-router-dom";
import ana from "/images/ana-img.webp";
import {
  CheckCircle,
  ShieldCheck,
  Clock,
  Medal,
  Users,
  Star,
} from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="About Us | Trusted Howard County Painters"
        description="Learn about NextCoat Painting, the premier choice for interior painting MD and exterior painting Maryland. Discover our process-driven excellence."
        keywords="Howard County painters, Interior painting MD, Exterior painting Maryland, Cabinet painting services, About NextCoat"
      />
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary overflow-hidden">
        {/* Dark Premium Overlay Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80 z-10" />
          <img
            src="/images/gallery/gallery-2.webp"
            alt="Beautifully painted home exterior"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary text-sm font-semibold tracking-wider uppercase mb-6 reveal-on-scroll">
            Our Story
          </span>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6 reveal-on-scroll"
            style={{ animationDelay: "100ms" }}
          >
            About NextCoat Painting
          </h1>
          <p
            className="text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed reveal-on-scroll"
            style={{ animationDelay: "200ms" }}
          >
            Elevating the standard of residential painting through
            uncompromising quality, clear communication, and financial
            integrity.
          </p>
        </div>
      </section>

      {/* 2. ANA SECTION (Refined from Component) */}
      <section className="py-24 md:py-32 bg-[#F9FAFB] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
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

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="w-full lg:w-5/12 shrink-0 h-auto rounded-[24px] overflow-hidden shadow-2xl relative shadow-primary/10 group bg-white/50 p-4 md:p-0">
              <img
                src={ana}
                alt="Ana G. Ricks - Principal - NextCoat Painting"
                loading="lazy"
                className="w-full h-auto max-h-[80vh] object-contain object-center transform group-hover:scale-[1.02] transition-transform duration-[1.5s] rounded-[24px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none rounded-[24px]" />
            </div>

            {/* Bio Glass Card */}
            <div className="w-full lg:w-7/12 flex">
              <div className="glass rounded-[24px] p-8 md:p-12 shadow-xl border border-white flex flex-col justify-center relative backdrop-blur-xl bg-white/80 overflow-hidden hover:shadow-[0_15px_30px_-10px_rgba(12,44,76,0.1)] transition-all duration-500">
                <span className="absolute -top-6 -right-6 text-[180px] text-primary/[0.03] font-heading leading-none select-none">
                  "
                </span>

                <div className="space-y-6 text-accent text-base md:text-lg leading-relaxed font-light mb-10 relative z-10">
                  <p>
                    As a homeowner, Ana knows exactly what it feels like to be
                    on the other side of a renovation. She and her husband have
                    lived through the common frustrations of the industry—the
                    contractors who don&apos;t show up on time, the broken
                    commitments, and the "disappearing acts" that make home
                    improvement more stressful than it should be.
                  </p>
                  <p>
                    At NextCoat, Ana&apos;s mission is to ensure you never have
                    that experience. By applying her extensive background in
                    community banking—where meticulous process, financial
                    integrity, and clear communication are the gold standard—she
                    manages every project with absolute precision. She believes
                    that a flawless result starts with a professional
                    relationship.
                  </p>
                </div>

                <div className="relative z-10 border-l-4 border-secondary pl-6 md:pl-8 py-2">
                  <h3 className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                    Her Promise to You
                  </h3>
                  <blockquote className="text-primary text-lg md:text-xl leading-relaxed italic font-heading">
                    "I&apos;m here to take the logistics off your plate. We
                    honor the trust you place in us by treating your home with
                    the exact same care and reliability we expect in our own.
                    Professionalism isn&apos;t just a buzzword for us; it&apos;s
                    our daily standard."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE NEXTCOAT DIFFERENCE */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              The NextCoat Difference
            </h2>
            <p className="text-lg text-accent font-light leading-relaxed">
              We stand apart in an industry known for unpredictability. Here is
              why homeowners trust NextCoat with their most valuable asset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="card bg-[#F9FAFB] p-10 rounded-2xl border border-gray-100 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-4">
                Financial Integrity
              </h3>
              <p className="text-accent font-light leading-relaxed">
                With a background in banking, we run a tight ship. No surprise
                fees, transparent pricing models, and fully insured operations
                that protect you completely.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card bg-[#F9FAFB] p-10 rounded-2xl border border-gray-100 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-500">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-4">
                Process-Driven Excellence
              </h3>
              <p className="text-accent font-light leading-relaxed">
                We respect your time. From the initial consultation to the final
                site clean-up, every step is scheduled, communicated, and
                executed flawlessly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card bg-[#F9FAFB] p-10 rounded-2xl border border-gray-100 group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-500">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-4">
                A Local Legacy
              </h3>
              <p className="text-accent font-light leading-relaxed">
                We aren&apos;t just contractors; we are your neighbors. We build
                long-term relationships through stunning results and steadfast
                reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST / STATS SECTION */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Abstract pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Medal className="w-12 h-12 text-secondary mb-4 opacity-90" />
              <span className="text-3xl lg:text-4xl font-heading font-bold mb-2 text-white">
                Locally Owned
              </span>
              <span className="text-gray-300 font-light tracking-wide uppercase text-sm mt-2">
                & Operated In Area
              </span>
            </div>

            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Users className="w-12 h-12 text-secondary mb-4 opacity-90" />
              <span className="text-3xl lg:text-4xl font-heading font-bold mb-2 text-white">
                Licensed
              </span>
              <span className="text-gray-300 font-light tracking-wide uppercase text-sm mt-2">
                & Fully Insured
              </span>
            </div>

            <div className="flex flex-col items-center pt-8 md:pt-0">
              <Star className="w-12 h-12 text-secondary mb-4 opacity-90" />
              <span className="text-3xl lg:text-4xl font-heading font-bold mb-2 text-white">
                Free Estimates
              </span>
              <span className="text-gray-300 font-light tracking-wide uppercase text-sm mt-2">
                Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 md:py-32 bg-[#F9FAFB] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg text-accent font-light mb-10 max-w-xl mx-auto">
            Experience the NextCoat difference yourself. Let&apos;s discuss your
            vision and provide a detailed, no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 bg-secondary text-white font-medium rounded-full shadow-lg shadow-secondary/30 hover:bg-primary hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+12403426095"
              className="w-full sm:w-auto px-10 py-4 bg-white text-primary border border-gray-200 font-medium rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
          <p className="text-secondary font-semibold text-sm tracking-wide mt-6 animate-pulse">
            ?? Limited slots available this month
          </p>
        </div>
      </section>
    </div>
  );
}
