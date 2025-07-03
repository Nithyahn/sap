
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-green-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-cream-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                SahayaSethu
              </h1>
              <p className="text-xs text-green-600 font-medium">Bridging Artisans to Fairer Future</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/artisans" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Artisans</Link>
            <Link to="/crafts" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Crafts</Link>
            <Link to="/donate" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Donate</Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-green-600">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-green-600">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/join-artisan">
              <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white">
                Join as Artisan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
