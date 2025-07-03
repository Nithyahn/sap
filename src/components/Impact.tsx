
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Artisans Empowered",
      description: "Across 15 states in India"
    },
    {
      icon: TrendingUp,
      number: "₹2.3 Cr",
      label: "Direct Earnings",
      description: "Paid to artisans this year"
    },
    {
      icon: Globe,
      number: "45+",
      label: "Countries Reached",
      description: "Global appreciation for Indian crafts"
    },
    {
      icon: Heart,
      number: "85%",
      label: "Fair Trade Share",
      description: "Average artisan earnings per product"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-700 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Creating Real Impact
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Every purchase you make helps preserve centuries-old traditions and empowers artisan families 
            to continue their craft with dignity and fair compensation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <h4 className="text-xl font-semibold text-orange-100 mb-2">{stat.label}</h4>
                <p className="text-orange-200 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Join the Movement</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Be part of a community that values authentic craftsmanship and believes in fair trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/crafts">
              <Button size="lg" className="bg-white text-forest-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
                Shop with Purpose
              </Button>
            </Link>
            <Link to="/join-artisan">
              <Button size="lg"  className="bg-white text-forest-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
                Become an Artisan Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
