export default function TrustBar() {
  return (
    <section className="bg-[#f9f9f9] border-b border-gray-200 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          
          {/* Trust Item 1 */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0">
            <div className="flex items-center gap-1 mb-2 text-secondary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-primary font-heading font-semibold text-lg md:text-xl">Google 5-Star Rated</p>
            <p className="text-body text-sm mt-1 text-[#494C4E]">Based on genuine client reviews</p>
          </div>

          {/* Trust Item 2 */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0">
            <svg className="w-8 h-8 text-secondary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-primary font-heading font-semibold text-lg md:text-xl">Licensed & Fully Insured</p>
            <p className="text-body text-sm mt-1 text-[#494C4E]">Peace of mind for your property</p>
          </div>

          {/* Trust Item 3 */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-4 md:py-0">
            <svg className="w-8 h-8 text-secondary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <p className="text-primary font-heading font-semibold text-lg md:text-xl">Premium Paints</p>
            <p className="text-body text-sm mt-1 text-[#494C4E]">Powered by Sherwin-Williams</p>
          </div>

        </div>
      </div>
    </section>
  );
}
