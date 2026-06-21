import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturedArtworks from "../components/home/FeaturedArtworks";
import TestToast from "../components/TestToast";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <TestToast />
      <Navbar />
      <HeroSection />
      <FeaturedArtworks />
      <TestToast />
    </main>
  );
}