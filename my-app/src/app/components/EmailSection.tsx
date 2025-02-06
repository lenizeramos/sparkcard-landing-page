import React from "react";
import Button from "./Button";

const sectionContent = {
  h1: "Ready to Start Your Financial Journey",
  text: "Join thousands of Australians building their credit and earning rewards with SparkCard.",
  placeholder: "Enter your email",
  buttonLabel: "Get Started",
  span: "By signing up, you agree to our Terms of Service and Privacy Policy",
};
const EmailSection: React.FC = () => {
  return (
    <section id="email" className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-300">
      <h1>{sectionContent.h1}</h1>
      <p>{sectionContent.text}</p>
      <input
        type="email"
        name="emailInput"
        id="emailInput"
        placeholder={sectionContent.placeholder}
      />
      <Button buttonLabel={sectionContent.buttonLabel}/>
      <span>{sectionContent.span}</span>
    </section>
  );
};

export default EmailSection;
