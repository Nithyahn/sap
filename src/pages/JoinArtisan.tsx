
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Upload, Palette, TrendingUp } from "lucide-react";

const JoinArtisan = () => {
  const benefits = [
    "Direct access to global customers",
    "Fair pricing with 80% revenue share",
    "Professional photography support",
    "Marketing and promotion assistance",
    "Secure payment processing",
    "Training and skill development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-orange-50">
      <Header />
      <div className="pt-20 pb-12 px-4 bg-gradient-to-r from-green-400 to-green-600">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Join as an Artisan
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Share your craft with the world and earn fair compensation
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-white border-orange-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Join SahayaSethu?</h2>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Showcase Your Art</h3>
                    <p className="text-sm text-gray-600">Display your crafts to customers worldwide</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Grow Your Business</h3>
                    <p className="text-sm text-gray-600">Scale your craft business with our support</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Fair Payments</h3>
                    <p className="text-sm text-gray-600">Get paid fairly and on time, always</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-green-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Apply Now</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, State" />
                  </div>
                  
                  <div>
                    <Label htmlFor="craft">Type of Craft</Label>
                    <Input id="craft" placeholder="e.g., Pottery, Weaving, Painting" />
                  </div>
                  
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="Enter years of experience" />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Tell us about your craft</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your craft, techniques, and what makes your work unique..."
                      rows={4}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="portfolio">Upload Portfolio Images</Label>
                    <div className="mt-2 flex items-center justify-center w-full h-32 border-2 border-dashed border-green-300 rounded-lg hover:border-green-400 transition-colors cursor-pointer">
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB each</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-green-300 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 text-lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinArtisan;
