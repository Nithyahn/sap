
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import madhu from "@/components/madhurai.webp";
import block from "@/components/block.jpeg";
import pottery from "@/components/pottery.jpg";

export const FeaturedArtisans = () => {
  const artisans = [
    {
      name: "Meera Devi",
      craft: "Madhubani Painting",
      location: "Bihar",
      experience: "25 years",
      rating: 4.9,
      image: madhu,
      story: "Master of traditional Mithila art, painting stories of nature and mythology on handmade paper with natural pigments.",
      earnings: "₹45,000/month"
    },
    {
      name: "Rajesh Kumar",
      craft: "Block Printing",
      location: "Rajasthan",
      experience: "18 years",
      rating: 4.8,
      image: block,
      story: "Third generation block printer creating intricate patterns on organic cotton using traditional wooden blocks.",
      earnings: "₹38,000/month"
    },
    {
      name: "Kamala Amma",
      craft: "Pottery",
      location: "Tamil Nadu",
      experience: "30 years",
      rating: 5.0,
      image: pottery,
      story: "Creating functional and decorative terracotta pieces using clay from local riverbanks and ancient firing techniques.",
      earnings: "₹42,000/month"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Master Artisans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each artisan brings decades of expertise and cultural knowledge, creating pieces that are not just products, but pieces of living heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artisans.map((artisan, index) => (
            <Card key={index} className="bg-white border-orange-200 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
               <img
  src={artisan.image}
  alt={artisan.name}
  className="w-[400px] h-[400px] object-cover rounded-md"
/>

                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-green-600 border-green-200">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {artisan.rating}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{artisan.name}</h3>
                  <Badge variant="outline" className="text-green-600 border-orange-300">
                    {artisan.earnings}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-green-600 font-semibold">{artisan.craft}</p>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{artisan.location} • {artisan.experience}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {artisan.story}
                </p>
                
                <div className="flex gap-2">
                  <Link to="/crafts" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:to-green-700 text-white">
                      View Crafts
                    </Button>
                  </Link>
                  <Button variant="outline" size="icon" className="border-orange-300  hover:bg-orange-50">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/artisans">
            <Button size="lg" variant="outline" className="border-green-300 text-green-600 hover:bg-green-50 px-8 py-4">
              Discover All Artisans
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
