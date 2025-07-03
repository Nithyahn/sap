
import { Hero } from "@/components/Hero";
import { FeaturedArtisans } from "@/components/FeaturedArtisans";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Mission } from "@/components/Mission";
import { Impact } from "@/components/Impact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-forest-50">
      <Header />
      <Hero />
      <Mission />
      <FeaturedArtisans />
      <ProductShowcase />
      <Impact />
      <Footer />
    </div>
  );
};

export default Index;
