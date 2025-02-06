import React from "react";
import TestimonialCard from "./TestimonialCard";

const cardsContent = [
  {
    profileImage: "/images/image1.jpg",
    name: "Sarah L.",
    userType: "SparkCard User",
    testimonial:
      "'SparkCard helped mebuild my credit score while I was in uni. Brillant!'",
  },
  {
    profileImage: "/images/image1.jpg",
    name: "Tom K.",
    userType: "SparkCard User",
    testimonial:
      "'The cashback rewards are great, and I love how easy it is to track my spending'",
  },
  {
    profileImage: "/images/image1.jpg",
    name: "Emma R.",
    userType: "SparkCard User",
    testimonial:
      "'Finally, a card that doesn't make me feel like I'm being taken advantage of. Thanks, SparkCard!'",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300">
      <h1>What Our Users Say</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {cardsContent.map((card, index) => (
          <TestimonialCard
            key={index}
            profileImage={card.profileImage}
            name={card.name}
            userType={card.userType}
            testimonial={card.testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
