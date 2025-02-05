import React from "react";

const homeContent = {
  title: "Build Your Credit and Earn Rewards, Hassle-Free",
  description: "The Australian card for students and young adults: no hidden fees, real rewards.",
};
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-blue-300">
      <h1>{homeContent.title}</h1>
      <p>{homeContent.description}</p>
      <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 transition">Get Started</button>
    </div>
  );
};

export default HomePage;
