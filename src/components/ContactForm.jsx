import { useState } from "react";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState(""); // "" | "loading" | "success" | "error"
  const [formData, setFormData] = useState({
    projectType: "",
    zipCode: "",
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    message: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xgoplvgq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone
            ? `${formData.countryCode} ${formData.phone}`
            : "Not provided",
          message: formData.message,
          "Project Type": formData.projectType,
          "Zip Code": formData.zipCode,
          _subject: "New Painting Inquiry - NextCoat",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          projectType: "",
          zipCode: "",
          fullName: "",
          email: "",
          countryCode: "+1",
          phone: "",
          message: "",
        });
        setStep(1);
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
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

      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center font-semibold animate-fade-in">
          Message sent successfully! We will get back to you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center font-semibold animate-fade-in">
          Something went wrong. Please try again.
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="relative min-h-[300px] flex flex-col"
      >
        <input type="text" name="_gotcha" style={{ display: "none" }} />
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
                  name="name"
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
                    name="email"
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
                  <div className="flex">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        updateField("countryCode", e.target.value)
                      }
                      className="p-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 focus:border-[#F07D2A] focus:ring-2 focus:ring-[#F07D2A]/20 focus:outline-none transition-all text-sm w-24 z-10"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+81">�🇵 +81</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full p-4 rounded-r-lg border border-gray-300 focus:border-[#F07D2A] focus:ring-2 focus:ring-[#F07D2A]/20 focus:outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#494C4E] mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows="3"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:border-[#F07D2A] focus:ring-2 focus:ring-[#F07D2A]/20 focus:outline-none transition-all resize-none"
                  placeholder="Tell us more about your project..."
                />
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
                disabled={status === "loading"}
                className="flex-1 bg-[#F07D2A] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0C2C4C] transition-colors shadow-lg shadow-[#F07D2A]/30 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Get My Free Estimate"}
                {status !== "loading" && (
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
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
