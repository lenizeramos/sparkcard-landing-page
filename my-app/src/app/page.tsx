import Navbar from "./components/Navbar";
import HowItWorksSection from "./components/HowItWorksSection";
import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialSection from "./components/TestimonialSection";
import SecuritySection from "./components/SecuritySection";
import PricingSection from "./components/PricingSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

const emailSectionContent = {
  h2: "Ready to Start Your Financial Journey",
  text: "Join thousands of Australians building their credit and earning rewards with SparkCard.",
  placeholder: "Enter your email",
  buttonLabel: "Get Started",
  span: "By signing up, you agree to our Terms of Service and Privacy Policy",
};

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
      <EmailSection {...emailSectionContent}/>
      <Footer />
    </>
  );
}
