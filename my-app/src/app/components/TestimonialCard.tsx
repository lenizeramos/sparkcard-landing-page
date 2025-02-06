"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface TestimonialCardProps {
  profileImage: string;
  name: string;
  userType: string;
  testimonial: string;
}

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  profileImage,
  name,
  userType,
  testimonial,
}) => {
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    setRandomColor(generateRandomColor());
  }, []);

  return (
    <div className="border  border-white bg-white rounded-lg p-4 w-[90%] sm:w-[25rem] flex-col">
      <div className="mb-4 flex flex-row items-center justify-start text-center">
        {profileImage ? (
          <Image
            src={profileImage}
            alt={name}
            className="rounded-full"
            width={80}
            height={80}
            objectFit="cover"
          />
        ) : (
          <div
            className="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center"
            style={{ backgroundColor: randomColor }}
          >
            <span className="text-xl font-semibold text-white">
              {name.split(" ")[0].slice(0, 1)}
              {name.split(" ")[1]?.slice(0, 1)}
            </span>
          </div>
        )}
        <div className="flex flex-col justify-center items-center space-x-2">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-500 text-sm">{userType}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-500 text-sm">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
