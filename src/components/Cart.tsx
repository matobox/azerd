import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowLeft, Truck, Clock, ShieldCheck, CreditCard } from 'lucide-react';
import type { CartItem } from '../types';

const mockCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Écouteurs sans fil Pro Max',
    description: 'Réduction de bruit active, autonomie 24h, étanche IPX4',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=800',
    category: 'Électronique',
    origin: 'Local',
    rating: 4.8,
    reviews: 1247,
    isFrenchMade: true,
    quantity: 1
  },
  {
    id: '2',
    name: 'Robot Pâtissier Multifonction',
    description: 'Bol 5L, 10 vitesses, 1200W, accessoires inclus',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1622444447425-2f4ec91020ab?auto=format&fit=crop&q=80&w=800',
    category: 'Électroménager',
    origin: 'Local',
    rating: 4.9,
    reviews: 892,
    isFrenchMade: true,
    quantity: 1
  }
];

const deliveryOptions = [
  { 
    id: 'standard', 
    name: 'Livraison Standard', 
    price: 4.99, 
    delay: '3-5 jours ouvrés',
    icon: Truck 
  },
  { 
    id: 'express', 
    name: 'Livraison Express', 
    price: 9.99, 
    delay: '1-2 jours ouvrés',
    icon: Clock 
  },
  { 
    id: 'free', 
    name: 'Livraison Gratuite', 
    price: 0, 
    delay: '4-6 jours ouvrés',
    description: 'Pour les commandes de plus de 35€',
    icon: Truck 
  }
];

const paymentMethods = [
  { id: 'card', name: 'Carte bancaire', icon: CreditCard },
  { id: 'paypal', name: 'PayPal', icon: ShieldCheck }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0].id);
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id);

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryPrice = deliveryOptions.find(option => option.id === selectedDelivery)?.price || 0;
  const total = subtotal + (subtotal >= 35 ? 0 : deliveryPrice);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continuer mes achats
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-8">Mon Panier ({cartItems.length})</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Votre panier est vide</h2>
            <p className="text-gray-600 mb-6">
              Découvrez nos produits et ajoutez-les à votre panier
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Découvrir les produits
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Liste des produits */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-50"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-4 py-2 border-x">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-50"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-lg">
                            {(item.price * item.quantity).toFixed(2)} €
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.price.toFixed(2)} € / unité
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Options de livraison */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-lg mb-4">Mode de livraison</h3>
                <div className="space-y-3">
                  {deliveryOptions.map(option => (
                    <label
                      key={option.id}
                      className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedDelivery === option.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={selectedDelivery === option.id}
                          onChange={(e) => setSelectedDelivery(e.target.value)}
                          className="text-blue-600"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <option.icon size={20} className="text-gray-600" />
                            <span className="font-medium">{option.name}</span>
                          </div>
                          <p className="text-sm text-gray-600">{option.delay}</p>
                          {option.description && (
                            <p className="text-sm text-green-600">{option.description}</p>
                          )}
                        </div>
                      </div>
                      <span className="font-semibold">
                        {option.price === 0 ? 'Gratuit' : `${option.price.toFixed(2)} €`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <h3 className="font-semibold text-lg mb-4">Récapitulatif</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Livraison</span>
                    <span>
                      {subtotal >= 35 ? 'Gratuit' : `${deliveryPrice.toFixed(2)} €`}
                    </span>
                  </div>
                  {subtotal >= 35 && (
                    <div className="text-green-600 text-sm">
                      Vous bénéficiez de la livraison gratuite !
                    </div>
                  )}
                  <div className="pt-3 border-t">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>{total.toFixed(2)} €</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">TVA incluse</p>
                  </div>
                </div>

                {/* Méthodes de paiement */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Paiement</h4>
                  <div className="space-y-2">
                    {paymentMethods.map(method => (
                      <label
                        key={method.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer ${
                          selectedPayment === method.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={selectedPayment === method.id}
                          onChange={(e) => setSelectedPayment(e.target.value)}
                          className="text-blue-600"
                        />
                        <method.icon size={20} className="text-gray-600" />
                        <span>{method.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Procéder au paiement
                </button>

                <div className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
                  <ShieldCheck size={16} />
                  Paiement sécurisé
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;