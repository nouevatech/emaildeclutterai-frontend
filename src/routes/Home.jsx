import { Demo } from "../components/Demo";
import { HeroSection } from "../components/HeroSection";
import { HowItWorks } from "../components/Stepsguide";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Demo />
    </div>
  );
}
