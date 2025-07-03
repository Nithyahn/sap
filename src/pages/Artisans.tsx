
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import madhu from "@/components/madhurai.webp";
import block from "@/components/block.jpeg";
import embo from "@/components/embo.webp";
import pottery from "@/components/pottery.jpg";
import wood from "@/components/wood.jpg";
import hand from "@/components/hand.jpg";
import { MapPin, Star, Heart, Award, Calendar, ShoppingCart, Package } from "lucide-react";

const Artisans = () => {
  const artisans = [
    {
      name: "Meera Devi",
      craft: "Madhubani Painting",
      location: "Bihar",
      experience: "25 years",
      rating: 4.9,
      image: madhu,
      speciality: "Traditional folk art with natural colors on handmade paper",
      orders: 150,
      joined: "2022",
      bulkOrders: "Available",
      customOrders: "Yes",
      minBulkQty: 50,
      story: "Born into a family of traditional Mithila painters, Meera learned the art from her grandmother. She specializes in depicting Hindu mythology and nature through intricate patterns using natural pigments."
    },
    {
      name: "Rajesh Kumar",
      craft: "Block Printing",
      location: "Rajasthan",
      experience: "18 years",
      rating: 4.8,
      image: block,
      
      speciality: "Intricate geometric patterns on organic cotton using traditional wooden blocks",
      orders: 220,
      joined: "2023",
      bulkOrders: "Available",
      customOrders: "Yes",
      minBulkQty: 100,
      story: "Third-generation block printer from Sanganer, Rajasthan. Rajesh has mastered the art of creating complex geometric patterns and continues his family's 100-year-old tradition."
    },
    {
      name: "Kamala Amma",
      craft: "Pottery",
      location: "Tamil Nadu",
      experience: "30 years",
      rating: 5.0,
      image: pottery,
      speciality: "Terracotta vessels and decorative items using local riverbank clay",
      orders: 180,
      joined: "2021",
      bulkOrders: "Available",
      customOrders: "Yes",
      minBulkQty: 30,
      story: "Master potter from Thanjavur known for her eco-friendly terracotta creations. She sources clay from local riverbanks and uses traditional firing techniques passed down through generations."
    },
    {
      name: "Devi Sharma",
      craft: "Embroidery",
      location: "Gujarat",
      experience: "15 years",
      rating: 4.7,
      image: embo,
      speciality: "Mirror work and thread embroidery on traditional fabrics",
      orders: 95,
      joined: "2023",
      bulkOrders: "Available",
      customOrders: "Yes",
      minBulkQty: 25,
      story: "Specialist in Gujarati mirror work embroidery. Priya combines traditional techniques with contemporary designs, creating unique pieces that bridge heritage and modernity."
    },
    {
      name: "Arjun Singh",
      craft: "Wood Carving",
      location: "Kashmir",
      experience: "22 years",
      rating: 4.9,
      image: wood,
      speciality: "Walnut wood furniture and decorative items with intricate Kashmiri patterns",
      orders: 130,
      joined: "2022",
      bulkOrders: "Limited",
      customOrders: "Yes",
      minBulkQty: 10,
      story: "Master woodcarver specializing in Kashmiri walnut wood. Arjun creates intricate furniture and decorative pieces featuring traditional Kashmiri motifs and patterns."
    },
    {
      name: "venkatesh Prasad",
      craft: "Handloom Weaving",
      location: "West Bengal",
      experience: "20 years",
      rating: 4.8,
      image: hand,
      speciality: "Silk sarees with traditional Bengali motifs using handloom techniques",
      orders: 200,
      joined: "2021",
      bulkOrders: "Available",
      customOrders: "Yes",
      minBulkQty: 20,
      story: "Expert handloom weaver from Murshidabad, known for creating exquisite silk sarees with traditional Bengali motifs. Her work preserves the rich textile heritage of Bengal."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-forest-50">
      <Header />
      <div className="pt-20 pb-12 px-4 bg-gradient-to-r from-forest-600 to-forest-500">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Meet Our Master Artisans
          </h1>
          <p className="text-xl text-forest-100 max-w-2xl mx-auto">
            Discover the skilled craftspeople behind every authentic piece
          </p>
        </div>
      </div>
      
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan, index) => (
              <Card key={index} className="bg-white border-forest-200 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                 <img
  src={artisan.image}
  alt={artisan.name}
  className="w-[400px] h-[400px] object-cover rounded-md"
/>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-forest-600 border-forest-200">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {artisan.rating}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-forest-600 text-white">
                      <Award className="w-3 h-3 mr-1" />
                      {artisan.orders} Orders
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{artisan.name}</h3>
                  <p className="text-forest-600 font-semibold mb-2">{artisan.craft}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{artisan.location} • {artisan.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Joined in {artisan.joined}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {artisan.story}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Bulk Orders:</span>
                      <Badge variant={artisan.bulkOrders === "Available" ? "default" : "secondary"} className="text-xs">
                        {artisan.bulkOrders}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Min Bulk Qty:</span>
                      <span className="font-medium">{artisan.minBulkQty} pieces</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-forest-600 to-forest-500 hover:from-forest-700 hover:to-forest-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Custom Order
                    </Button>
                    <Button variant="outline" className="border-forest-300 text-forest-600 hover:bg-forest-50">
                      <Package className="w-4 h-4 mr-2" />
                      Bulk
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artisans;
