
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SearchSection from "@/components/home/SearchSection";
import PopularSpecialists from "@/components/home/PopularSpecialists";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SearchSection />
        <PopularSpecialists />
        <FeatureSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
