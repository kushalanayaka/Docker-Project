import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import FeaturedArtworks from "../components/home/FeaturedArtworks";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturedArtworks />
    </main>
  );
}