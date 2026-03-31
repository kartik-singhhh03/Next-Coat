import About from "../components/home-page/About";
import Gallery from "../components/home-page/Gallery";
import Hero from "../components/home-page/Hero";
import MarqueeStrip from "../components/home-page/MarqueeStrip";
import Process from "../components/home-page/Process";
import Services from "../components/home-page/Services";
import Values from "../components/home-page/Values";
import TrustBar from "../components/home-page/TrustBar";
import SEO from "../components/SEO";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "NextCoat Painting",
    image: "https://gonextcoat.com/logo.svg",
    url: "https://gonextcoat.com/",
    telephone: "443-424-6019",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Howard County",
      addressRegion: "MD",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.2393,
      longitude: -76.8394,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [],
  };

  return (
    <div>
      <SEO
        title="Howard County Painters | Interior & Exterior Painting MD"
        description="NextCoat Painting provides premium interior painting, exterior painting, and cabinet painting services in Howard County, Maryland."
        keywords="Howard County painters, Interior painting MD, Exterior painting Maryland, Cabinet painting services"
        schema={localBusinessSchema}
      />
      {/* Hero */}
      <Hero />

      {/* Marquee Settings */}
      <MarqueeStrip />

      {/* Trust & Credibility */}
      <TrustBar />

      {/* About Us */}
      <About />

      {/* Our Values */}
      <Values />

      {/* Services Preview */}
      <Services />

      {/* Process Preview */}
      <Process />

      {/* Gallery Preview */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section id="cta" className="py-24 bg-primary relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pattern-diagonal-lines"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-body mb-10 max-w-2xl mx-auto">
            Experience the NextCoat difference. Schedule your complimentary
            consultation and precision quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@nextcoatpainting.com"
              className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-full font-body font-semibold hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-secondary/30"
            >
              Request a Quote
            </a>
            <a
              href="tel:443-424-6019"
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-body font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              Call 443-424-6019
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
