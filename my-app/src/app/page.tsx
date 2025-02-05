import Navbar from "./components/Navbar";
import HowItWorksPage from "./components/HowItWorksPage";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <HowItWorksPage />
      </div>
    </>
  );
}
