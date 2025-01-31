import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu } from 'lucide-react';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Élément invisible pour compenser la hauteur de la navbar fixe */}
      <div className="h-16"></div>
      
      {/* Navbar fixe */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
                <h1 className="text-2xl font-bold">
                  <span className="text-gray-800">Local</span>
                  <span className="text-blue-600">Market</span>
                </h1>
              </Link>
            </div>

            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher des produits..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">
                <Heart size={24} />
              </button>
              <Link to="/cart" className="relative text-gray-600 hover:text-blue-600 transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2
                </span>
              </Link>
              <div className="relative" ref={userMenuRef}>
                <button 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <User size={24} />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Mon compte
                    </Link>
                    <button
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        // Logique de déconnexion à implémenter
                        setIsUserMenuOpen(false);
                      }}
                    >
                      Déconnexion
                    </button>
                  </div>
                )}
              </div>
              <button className="md:hidden text-gray-600 hover:text-blue-600 transition-colors">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;