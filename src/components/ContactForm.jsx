import { useState } from "react";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    zipCode: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We have received your request.");
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 font-body relative overflow-hidden">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-[#494C4E] uppercase tracking-wider">
            Step {step} of 3
          </span>
          <span className="text-xs font-bold text-[#F07D2A] uppercase tracking-wider">
            {step === 1 && "Project Needs"}
            {step === 2 && "Location"}
            {step === 3 && "Contact Info"}
          </span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F07D2A] transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative min-h-[300px] flex flex-col"
      >
        {/* Step 1 */}
        {step === 1 && (
          <div className="flex-grow animate-fade-in flex flex-col justify-center">
            <h3 className="text-2xl font-heading font-bold text-[#0C2C4C] mb-6 text-center">
              What do you need painted?
            </h3>
            <div className="space-y-4">
              {["Interior", "Exterior", "Both"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    updateField("projectType", option);
                    setTimeout(handleNext, 300);
                  }}
                  className={`w-full p-4 rounded-xl border-2 text-left font-semibold transition-all duration-300 flex items-center justify-between ${
                    formData.projectType === option
                      ? "border-[#F07D2A] bg-[#F07D2A]/5 text-[#0C2C4C]"
                      : "border-gray-200 hover:border-[#0C2C4C] text-[#494C4E] hover:text-[#0C2C4C]"
                  }`}
                >
                  <span className="text-lg">{option}</span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.projectType === option ? "border-[#F07D2A]" : "border-gray-300"}`}
                  >
                    {formData.projectType === option && (
                      <div className="w-3 h-3 rounded-full bg-[#F07D2A]" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex-grow animate-fade-in flex flex-col justify-center">
            <h3 className="text-2xl font-heading font-bold text-[#0C2C4C] mb-6 text-center">
              Enter your Zip Code
            </h3>
            <p className="text-center text-[#494C4E] mb-8">
              We use this to verify we serve your area and connect you with the
              right team.
            </p>
            <div className="max-w-xs mx-auto w-full">
              <input
                type="text"
                maxLength="5"
                placeholder="e.g. 20759"
                value={formData.zipCode}
                onChange={(e) =>
                  updateField("zipCode", e.target.value.replace(/[^0-9]/g, ""))
                }
                className="w-full text-center text-3xl font-heading p-4 border-b-2 border-gray-300 focus:border-[#F07D2A] focus:outline-none bg-transparent transition-colors mb-8"
                autoFocus
              />
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 rounded-full font-semibold text-[#494C4E] hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={formData.zipCode.length < 5}
                  className="flex-1 bg-[#0C2C4C] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex-grow animate-fade-in flex flex-col justify-center">
            <h3 className="text-2xl font-heading font-bold text-[#0C2C4C] mb-6 text-center">
              Where should we send your quote?
            </h3>
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-sm font-semibold text-[#494C4E] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className="w-full p-4 rounded-lg border border-gray-300 focus:border-[#F07D2A] focus:ring-2 focus:ring-[#F07D2A]/20 focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#494C4E] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:border-[#F07D2A] focus:ring-2 focus:ring-[#F07D2A]/20 focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#494C4E] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full p-4 rounded-lg border border-gray-300 focus:border-[#F07D2A] focus:ring-2 focus:ring-[#F07D2A]/20 focus:outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-4 mt-auto">
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-4 rounded-full font-semibold text-[#494C4E] hover:bg-gray-100 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#F07D2A] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0C2C4C] transition-colors shadow-lg shadow-[#F07D2A]/30 flex items-center justify-center gap-2 group"
              >
                Get My Free Estimate
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
