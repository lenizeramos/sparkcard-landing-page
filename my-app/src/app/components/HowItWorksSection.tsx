import React from "react";
import Card from "./Card";

const cardsContent = [
  {
    image: "/images/image1.jpg",
    title: "Sign Up",
    description: "Apply online in minutes",
  },
  {
    image: "/images/image1.jpg",
    title: "Get Your Card",
    description: "Instant virtual card access",
  },
  {
    image: "/images/image1.jpg",
    title: "Start Earning Rewards",
    description: "Cashback on everyday spending",
  },
  {
    image: "/images/image1.jpg",
    title: "Build Credit",
    description: "Improve your credit score over time",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300">
      <h1>How It Works</h1>
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

export default HowItWorksSection;
