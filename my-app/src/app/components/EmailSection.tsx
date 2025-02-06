import React from "react";

const sectionContent = {
  h1: "Ready to Start Your Financial Journey",
  text: "Join thousands of Australians building their credit and earning rewards with SparkCard.",
  placeholder: "Enter your email",
  buttonLabel: "Get Started",
  span: "By signing up, you agree to our Terms of Service and Privacy Policy",
};
const EmailSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300">
      <h1>{sectionContent.h1}</h1>
      <p>{sectionContent.text}</p>
      <input
        type="email"
        name="email"
        id="email"
        placeholder={sectionContent.placeholder}
      />
      <button className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
        {sectionContent.buttonLabel}
      </button>
      <span>{sectionContent.span}</span>
    </div>
  );
};

export default EmailSection;
