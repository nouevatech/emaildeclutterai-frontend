import { Demo } from "../components/Demo";
import { HeroSection } from "../components/HeroSection";
import { WorkSection } from "../components/Work";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <Demo />
    </div>
  );
}
