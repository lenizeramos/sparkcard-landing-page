import React from "react";
import Button from "./Button";
import Link from "next/link";

interface HomeSectionProps {
  title: string;
  description: string;
  buttonLabel: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  description,
  buttonLabel,
}) => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100"
    >
      <h1 className="text-6xl font-bold font-mono text-center mb-6">{title}</h1>
      <p className="mb-4 font-sans text-center">{description}</p>

      <Link href="#email">
        <Button buttonLabel={buttonLabel} />
      </Link>
    </section>
  );
};

export default HomeSection;
