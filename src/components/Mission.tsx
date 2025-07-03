
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Users, Banknote, TreePine } from "lucide-react";

export const Mission = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cream-100 to-green-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Preserving Heritage, Empowering Lives
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Every handcrafted piece represents generations of skill passed down through families. 
            We ensure these master craftspeople receive the recognition and fair compensation they deserve 
            while keeping alive the cultural treasures of India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Master Craftsmanship</h3>
              <p className="text-gray-600">Celebrating centuries-old techniques and regional art forms unique to each artisan family</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Banknote className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Earnings</h3>
              <p className="text-gray-600">No middlemen means artisans keep 80% of every sale, transforming their livelihoods</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Future Generations</h3>
              <p className="text-gray-600">Inspiring young artisans to embrace their heritage and build sustainable careers in crafts</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Legacy</h3>
              <p className="text-gray-600">Each purchase helps preserve irreplaceable traditional knowledge for posterity</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
