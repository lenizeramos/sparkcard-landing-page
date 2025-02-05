import React from "react";

const cardsContent = [
  {
    text: "Bank-level encryption",
  },
  {
    text: "Australian government guarantee for deposits",
  },
  {
    text: "24/7 fraud monitoring",
  },
  {
    text: "Instant card freeze via app",
  },
];

const SecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-green-300">
      <h1>Security & Trust</h1>
      <div>
        <p>
          At SparkCard, we take your security seriously. Our state-of-the-art
          systems ensure your money and data are always protected.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {cardsContent.map((card, index) => (
            <div key={index}>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4>XXXX</h4>
      </div>
    </div>
  );
};

export default SecurityPage;
