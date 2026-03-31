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
          ? "bg-transparent py-6"
          : "bg-white/95 backdrop-blur-md shadow-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50 group">
          <img
            src="/logo.svg"
            alt="NextCoat"
            className="w-auto h-9 md:h-12 mr-2 object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{
              filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.1))",
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `text-base font-body font-medium transition-colors duration-300 relative group ${
                  isActive
                    ? "text-secondary"
                    : isTransparent
                      ? "text-white hover:text-white/80"
                      : "text-[#0C2C4C] hover:text-secondary"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] bg-secondary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-block bg-secondary text-white font-body font-semibold px-7 py-3 rounded-[12px] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            Get A Free Estimate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 focus:outline-none transition-colors duration-300 ${
            isOpen
              ? "text-white"
              : isTransparent
                ? "text-white"
                : "text-[#0C2C4C]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
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
              className="w-8 h-8"
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
        className={`fixed inset-0 bg-[#0C2C4C]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 w-full px-6 text-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-heading tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-secondary"
                    : "text-white hover:text-secondary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full max-w-[280px] bg-secondary text-white font-body font-semibold text-lg px-8 py-4 rounded-[12px] shadow-lg hover:brightness-110 transition-colors duration-300"
          >
            Get A Free Estimate
          </Link>
        </nav>
      </div>
    </header>
  );
}
