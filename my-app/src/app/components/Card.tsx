import React from "react";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="border border-white bg-white rounded-lg p-4 w-48 text-center">
      <div className="mb-4">
        <Image
          src={image}
          alt={title}
          className="rounded-full"
          width={80}
          height={80}
          objectFit="cover"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
