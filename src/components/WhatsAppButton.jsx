export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 z-50 flex items-center group">
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-2 bg-white text-primary text-sm font-semibold rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap before:content-[''] before:absolute before:top-1/2 before:-right-2 before:-translate-y-1/2 before:border-y-8 before:border-y-transparent before:border-l-8 before:border-l-white">
        Chat with us
      </div>

      <a
        href="https://wa.me/14434246019"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-secondary text-white rounded-full shadow-lg shadow-secondary/40 hover:scale-110 hover:shadow-[0_0_20px_rgba(240,125,42,0.8)] transition-all duration-300 focus:outline-none"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Ripple / Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75 [animation-duration:2s]"></span>
        <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75 [animation-duration:2s] [animation-delay:0.6s]"></span>
        <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-75 [animation-duration:2s] [animation-delay:1.2s]"></span>

        {/* WhatsApp Icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 md:w-9 md:h-9 relative z-10"
        >
          <path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.123.553 4.122 1.528 5.86L.182 23.366l5.637-1.478A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm0 22.002c-1.808 0-3.56-.465-5.122-1.341l-.367-.217-3.805.998.997-3.71-.238-.378a9.947 9.947 0 01-1.464-5.352c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.45-7.443c-.298-.15-1.77-.874-2.046-.973-.275-.1-.475-.15-.675.15-.2.299-.773.974-.948 1.173-.175.2-.35.225-.65.075-.298-.15-1.263-.466-2.406-1.485-.89-.792-1.488-1.773-1.663-2.073-.175-.3-.018-.462.131-.611.135-.134.3-.349.449-.524.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.675-1.623-.925-2.222-.243-.585-.487-.506-.675-.515-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.898 1.225 3.098.15.2 2.112 3.224 5.112 4.524 2.05.889 2.56.924 3.033.799.525-.139 1.77-.724 2.02-1.424.25-.7.25-1.3.175-1.424-.074-.125-.274-.199-.574-.349z" />
        </svg>
      </a>
    </div>
  );
}
