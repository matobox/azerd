import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

const Hero = () => {
  const quickLinks = [
    "Smartphones", "Ordinateurs", "Électroménager", "Mode", "Jeux Vidéo", "High-Tech"
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Des millions de produits à portée de clic
          </h1>
          
          <div className="w-full max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Que recherchez-vous ?"
                className="w-full px-6 py-4 rounded-lg text-lg border-0 focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
                <Search size={24} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex items-center text-sm text-gray-100 hover:text-white bg-white/10 px-3 py-1 rounded-full"
              >
                {link}
                <ChevronRight size={16} className="ml-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero