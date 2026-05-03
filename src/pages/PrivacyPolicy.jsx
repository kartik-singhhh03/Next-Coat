import { useEffect } from "react";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  // Ensure smooth scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Privacy Policy | NextCoat Painting"
        description="Privacy Policy for NextCoat Painting. Learn how we collect, use, and protect your personal information."
      />

      {/* HERO SECTION */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-primary overflow-hidden">
        {/* Dark Premium Overlay Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/95 z-10" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary text-sm font-semibold tracking-wider uppercase mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-gray-700 space-y-8 text-lg font-light leading-relaxed">
          <p>
            Welcome to NextCoat Painting ("we," "our," or "us"). We are
            committed to protecting your personal information and your right to
            privacy. If you have any questions or concerns about this privacy
            notice, or our practices with regards to your personal information,
            please contact us.
          </p>
          <p>
            When you visit our website{" "}
            <a
              href="https://www.gonextcoat.com"
              className="text-secondary hover:underline font-medium"
            >
              https://www.gonextcoat.com
            </a>{" "}
            (the "Website"), and more generally, use any of our services (the
            "Services", which include the Website), we appreciate that you are
            trusting us with your personal information. We take your privacy
            very seriously. In this privacy notice, we seek to explain to you in
            the clearest way possible what information we collect, how we use
            it, and what rights you have in relation to it.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading text-primary mt-12 mb-6">
            1. Information We Collect
          </h2>
          <p>
            We collect personal information that you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our products and Services, when you participate in activities on the
            Website, or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of
            your interactions with us and the Website, the choices you make, and
            the products and features you use. The personal information we
            collect may include the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information Provided by You.</strong> We collect
              names; phone numbers; email addresses; mailing addresses; job
              titles; contact preferences; and other similar information.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-heading text-primary mt-12 mb-6">
            2. How We Use Your Information
          </h2>
          <p>
            We use personal information collected via our Website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>
              To post testimonials. We post testimonials on our Website that may
              contain personal information. Prior to posting a testimonial, we
              will obtain your consent to use your name and the content of the
              testimonial.
            </li>
            <li>
              Request feedback. We may use your information to request feedback
              and to contact you about your use of our Website.
            </li>
            <li>
              To protect our Services. We may use your information as part of
              our efforts to keep our Website safe and secure (for example, for
              fraud monitoring and prevention).
            </li>
            <li>
              To respond to user inquiries/offer support to users. We may use
              your information to respond to your inquiries and solve any
              potential issues you might have with the use of our Services.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-heading text-primary mt-12 mb-6">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            Our website may use cookies, Meta/Facebook Pixel, Google Analytics,
            Google Tag Manager, and Google Ads conversion tracking tools to
            understand visitor behavior, improve website performance, and
            measure advertising effectiveness.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading text-primary mt-12 mb-6">
            4. Third-Party Advertising and Analytics
          </h2>
          <p>
            We may share limited website interaction data with trusted
            third-party advertising and analytics providers for remarketing,
            conversion measurement, and campaign optimization purposes.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading text-primary mt-12 mb-6">
            5. Consent to Contact
          </h2>
          <p>
            By submitting any estimate request or contact form through this
            website or our advertising campaigns, you consent to being contacted
            by NextCoat Painting regarding your inquiry.
          </p>

          <h2 className="text-2xl md:text-3xl font-heading text-primary mt-12 mb-6">
            6. Contact Us
          </h2>
          <p>
            If you have questions or comments about this notice, you may contact
            us by:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-medium text-primary">
            <li>
              Email:{" "}
              <a
                href="mailto:info@gonextcoat.com"
                className="text-secondary hover:underline"
              >
                info@gonextcoat.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:2403426095"
                className="text-secondary hover:underline"
              >
                (240) 342-6095
              </a>
            </li>
            <li>
              Website:{" "}
              <a
                href="https://www.gonextcoat.com"
                className="text-secondary hover:underline"
              >
                https://www.gonextcoat.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
