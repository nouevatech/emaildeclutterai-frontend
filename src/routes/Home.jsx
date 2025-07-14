import { Demo } from "../components/Demo";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div>How it works</div>
      <Demo />
    </div>
  );
}
