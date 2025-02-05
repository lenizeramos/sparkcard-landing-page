import React from "react";
import Card from "./Card";

const cardsContent = [
  {
    image: "/images/image1.jpg",
    title: "Smart Rewards",
    description: "Earn cashback on everyday spending",
  },
  {
    image: "/images/image1.jpg",
    title: "Transparent Fees",
    description: "No annual fees, no hidden charges",
  },
  {
    image: "/images/image1.jpg",
    title: "Financial Education",
    description: "Access to tips and tools for managing money",
  },
  {
    image: "/images/image1.jpg",
    title: "Build Credit",
    description: "Report to credit bureaus to help build credit history",
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-pink-300">
      <h1>Features & Benefits</h1>
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
    </div>
  );
};

export default FeaturesPage;
