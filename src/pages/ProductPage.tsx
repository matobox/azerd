import React, { useState, useEffect } from 'react';
import { Star, Truck, Shield, ArrowLeft, Heart, ShoppingCart, ChevronRight } from 'lucide-react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { api } from '../api';
import type { Product } from '../types';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const data = await api.getProduct(id);
        setProduct(data);
      } catch (err) {
        setError('Erreur lors du chargement du produit');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-200 rounded-xl h-[500px]"></div>
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-red-600">
          {error || 'Produit non trouvé'}
        </div>
      </div>
    );
  }

  const reviews = [
    {
      author: 'Marie L.',
      rating: 5,
      date: '15/03/2024',
      title: 'Excellent produit, je recommande !',
      comment: 'La qualité audio est exceptionnelle et la réduction de bruit fonctionne parfaitement. Je les utilise quotidiennement pour le travail et les loisirs.',
      verified: true,
    },
    {
      author: 'Pierre D.',
      rating: 4,
      date: '10/03/2024',
      title: 'Très bon produit malgré quelques défauts',
      comment: "Le son est excellent et le confort est au rendez-vous. Seul bémol : l'autonomie pourrait être meilleure.",
      verified: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour aux produits
        </button>
      </div>

      {/* Le reste du composant reste identique */}
      {/* ... */}
    </div>
  );
};

export default ProductPage;