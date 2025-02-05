import React from "react";

const homeComponent = {
  title: "Title 1",
  description: "Description 1",
};
const HomePage: React.FC = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center">
      <h1>{homeComponent.title}</h1>
      <p>{homeComponent.description}</p>
      <button>Get Started</button>
    </div>
  );
};

export default HomePage;
