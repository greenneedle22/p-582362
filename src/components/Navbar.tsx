import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Wallet } from 'lucide-react';
import { Button } from './ui/button';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-extrabold text-investment-accent text-center md:text-4xl">VAIOT</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-investment-dark hover:text-investment-blue transition-colors">Features</a>
            <a href="#how-it-works" className="text-investment-dark hover:text-investment-blue transition-colors">How It Works</a>
            <a href="#staking" className="text-investment-dark hover:text-investment-blue transition-colors">Staking</a>
            <div className="relative group">
              <button className="flex items-center text-investment-dark hover:text-investment-blue transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Whitepaper</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">FAQ</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Token Info</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connect Wallet Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-investment-blue hover:bg-blue-800 text-white flex items-center space-x-2 transform hover:scale-105 transition-all duration-200">
              <Wallet className="h-4 w-4" />
              <span>Connect Wallet</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-investment-blue focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">How It Works</a>
            <a href="#staking" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Staking</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Resources</a>
            <div className="mt-4 px-3">
              <Button className="w-full bg-investment-blue hover:bg-blue-800 text-white flex items-center justify-center space-x-2">
                <Wallet className="h-4 w-4" />
                <span>Connect Wallet</span>
              </Button>
            </div>
          </div>
        </div>}
    </nav>;
};
export default Navbar;