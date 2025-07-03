
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import bag from "@/components/bag.webp";
import bedsheet from "@/components/bedsheet.webp";
import cushion from "@/components/cushion.jpeg";
import jewel from "@/components/jewel.jpeg";
import tea from "@/components/tea.jpeg";
import saree from "@/components/saree.jpg";
import block from "@/components/block.jpeg";
import { ShoppingCart, Heart, Info, Star, User, Clock, Palette } from "lucide-react";

const Crafts = () => {
  const crafts = [
    {
      name: "Handwoven Silk Saree",
      artisan: "Sunita Devi",
      price: 12500,
      artisanShare: 10000,
      platformFee: 1250,
      processingFee: 1250,
      image: saree,
      category: "Textiles",
      rating: 4.9,
      reviews: 45,
      timeToMake: "15-20 days",
      materials: "Pure Mulberry Silk, Natural Dyes",
      story: "This exquisite saree is handwoven on traditional pit looms using techniques passed down through generations. Sunita uses natural dyes extracted from turmeric, indigo, and madder root to create vibrant colors that are eco-friendly and long-lasting."
    },
    {
      name: "Madhubani Wall Painting",
      artisan: "Meera Devi",
      price: 3500,
      artisanShare: 2800,
      platformFee: 350,
      processingFee: 350,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=500&fit=crop",
      category: "Paintings",
      rating: 5.0,
      reviews: 32,
      timeToMake: "7-10 days",
      materials: "Handmade Paper, Natural Pigments, Bamboo Brushes",
      story: "Originating from the Mithila region, this art form depicts Hindu deities and nature scenes. Meera learned this sacred art from her grandmother, using natural pigments made from flowers, leaves, and clay to create these meaningful compositions."
    },
    {
      name: "Block Printed Bedsheet Set",
      artisan: "Rajesh Kumar",
      price: 2800,
      artisanShare: 2240,
      platformFee: 280,
      processingFee: 280,
      image: bedsheet,
      category: "Home Decor",
      rating: 4.8,
      reviews: 67,
      timeToMake: "3-5 days",
      materials: "100% Cotton, Vegetable Dyes, Wooden Blocks",
      story: "Hand-carved wooden blocks dating back 50+ years are used to create these intricate patterns. Each block is carefully aligned and pressed by hand, making every print unique with slight variations that add to its authentic charm."
    },
    {
      name: "Terracotta Tea Set",
      artisan: "Kamala Amma",
      price: 1800,
      artisanShare: 1440,
      platformFee: 180,
      processingFee: 180,
      image: tea,
      category: "Pottery",
      rating: 4.7,
      reviews: 28,
      timeToMake: "5-7 days",
      materials: "Riverbank Clay, Natural Glazes, Traditional Firing",
      story: "Crafted using clay from the banks of River Kaveri, this tea set is fired in traditional kilns using dried cow dung and rice husk. The natural materials give each piece a unique texture and enhance the flavor of tea."
    },
    {
      name: "Embroidered Cushion Covers",
      artisan: "Priya Sharma",
      price: 1200,
      artisanShare: 960,
      platformFee: 120,
      processingFee: 120,
      image: cushion,
      category: "Home Decor",
      rating: 4.6,
      reviews: 51,
      timeToMake: "4-6 days",
      materials: "Cotton Base, Silk Threads, Mirror Work",
      story: "These cushion covers feature traditional Gujarati mirror work embroidery. Each tiny mirror is individually sewn by hand using colorful silk threads, creating patterns that reflect light beautifully and add vibrancy to any space."
    },
    {
      name: "Handmade Jewelery",
      artisan: "Arjun Singh",
      price: 2500,
      artisanShare: 2000,
      platformFee: 250,
      processingFee: 250,
      image: jewel,
      category: "Wood Work",
      rating: 4.9,
      reviews: 23,
      timeToMake: "10-12 days",
      materials: "Kashmiri Walnut Wood, Natural Finish",
      story: "Hand-carved from premium Kashmiri walnut wood, this jewelry box features traditional chinar leaf motifs. The wood is naturally fragrant and develops a beautiful patina over time, making each piece more precious with age."
    }
  ];

  const categories = ["All", "Textiles", "Pottery", "Paintings", "Home Decor", "Wood Work"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-forest-50">
      <Header />
      <div className="pt-20 pb-12 px-4 bg-gradient-to-r from-forest-500 to-forest-600">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Authentic Handicrafts
          </h1>
          <p className="text-xl text-forest-100 max-w-2xl mx-auto">
            Every piece tells a story of tradition, skill, and cultural heritage
          </p>
        </div>
      </div>

      <div className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 
                  ? "bg-gradient-to-r from-forest-600 to-forest-500 text-white" 
                  : "border-forest-300 text-forest-600 hover:bg-forest-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crafts.map((craft, index) => (
              <Card key={index} className="bg-white border-forest-200 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={craft.image} 
                    alt={craft.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-forest-600">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {craft.rating}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-forest-600 text-white">
                      {Math.round(((craft.price - craft.artisanShare) / craft.price) * 100)}% Fair Trade
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{craft.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4 text-forest-600" />
                    <p className="text-forest-600 font-medium">by {craft.artisan}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Price:</span>
                      <span className="font-bold text-lg">₹{craft.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Artisan Gets:</span>
                      <span className="font-bold text-forest-600 text-lg">₹{craft.artisanShare.toLocaleString()}</span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex justify-between">
                        <span>Platform Fee:</span>
                        <span>₹{craft.platformFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Processing Fee:</span>
                        <span>₹{craft.processingFee}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-forest-600 to-forest-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(craft.artisanShare / craft.price) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Made in: {craft.timeToMake}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      <span>{craft.materials}</span>
                    </div>
                    <Badge variant="outline" className="text-forest-600 border-forest-300">
                      {craft.category}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {craft.story}
                  </p>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-forest-600 to-forest-500 hover:from-forest-700 hover:to-forest-600 text-white">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Buy Now
                    </Button>
                    <Button variant="outline" size="icon" className="border-forest-300 text-forest-600 hover:bg-forest-50">
                      <Heart className="w-4 h-4" />
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

export default Crafts;
