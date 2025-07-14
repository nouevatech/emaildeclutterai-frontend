import { Demo } from "../components/Demo";
import { HeroSection } from "../components/HeroSection";
import HowItworks from "../components/HowItworks";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowItworks />
      <Demo />
    </div>
  );
}
