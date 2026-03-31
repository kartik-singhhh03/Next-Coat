import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 flex flex-col">
      <SEO
        title="Contact Us | Professional Painters MD"
        description="Ready to transform your home? Contact NextCoat Painting for a free estimate on interior, exterior, and cabinet painting in Maryland."
        keywords="Howard County painters, Interior painting MD, Exterior painting Maryland, Cabinet painting services, free painting estimate"
      />
      <section className="flex-grow flex items-center justify-center p-6 reveal-on-scroll">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
              Get Your Free Estimate
            </h1>
            <p className="text-lg text-accent font-body max-w-2xl mx-auto">
              Tell us a little bit about your project, and our team will get
              back to you with a detailed, no-obligation quote.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
