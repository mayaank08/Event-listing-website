
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">Sydney Events</span>
        </a>

        {/* Mobile menu button */}
        <button 
          className="p-2 md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#events" className="text-sm font-medium hover:text-primary transition-colors">
            Events
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <Button variant="outline" size="sm">
            Subscribe
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg p-4 md:hidden animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#events" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button variant="outline" size="sm" className="ml-4">
                Subscribe
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
