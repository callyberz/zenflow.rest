import FeaturesColumn from "~/components/FeaturesColumn";
import HeroSection from "~/components/HeroSection";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white ">
      <div className="mx-6">
        <HeroSection />
        <FeaturesColumn />
      </div>
    </main>
  );
}
