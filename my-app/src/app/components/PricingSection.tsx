import React from "react";
import PricingCard from "./PricingCard";

const cardsContent = [
  {
    planName: "Basic",
    targetAudience: "For students getting started",
    price: "$0",
    paymentCycle: "per month",
    features: [
      "No annual fee",
      "1% cashback on all purchases",
      "Virtual card access",
    ],
    buttonLabel: "Get Started",
  },
  {
    planName: "Pro",
    targetAudience: "For young professionals",
    price: "$5",
    paymentCycle: "per month",
    features: [
      "All Basic features",
      "2% cashback on all purchases",
      "Travel insurance",
      "Priority customer support",
    ],
    buttonLabel: "Upgrade to Pro",
  },
  {
    planName: "Premium",
    targetAudience: "For power users",
    price: "$10",
    paymentCycle: "per month",
    features: [
      "All Pro features",
      "3% cashback on all purchases",
      "Concierge service",
      "Extend warranty on purchases",
    ],
    buttonLabel: "Go Premium",
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300">
      <h1>Simple, Transparent Pricing</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {cardsContent.map((card, index) => (
          <PricingCard
            key={index}
            planName={card.planName}
            targetAudience={card.targetAudience}
            price={card.price}
            paymentCycle={card.paymentCycle}
            features={card.features}
            buttonLabel={card.buttonLabel}
          />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
