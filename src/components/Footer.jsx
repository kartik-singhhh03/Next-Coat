import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`pt-24 pb-8 relative overflow-hidden font-body transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        background: "#FAF8F5",
        backgroundImage: "linear-gradient(180deg, #FFFFFF 0%, #FAF8F5 100%)",
      }}
    >
      {/* Subtle Premium Texture */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at 10% 20%, rgba(255, 140, 0, 0.06), transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(171, 222, 230, 0.15), transparent 40%)
          `,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 relative z-10">
        {/* Brand & Mission (Left Section) */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="inline-block mb-8 group">
            <img
              src="/logo.svg"
              alt="NextCoat Painting"
              loading="lazy"
              className="h-12 md:h-14 w-auto group-hover:scale-[1.03] transition-transform duration-300 ease-out drop-shadow-sm"
            />
          </Link>
          <p
            className="text-[16px] max-w-sm mb-6 font-medium"
            style={{ color: "#5A6A7A", lineHeight: 1.7 }}
          >
            Elevating Maryland living spaces with precision, durability, and a
            commitment to excellence. We don’t just paint homes — we craft
            environments.
          </p>
          <p
            className="text-[16px] font-bold tracking-wide mb-8"
            style={{ color: "#FF8C00" }}
          >
            MHIC #05-167608
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out shadow-sm"
              style={{
                backgroundColor: "rgba(15, 42, 68, 0.05)",
                color: "#0F2A44",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FF8C00";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(15, 42, 68, 0.05)";
                e.currentTarget.style.color = "#0F2A44";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out shadow-sm"
              style={{
                backgroundColor: "rgba(15, 42, 68, 0.05)",
                color: "#0F2A44",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FF8C00";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(15, 42, 68, 0.05)";
                e.currentTarget.style.color = "#0F2A44";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links (Center Section) */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left md:pl-8">
          <h4
            className="font-heading mb-8 text-[18px]"
            style={{
              color: "#0F2A44",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Quick Links
          </h4>
          <ul
            className="space-y-4 text-[16px] font-medium"
            style={{ color: "#5A6A7A" }}
          >
            {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="inline-block transition-all duration-300 hover:text-[#FF8C00] hover:translate-x-1"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Services (Right Section) */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left md:pl-4">
          <h4
            className="font-heading mb-8 text-[18px]"
            style={{
              color: "#0F2A44",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Get in Touch
          </h4>

          <address
            className="not-italic space-y-4 text-[16px] mb-10 w-full font-medium"
            style={{ color: "#5A6A7A" }}
          >
            <p className="flex items-center justify-center md:justify-start gap-4 transition-all duration-300 group">
              <span className="text-gray-400 group-hover:text-[#FF8C00] transition-colors duration-300">
                <Phone size={20} />
              </span>
              <a
                href="tel:443-424-6019"
                className="group-hover:text-[#FF8C00] group-hover:translate-x-1 transition-all duration-300"
              >
                443-424-6019
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-4 transition-all duration-300 group mt-4">
              <span className="text-gray-400 group-hover:text-[#FF8C00] transition-colors duration-300">
                <Mail size={20} />
              </span>
              <a
                href="mailto:contact@nextcoatpainting.com"
                className="group-hover:text-[#FF8C00] group-hover:translate-x-1 transition-all duration-300 break-all md:break-normal"
              >
                contact@nextcoatpainting.com
              </a>
            </p>
          </address>

          <div style={{ color: "#5A6A7A" }} className="w-full">
            <p
              className="font-semibold mb-4 text-[16px]"
              style={{ color: "#0F2A44" }}
            >
              Services We Offer:
            </p>
            <ul className="space-y-3 text-[15px] font-medium">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-[#FF8C00]"></span>{" "}
                Interior Painting
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-[#FF8C00]"></span>{" "}
                Exterior Painting
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-[#FF8C00]"></span>{" "}
                Cabinet Painting
              </li>
            </ul>
            <p
              className="mt-8 text-[15px] italic font-medium leading-relaxed"
              style={{ color: "#0F2A44" }}
            >
              Proudly serving Howard County, MD and surrounding areas.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 mt-24 pt-8 flex flex-col items-center justify-center text-center relative z-10"
        style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
      >
        <p className="text-[15px] font-medium" style={{ color: "#5A6A7A" }}>
          © 2026 NextCoat Painting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
