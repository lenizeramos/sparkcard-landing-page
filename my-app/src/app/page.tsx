import Navbar from "./components/Navbar";
import HowItWorksSection from "./components/HowItWorksSection";
import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialSection from "./components/TestimonialSection";
import SecuritySection from "./components/SecuritySection";
import PricingSection from "./components/PricingSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

const homeSectionContent = {
  title: "Build Your Credit and Earn Rewards, Hassle-Free",
  description:
    "The Australian card for students and young adults: no hidden fees, real rewards.",
  buttonLabel: "Get Started",
};

const howItWorksSectionContent = {
  title: "How It Works",
  cardsContent: [
    {
      image: "/images/credit-card.svg",
      title: "Sign Up",
      description: "Apply online in minutes",
    },
    {
      image: "/images/wallet.svg",
      title: "Get Your Card",
      description: "Instant virtual card access",
    },
    {
      image: "/images/sparkles.svg",
      title: "Start Earning Rewards",
      description: "Cashback on everyday spending",
    },
    {
      image: "/images/trending-up.svg",
      title: "Build Credit",
      description: "Improve your credit score over time",
    },
  ],
};

const featuresSectionContent = {
  title: "Features & Benefits",
  cardsContent: [
    {
      image: "/images/banknote.svg",
      title: "Smart Rewards",
      description: "Earn cashback on everyday spending",
    },
    {
      image: "/images/lock.svg",
      title: "Transparent Fees",
      description: "No annual fees, no hidden charges",
    },
    {
      image: "/images/book-open.svg",
      title: "Financial Education",
      description: "Access to tips and tools for managing money",
    },
    {
      image: "/images/piggy-bank.svg",
      title: "Build Credit",
      description: "Report to credit bureaus to help build credit history",
    },
  ],
};

const testimonialSectionContent = {
  title: "What Our Users Say",
  cardsContent: [
    {
      profileImage: "",
      name: "Sarah L.",
      userType: "SparkCard User",
      testimonial:
        "'SparkCard helped mebuild my credit score while I was in uni. Brillant!'",
    },
    {
      profileImage: "",
      name: "Tom K.",
      userType: "SparkCard User",
      testimonial:
        "'The cashback rewards are great, and I love how easy it is to track my spending'",
    },
    {
      profileImage: "",
      name: "Emma R.",
      userType: "SparkCard User",
      testimonial:
        "'Finally, a card that doesn't make me feel like I'm being taken advantage of. Thanks, SparkCard!'",
    },
  ],
};

const securitySectionContent = {
  title: "Security & Trust",
  text: "At SparkCard, we take your security seriously. Our state-of-the-art systems ensure your money and data are always protected.",
  features: [
    "Bank-level encryption",
    "Australian government guarantee for deposits",
    "24/7 fraud monitoring",
    "Instant card freeze via app",
  ],
  image: "/images/padlock.png",
};

const pricingSectionContent = {
  title: "Simple, Transparent Pricing",
  cardsContent: [
    {
      planName: "Basic",
      targetAudience: "For students getting started",
      price: "$0",
      paymentCycle: "per month",
      features: [
        "No annual fee",
        "1% cashback on all purchases",
        "Virtual card access",
      ],
      buttonLabel: "Get Started",
    },
    {
      planName: "Pro",
      targetAudience: "For young professionals",
      price: "$5",
      paymentCycle: "per month",
      features: [
        "All Basic features",
        "2% cashback on all purchases",
        "Travel insurance",
        "Priority customer support",
      ],
      buttonLabel: "Upgrade to Pro",
    },
    {
      planName: "Premium",
      targetAudience: "For power users",
      price: "$10",
      paymentCycle: "per month",
      features: [
        "All Pro features",
        "3% cashback on all purchases",
        "Concierge service",
        "Extend warranty on purchases",
      ],
      buttonLabel: "Go Premium",
    },
  ],
};

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
      <HomeSection {...homeSectionContent} />
      <HowItWorksSection {...howItWorksSectionContent} />
      <FeaturesSection {...featuresSectionContent} />
      <TestimonialSection {...testimonialSectionContent} />
      <SecuritySection {...securitySectionContent} />
      <PricingSection {...pricingSectionContent} />
      <EmailSection {...emailSectionContent} />
      <Footer />
    </>
  );
}
