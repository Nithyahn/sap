
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Palette, GraduationCap, Banknote } from "lucide-react";

const Donate = () => {
  const donationOptions = [
    {
      amount: 500,
      impact: "Provides raw materials for 1 artisan for a week",
      icon: Palette
    },
    {
      amount: 1000,
      impact: "Sponsors skill development workshop for 2 artisans",
      icon: GraduationCap
    },
    {
      amount: 2500,
      impact: "Supports an artisan family for a month",
      icon: Users
    },
    {
      amount: 5000,
      impact: "Funds equipment upgrade for artisan workshop",
      icon: Banknote
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-forest-50">
      <Header />
      <div className="pt-20 pb-12 px-4 bg-gradient-to-r from-forest-600 to-cream-500">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Support Our Artisans
          </h1>
          <p className="text-xl text-cream-100 max-w-2xl mx-auto">
            Your donation directly empowers artisan families and preserves cultural heritage
          </p>
        </div>
      </div>
      
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Difference Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every contribution helps preserve traditional crafts and provides sustainable livelihoods for artisan families across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {donationOptions.map((option, index) => (
              <Card key={index} className="bg-white border-forest-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-forest-600 to-cream-500 rounded-full flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-forest-600">₹{option.amount.toLocaleString()}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{option.impact}</p>
                  <Button className="w-full bg-gradient-to-r from-forest-600 to-forest-500 hover:from-forest-700 hover:to-forest-600 text-white">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate ₹{option.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-cream-100 to-forest-100 border-forest-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Donation</h3>
              <p className="text-gray-600 mb-6">
                Choose your own amount to support our mission of empowering artisans and preserving cultural heritage.
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl font-bold text-forest-600">₹</span>
                <input 
                  type="number" 
                  placeholder="Enter amount" 
                  className="px-4 py-2 border border-forest-300 rounded-lg text-center text-lg font-semibold w-40"
                />
              </div>
              <Button size="lg" className="bg-gradient-to-r from-forest-600 to-cream-500 hover:from-forest-700 hover:to-cream-600 text-white px-8">
                <Heart className="w-5 h-5 mr-2" />
                Donate Custom Amount
              </Button>
            </CardContent>
          </Card>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Your Donation Matters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-forest-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Direct Impact</h4>
                <p className="text-gray-600 text-sm">100% of donations go directly to supporting artisan families and their craft development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cream-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-forest-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cultural Preservation</h4>
                <p className="text-gray-600 text-sm">Help preserve traditional crafts and pass them on to future generations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-forest-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sustainable Livelihoods</h4>
                <p className="text-gray-600 text-sm">Create sustainable income opportunities for rural artisan communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
