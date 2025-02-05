import Navbar from "./components/Navbar";
import HowItWorksPage from "./components/HowItWorksPage";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <HomePage/>
        <HowItWorksPage />
      </div>
    </>
  );
}
