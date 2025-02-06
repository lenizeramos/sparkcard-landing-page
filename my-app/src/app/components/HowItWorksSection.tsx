import React from "react";
import Card from "./Card";
import H2Title from "./H2Title";

const cardsContent = [
  {
    image: "/images/credit-card.svg",
    title: "Sign Up",
    description: "Apply online in minutes",
  },
  {
    image: "/images/wallet.svg",
    title: "Get Your Card",
    description: "Instant virtual card access",
  },
  {
    image: "/images/sparkles.svg",
    title: "Start Earning Rewards",
    description: "Cashback on everyday spending",
  },
  {
    image: "/images/trending-up.svg",
    title: "Build Credit",
    description: "Improve your credit score over time",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300"
    >
      <H2Title titleLabel={"How It Works"} />
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

export default HowItWorksSection;
