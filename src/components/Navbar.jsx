import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  // Logic: Transparent only on home page when NOT scrolled.
  // Everywhere else (or when scrolled), it should be solid white for visibility.
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isTransparent
          ? "bg-transparent py-4 md:py-6"
          : "bg-white/95 backdrop-blur-md shadow-md py-3 md:py-4"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:max-w-7xl xl:mx-auto flex justify-between items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50 group flex-shrink-0">
          <img
            src="/logo.svg"
            alt="NextCoat"
            className="w-auto h-8 sm:h-9 md:h-10 lg:h-12 mr-2 object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.1))",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-grow justify-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `text-[14px] uppercase tracking-wider md:text-base lg:text-[15px] font-heading transition-colors duration-300 relative group ${
                  isActive
                    ? "text-[#F07D2A] font-bold"
                    : isTransparent
                      ? "text-white hover:text-white/80 font-medium"
                      : "text-[#0C2C4C] hover:text-[#F07D2A] font-medium"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#F07D2A] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block flex-shrink-0 z-50">
          <Link
            to="/contact"
            className="inline-block bg-[#F07D2A] text-white font-body font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
          >
            Get A Free Estimate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden z-50 focus:outline-none transition-colors duration-300 ml-auto flex-shrink-0 ${
            isOpen
              ? "text-white"
              : isTransparent
                ? "text-white drop-shadow-md"
                : "text-[#0C2C4C]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0C2C4C]/95 backdrop-blur-lg z-40 transition-all duration-400 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center h-full w-full px-6 overflow-y-auto py-20">
          <nav className="flex flex-col items-center justify-center gap-8 w-full text-center mt-auto mb-auto">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-2xl sm:text-3xl font-heading tracking-wider transition-all duration-300 transform ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  } ${
                    isActive
                      ? "text-[#F07D2A]"
                      : "text-white hover:text-[#F07D2A] hover:scale-105"
                  }`
                }
                style={{
                  transitionDelay: `${isOpen ? index * 100 + 100 : 0}ms`,
                }}
              >
                {link.label}
              </NavLink>
            ))}
            <div
              className={`w-full mt-6 flex justify-center transition-all duration-500 transform ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${isOpen ? navLinks.length * 100 + 200 : 0}ms`,
              }}
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full max-w-[320px] bg-[#F07D2A] text-white font-body font-semibold text-lg px-8 py-4 rounded-full shadow-lg shadow-[#F07D2A]/20 hover:bg-[#0C2C4C] hover:shadow-none transition-all duration-300 flex items-center justify-center min-h-[56px]"
              >
                Get A Free Estimate
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
