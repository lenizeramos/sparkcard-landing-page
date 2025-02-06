import React from "react";

interface ButtonProps {
  buttonLabel: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel }) => {
  return (
    <button className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">
      {buttonLabel}
    </button>
  );
};

export default Button;
