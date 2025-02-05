import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  profileImage: string;
  name: string;
  userType: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  profileImage,
  name,
  userType,
  testimonial,
}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-48 text-center flex-col">
      <div className="mb-4 flex-row">
        <Image
          src={profileImage}
          alt={name}
          className="rounded-full"
          width={80}
          height={80}
          objectFit="cover"
        />
        <div>
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
