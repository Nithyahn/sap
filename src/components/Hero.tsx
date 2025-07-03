
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Bridging Artisans to a
            <span className="bg-gradient-to-r from-forest-600 to-cream-500 bg-clip-text text-transparent block">
              Fairer Future
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect directly with skilled artisans, support fair trade, and own authentic handcrafted pieces that tell stories of tradition and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/artisans">
              <Button size="lg" className="bg-gradient-to-r from-forest-600 to-forest-500 hover:from-forest-700 hover:to-forest-600 text-white px-8 py-4 text-lg">
                Discover Artisans
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/crafts">
              <Button size="lg" variant="outline" className="border-forest-300 text-forest-600 hover:bg-forest-50 px-8 py-4 text-lg">
                Shop Handicrafts
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-forest-200 hover:shadow-lg transition-all duration-300">
              <Shield className="w-12 h-12 text-forest-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Authentic</h3>
              <p className="text-gray-600">Every piece is handcrafted by verified artisans with generations of expertise</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-cream-200 hover:shadow-lg transition-all duration-300">
              <Heart className="w-12 h-12 text-cream-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fair Trade Promise</h3>
              <p className="text-gray-600">80% of your payment goes directly to artisans, ensuring fair compensation</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-forest-200 hover:shadow-lg transition-all duration-300">
              <Globe className="w-12 h-12 text-forest-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Heritage</h3>
              <p className="text-gray-600">Preserving traditional crafts and supporting cultural continuity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
