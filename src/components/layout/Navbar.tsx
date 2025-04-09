
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-seva-700">Seva</span>
            <span className="text-2xl font-semibold text-teal-600">Health</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-seva-600 font-medium">Home</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-seva-600 font-medium">Find Doctors</Link>
            <Link to="/specialties" className="text-gray-700 hover:text-seva-600 font-medium">Specialties</Link>
            <Link to="/about" className="text-gray-700 hover:text-seva-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-seva-600 font-medium">Contact</Link>
          </div>

          {/* Call & Login Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center gap-2 border-seva-600 text-seva-600 hover:bg-seva-50">
              <Phone size={16} />
              <span>Emergency</span>
            </Button>
            <Button className="flex items-center gap-2 bg-seva-600 hover:bg-seva-700">
              <User size={16} />
              <span>Login / Register</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-seva-600 font-medium">Home</Link>
            <Link to="/doctors" className="block py-2 text-gray-700 hover:text-seva-600 font-medium">Find Doctors</Link>
            <Link to="/specialties" className="block py-2 text-gray-700 hover:text-seva-600 font-medium">Specialties</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-seva-600 font-medium">About</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-seva-600 font-medium">Contact</Link>
            
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-100">
              <Button variant="outline" className="flex justify-center items-center gap-2 border-seva-600 text-seva-600">
                <Phone size={16} />
                <span>Emergency</span>
              </Button>
              <Button className="flex justify-center items-center gap-2 bg-seva-600 hover:bg-seva-700">
                <User size={16} />
                <span>Login / Register</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
