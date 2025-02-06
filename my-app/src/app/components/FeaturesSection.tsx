import React from "react";
import Card from "./Card";
import H2Title from "./H2Title";

const cardsContent = [
  {
    image: "/images/banknote.svg",
    title: "Smart Rewards",
    description: "Earn cashback on everyday spending",
  },
  {
    image: "/images/lock.svg",
    title: "Transparent Fees",
    description: "No annual fees, no hidden charges",
  },
  {
    image: "/images/book-open.svg",
    title: "Financial Education",
    description: "Access to tips and tools for managing money",
  },
  {
    image: "/images/piggy-bank.svg",
    title: "Build Credit",
    description: "Report to credit bureaus to help build credit history",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section
      id="features"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-pink-300"
    >
      <H2Title titleLabel={"Features & Benefits"} />
      <div className="flex flex-wrap gap-4 justify-center">
        {cardsContent.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
