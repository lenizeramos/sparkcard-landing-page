import React from "react";
import Card from "./Card";
import H2Title from "./H2Title";

interface howItWorksSectionProps {
  title: string;
  cardsContent: Array<{ image: string; title: string; description: string }>;
}

const HowItWorksSection: React.FC<howItWorksSectionProps> = ({
  title,
  cardsContent,
}) => {
  return (
    <section
      id="how-it-works"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-green-100"
    >
      <H2Title titleLabel={title} />
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
