import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0C2C4C] pt-20 pb-8 border-t border-[rgba(255,255,255,0.08)] font-body relative overflow-hidden text-gray-300">
      {/* Background Paint Splashes */}
      <div className="absolute -top-[50px] -left-[50px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(240,125,42,0.25),transparent_70%)] blur-[40px] z-0 pointer-events-none"></div>
      <div className="absolute -bottom-[60px] -right-[60px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)] blur-[50px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 relative z-10">
        {/* Brand & Mission (Left Section) */}
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="inline-block mb-6">
            <img
              src="/logo.svg"
              alt="NextCoat Painting"
              className="h-10 md:h-12 w-auto"
              style={{ filter: "drop-shadow(0 4px 12px rgba(240,125,42,0.2))" }}
            />
          </Link>
          <p className="text-[15px] leading-relaxed max-w-sm text-gray-300/90 mb-6">
            Elevating Maryland living spaces with precision, durability, and a
            commitment to excellence. We donâ€™t just paint homes â€” we craft
            environments.
          </p>
          <p className="text-[15px] font-bold text-[#F07D2A] tracking-wider mb-8">
            MHIC #05-167608
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-white hover:bg-[#F07D2A] hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-white hover:bg-[#F07D2A] hover:text-white hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links (Center Section) */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-white font-heading font-bold mb-8 text-lg tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-4 text-[15px]">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="inline-block hover:text-[#F07D2A] hover:translate-x-[3px] transition-all duration-300 ease-in-out"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info (Right Section) */}
        <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-white font-heading font-bold mb-8 text-lg tracking-wide">
            Get in Touch
          </h4>
          <ul className="space-y-6 text-[15px]">
            <li className="flex justify-center md:justify-start">
              <a
                href="tel:443-424-6019"
                className="flex items-center gap-4 hover:text-[#F07D2A] hover:translate-x-[3px] transition-all duration-300 ease-in-out group"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F07D2A]/10 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 text-[#F07D2A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <span>443-424-6019</span>
              </a>
            </li>
            <li className="flex justify-center md:justify-start">
              <a
                href="mailto:contact@nextcoatpainting.com"
                className="flex flex-col md:flex-row items-center md:items-start gap-4 hover:text-[#F07D2A] hover:translate-x-[3px] transition-all duration-300 ease-in-out group break-all md:break-normal"
              >
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F07D2A]/10 transition-colors duration-300 mt-1 md:mt-0">
                  <svg
                    className="w-4 h-4 text-[#F07D2A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <span className="md:mt-2">contact@nextcoatpainting.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col items-center justify-center text-center relative z-10">
        <p className="text-white/40 text-[13px] tracking-wide">
          &copy; {new Date().getFullYear()} NextCoat Painting. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
