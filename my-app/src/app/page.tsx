import Navbar from "./components/Navbar";
import HowItWorksPage from "./components/HowItWorksPage";
import HomePage from "./components/HomePage";
import FeaturesPage from "./components/FeaturesPage";
import TestimonialPage from "./components/TestimonialPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <HomePage />
        <HowItWorksPage />
        <FeaturesPage />
        <TestimonialPage />
      </div>
    </>
  );
}
