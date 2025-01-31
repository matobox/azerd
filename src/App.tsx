import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">À Propos</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Qui sommes-nous</li>
                  <li>Carrières</li>
                  <li>Durabilité</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Service Client</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Centre d'aide</li>
                  <li>Livraison</li>
                  <li>Retours</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Vendeurs</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Vendre sur LocalMarket</li>
                  <li>Programme Partenaire</li>
                  <li>Expédié par LocalMarket</li>
                  <li>Outils vendeurs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Applications</h3>
                <p className="text-gray-400 mb-4">
                  Téléchargez notre application pour une meilleure expérience
                </p>
                <div className="space-y-2">
                  <button className="w-full bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                    App Store
                  </button>
                  <button className="w-full bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
                    Google Play
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>© 2024 LocalMarket. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;