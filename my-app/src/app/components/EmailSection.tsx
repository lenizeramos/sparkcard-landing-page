import React from "react";
import Button from "./Button";

const sectionContent = {
  h2: "Ready to Start Your Financial Journey",
  text: "Join thousands of Australians building their credit and earning rewards with SparkCard.",
  placeholder: "Enter your email",
  buttonLabel: "Get Started",
  span: "By signing up, you agree to our Terms of Service and Privacy Policy",
};
const EmailSection: React.FC = () => {
  return (
    <section
      id="email"
      className="h-[75vh] w-full flex-1 flex flex-col justify-center items-center bg-gray-300"
    >
      <h2 className="text-4xl font-bold font-mono text-center mb-6">
        {sectionContent.h2}
      </h2>
      <p>{sectionContent.text}</p>
      <input
        type="email"
        name="emailInput"
        id="emailInput"
        placeholder={sectionContent.placeholder}
      />
      <div>
        <Button buttonLabel={sectionContent.buttonLabel} />
      </div>
      <span>{sectionContent.span}</span>
    </section>
  );
};

export default EmailSection;
