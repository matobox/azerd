import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          {product.isFrenchMade && (
            <span className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
              Produit local
            </span>
          )}
          <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
            <Heart size={20} className="text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} ({product.reviews} avis)
              </span>
            </div>
            <span className="ml-2 text-sm text-gray-500">• {product.origin}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">{product.price.toFixed(2)} €</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Ajouter au panier
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;