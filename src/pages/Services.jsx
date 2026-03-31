import SEO from "../components/SEO";
import ServicesComponent from "../components/home-page/Services";
import TrustBar from "../components/home-page/TrustBar";
import Testimonials from "../components/Testimonials";

export default function Services() {
  return (
    <div className="pt-24 bg-gray-50">
      <SEO
        title="Our Services | Cabinet & Interior Painting MD"
        description="Premium interior painting, exterior painting, and cabinet painting services in Howard County. Quality workmanship and professional process."
        keywords="Howard County painters, Interior painting MD, Exterior painting Maryland, Cabinet painting services"
      />

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-4 mt-8 reveal-on-scroll">
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6">
          Premium Painting Services
        </h1>
        <p className="text-lg text-accent font-light max-w-2xl mx-auto">
          We offer comprehensive painting solutions designed to elevate the
          aesthetic and value of your property.
        </p>
      </div>

      <TrustBar />
      <ServicesComponent />
      <Testimonials />
    </div>
  );
}
