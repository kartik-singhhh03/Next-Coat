import SEO from "../components/SEO";
import ProcessComponent from "../components/home-page/Process";
import TrustBar from "../components/home-page/TrustBar";
import Testimonials from "../components/Testimonials";

export default function Process() {
  return (
    <div>
      <SEO
        title="Our Painting Process | NextCoat Painters MD"
        description="Learn our professional painting process. NextCoat provides flawless exterior painting Maryland and interior painting MD solutions."
        keywords="Howard County painters, Interior painting MD, Exterior painting Maryland, painting process"
      />
      <div className="pt-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center mb-12 reveal-on-scroll">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
            Flawless Execution. Every Time.
          </h1>
          <p className="text-lg text-accent font-light max-w-2xl mx-auto">
            Discover the exact steps we take to ensure your home receives the
            premium treatment it deserves.
          </p>
        </div>
      </div>
      <TrustBar />
      <ProcessComponent />
      <Testimonials />
    </div>
  );
}
