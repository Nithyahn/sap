
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 text-forest-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SahayaSethu</h3>
                <p className="text-xs text-gray-400">Bridging Artisans to Fairer Future</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Preserving India's cultural heritage while empowering artisans with fair trade, 
              transparent pricing, and direct market access.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">For Artisans</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-forest-600 transition-colors">Join Our Platform</a></li>
              <li><a href="#" className="hover:text-forest-600 transition-colors">Sell Your Crafts</a></li>
              <li><a href="#" className="hover:text-forest-600 transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-forest-600 transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">For Customers</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-forest-600 transition-colors">Browse Crafts</a></li>
              <li><a href="#" className="hover:text-forest-600 transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-forest-600 transition-colors">Fair Trade Promise</a></li>
              <li><a href="#" className="hover:text-forest-600 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span>hello@sahayasethu.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SahayaSethu. Made with ❤️ for preserving India's cultural heritage.</p>
        </div>
      </div>
    </footer>
  );
};
