import Navbar from "./components/Navbar";
import HowItWorksSection from "./components/HowItWorksSection";
import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialSection from "./components/TestimonialSection";
import SecuritySection from "./components/SecuritySection";
import PricingSection from "./components/PricingSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialSection />
      <SecuritySection />
      <PricingSection />
      <EmailSection />
      <Footer />
    </>
  );
}
