import { Demo } from "../components/Demo";
import { HeroSection } from "../components/HeroSection";
import { Works } from "../components/Works";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Works />
      <Demo />
    </div>
  );
}
