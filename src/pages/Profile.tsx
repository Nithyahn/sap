
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, ShoppingBag, Heart, Settings, Package, Star } from "lucide-react";
import bag from "@/components/bag.webp";
import bedsheet from "@/components/bedsheet.webp";
import cushion from "@/components/cushion.jpeg";
import jewel from "@/components/jewel.jpeg";
import tea from "@/components/tea.jpeg";
import saree from "@/components/saree.jpg";
import block from "@/components/block.jpeg";

const Profile = () => {
  const orders = [
    {
      id: "ORD001",
      item: "Handwoven Silk Saree",
      artisan: "Sunita Devi",
      price: 12500,
      status: "Delivered",
      date: "2024-06-15",
      image: saree
    },
    {
      id: "ORD002",
      item: "Terracotta Tea Set",
      artisan: "Kamala Amma",
      price: 1800,
      status: "In Transit",
      date: "2024-06-20",
      image: tea
    }
  ];

  const wishlist = [
    {
      name: "Block Printed bedsheet",
      artisan: "Rajesh Kumar",
      price: 2200,
      image: bedsheet,
    },
    {
      name: "Carved Wooden Box",
      artisan: "Arjun Singh",
      price: 2500,
      image: tea
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-green-50">
      <Header />
      <div className="pt-20 pb-12 px-4 bg-gradient-to-r from-green-400 to-green-600">
        <div className="container mx-auto">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-gray-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Welcome, Fantastic4!</h1>
              <p className="text-green-100">Member since July 2025</p>
              <Badge className="bg-white/20 text-white border-white/30 mt-2">Premium Customer</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Wishlist
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Orders</h2>
                {orders.map((order, index) => (
                  <Card key={index} className="bg-white border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <img 
                          src={order.image} 
                          alt={order.item}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900">{order.item}</h3>
                          <p className="text-green-600">by {order.artisan}</p>
                          <p className="text-gray-600">Order ID: {order.id}</p>
                          <p className="text-gray-600">Ordered on: {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">₹{order.price.toLocaleString()}</p>
                          <Badge className={order.status === "Delivered" ? "bg-green-600" : "bg-green-600"}>
                            {order.status}
                          </Badge>
                          {order.status === "Delivered" && (
                            <Button variant="outline" className="mt-2 border-green-300 text-green-600">
                              <Star className="w-4 h-4 mr-2" />
                              Rate & Review
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wishlist">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Wishlist</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlist.map((item, index) => (
                    <Card key={index} className="bg-white border-orange-200">
                      <CardContent className="p-6">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                        <p className="text-green-600 mb-2">by {item.artisan}</p>
                        <p className="text-2xl font-bold text-green-600 mb-4">₹{item.price.toLocaleString()}</p>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white">
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="icon" className="border-red-300 text-red-600">
                            <Heart className="w-4 h-4 fill-current" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="profile">
              <Card className="bg-white border-orange-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Personal Details</h3>
                      <div className="space-y-2 text-gray-600">
                        <p><strong>Name:</strong> Fantastic4</p>
                        <p><strong>Email:</strong> Fantastic4@email.com</p>
                        <p><strong>Phone:</strong> +91 11111 43210</p>
                        <p><strong>Member Since:</strong> July 2025</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Preferences</h3>
                      <div className="space-y-2 text-gray-600">
                        <p><strong>Favorite Categories:</strong> Textiles, Pottery</p>
                        <p><strong>Preferred Language:</strong> English, Hindi</p>
                        <p><strong>Newsletter:</strong> Subscribed</p>
                        <p><strong>Account Type:</strong> Premium Customer</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-white border-orange-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Notifications</h3>
                        <p className="text-gray-600">Receive updates about orders and new products</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Privacy Settings</h3>
                        <p className="text-gray-600">Control your data and privacy preferences</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Payment Methods</h3>
                        <p className="text-gray-600">Manage your saved payment methods</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Shipping Addresses</h3>
                        <p className="text-gray-600">Manage your delivery addresses</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
