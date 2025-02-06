import React from "react";
import Button from "./Button";

const sectionContent = {
  title: "Build Your Credit and Earn Rewards, Hassle-Free",
  description:
    "The Australian card for students and young adults: no hidden fees, real rewards.",
  buttonLabel: "Get Started",
};
const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100"
    >

      <h1 className="text-6xl font-bold font-mono text-center">{sectionContent.title}</h1>
      <p className="mb-4 font-sans text-center">{sectionContent.description}</p>
      <Button buttonLabel={sectionContent.buttonLabel} />
    </section>
  );
};

export default HomeSection;
