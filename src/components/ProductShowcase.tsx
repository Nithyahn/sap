
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Info, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import bag from "@/components/bag.webp";
import bedsheet from "@/components/bedsheet.webp";
import cushion from "@/components/cushion.jpeg";
import jewel from "@/components/jewel.jpeg";
import tea from "@/components/tea.jpeg";
import saree from "@/components/saree.jpg";
import block from "@/components/block.jpeg";

export const ProductShowcase = () => {
  const products = [
    {
      name: "Handwoven Silk Saree",
      artisan: "Sunita Devi",
      price: 8500,
      artisanShare: 6800,
      image: saree,
      craft: "Traditional Weaving",
      timeToMake: "15 days",
      materials: "Pure silk, natural dyes"
    },
    {
      name: "Block Printed Cotton Set",
      artisan: "Rajesh Kumar",
      price: 2200,
      artisanShare: 1760,
      image: bedsheet,
      craft: "Block Printing",
      timeToMake: "3 days",
      materials: "Organic cotton, vegetable dyes"
    },
    {
      name: "Terracotta Dinner Set",
      artisan: "Kamala Amma",
      price: 1800,
      artisanShare: 1440,
      image: tea,
      craft: "Pottery",
      timeToMake: "5 days",
      materials: "Natural clay, traditional glazes"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-cream-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fair Pricing, Transparent Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly how your purchase directly supports artisan families. Every transaction creates lasting positive change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="bg-white border-green-200 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600 text-white">
                    {Math.round((product.artisanShare / product.price) * 100)}% to Artisan
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-green-600 font-medium mb-4">by {product.artisan}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Price:</span>
                    <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Artisan Gets:</span>
                    <span className="font-bold text-green-600 text-lg">₹{product.artisanShare.toLocaleString()}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(product.artisanShare / product.price) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Craft Type:</span>
                    <span>{product.craft}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Creation Time:</span>
                    <span>{product.timeToMake}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Materials:</span>
                    <span>{product.materials}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="icon" className="border-orange-300 text-green-600 hover:bg-orange-50">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/crafts">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4">
              Explore All Handicrafts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
