import Navbar from "./components/Navbar";
import HowItWorksPage from "./components/HowItWorksPage";
import HomePage from "./components/HomePage";
import FeaturesPage from "./components/FeaturesPage";
import TestimonialPage from "./components/TestimonialPage";
import SecurityPage from "./components/SecurityPage";
import PricingPage from "./components/PricingPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <HomePage />
        <HowItWorksPage />
        <FeaturesPage />
        <TestimonialPage />
        <SecurityPage />
        <PricingPage/>
      </div>
    </>
  );
}
