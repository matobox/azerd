import React from 'react';
import { 
  Laptop, 
  Smartphone, 
  Home, 
  ShoppingBag, 
  Gamepad2, 
  Baby, 
  Shirt, 
  UtensilsCrossed,
  Dumbbell,
  BookOpen,
  Car,
  Palette
} from 'lucide-react';

const categories = [
  { id: '1', name: 'High-Tech', icon: Laptop },
  { id: '2', name: 'Smartphones', icon: Smartphone },
  { id: '3', name: 'Maison', icon: Home },
  { id: '4', name: 'Supermarché', icon: ShoppingBag },
  { id: '5', name: 'Jeux Vidéo', icon: Gamepad2 },
  { id: '6', name: 'Bébé & Puériculture', icon: Baby },
  { id: '7', name: 'Mode', icon: Shirt },
  { id: '8', name: 'Cuisine', icon: UtensilsCrossed },
  { id: '9', name: 'Sport', icon: Dumbbell },
  { id: '10', name: 'Livres', icon: BookOpen },
  { id: '11', name: 'Auto & Moto', icon: Car },
  { id: '12', name: 'Art & Loisirs', icon: Palette },
];

const FeaturedCategories = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
              >
                <IconComponent size={28} className="text-blue-600 mb-2" />
                <span className="text-sm text-gray-700 text-center">
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories