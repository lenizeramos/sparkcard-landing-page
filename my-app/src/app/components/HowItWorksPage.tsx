import React from "react";
import Card from "./Card";

const cardsComponent = [
  {
    image: "/images/image1.jpg",
    title: "Title 1",
    description: "Description 1",
  },
  {
    image: "/images/image2.jpg",
    title: "Title 2",
    description: "Description 2",
  },
];

const HowItWorksPage: React.FC = () => {
  return (
    <>
    <h1></h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {cardsComponent.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </>
  );
};

export default HowItWorksPage;
