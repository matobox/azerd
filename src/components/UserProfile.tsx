import React, { useState } from 'react';
import { User, Package, MapPin, Heart, CreditCard, Bell, Settings, LogOut, ChevronRight, Edit2, Plus } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  total: number;
  status: 'en-cours' | 'expédiée' | 'livrée' | 'annulée';
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

const mockOrders: Order[] = [
  {
    id: "CMD-2024-001",
    date: "2024-03-15",
    total: 449.98,
    status: "en-cours",
    items: [
      {
        name: "Écouteurs sans fil Pro Max",
        quantity: 1,
        price: 149.99,
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=800"
      },
      {
        name: "Robot Pâtissier Multifonction",
        quantity: 1,
        price: 299.99,
        image: "https://images.unsplash.com/photo-1622444447425-2f4ec91020ab?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "CMD-2024-002",
    date: "2024-03-10",
    total: 129.99,
    status: "livrée",
    items: [
      {
        name: "Sneakers Urban Style",
        quantity: 1,
        price: 129.99,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];

const mockAddresses: Address[] = [
  {
    id: "1",
    name: "Domicile",
    street: "123 Rue de la République",
    city: "Paris",
    postalCode: "75001",
    country: "France",
    isDefault: true
  },
  {
    id: "2",
    name: "Bureau",
    street: "45 Avenue des Champs-Élysées",
    city: "Paris",
    postalCode: "75008",
    country: "France",
    isDefault: false
  }
];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Thomas Martin",
    email: "thomas.martin@email.com",
    phone: "+33 6 12 34 56 78",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  });

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'en-cours':
        return 'bg-blue-100 text-blue-800';
      case 'expédiée':
        return 'bg-yellow-100 text-yellow-800';
      case 'livrée':
        return 'bg-green-100 text-green-800';
      case 'annulée':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'en-cours':
        return 'En cours';
      case 'expédiée':
        return 'Expédiée';
      case 'livrée':
        return 'Livrée';
      case 'annulée':
        return 'Annulée';
      default:
        return status;
    }
  };

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <img
              src={userInfo.avatar}
              alt="Photo de profil"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold">{userInfo.name}</h2>
              <p className="text-gray-600">Client depuis 2024</p>
            </div>
          </div>
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            <Edit2 size={18} />
            {editMode ? 'Annuler' : 'Modifier'}
          </button>
        </div>

        {editMode ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                value={userInfo.phone}
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={() => setEditMode(false)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enregistrer les modifications
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <p className="text-gray-900">{userInfo.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <p className="text-gray-900">{userInfo.phone}</p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Préférences de notification</h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Notifications par email</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Notifications push</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-gray-700">Newsletter</span>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
          </label>
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      {mockOrders.map(order => (
        <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">Commande {order.id}</h3>
              <p className="text-gray-600">
                Passée le {new Date(order.date).toLocaleDateString()}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
              {getStatusText(order.status)}
            </span>
          </div>
          
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-gray-600">
                    Quantité : {item.quantity} × {item.price.toFixed(2)} €
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t flex justify-between items-center">
            <span className="font-semibold">Total</span>
            <span className="text-lg font-bold">{order.total.toFixed(2)} €</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAddresses = () => (
    <div className="space-y-6">
      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
        <Plus size={20} />
        Ajouter une nouvelle adresse
      </button>

      {mockAddresses.map(address => (
        <div key={address.id} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-gray-400" />
              <div>
                <h3 className="font-semibold">{address.name}</h3>
                <p className="text-gray-600">{address.street}</p>
                <p className="text-gray-600">
                  {address.postalCode} {address.city}
                </p>
                <p className="text-gray-600">{address.country}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {address.isDefault && (
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Par défaut
                </span>
              )}
              <button className="text-gray-400 hover:text-gray-600">
                <Edit2 size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const tabs = [
    { id: 'profile', name: 'Profil', icon: User },
    { id: 'orders', name: 'Commandes', icon: Package },
    { id: 'addresses', name: 'Adresses', icon: MapPin },
    { id: 'wishlist', name: 'Liste de souhaits', icon: Heart },
    { id: 'payment', name: 'Paiement', icon: CreditCard },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'settings', name: 'Paramètres', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              <nav className="space-y-1">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium ${
                        activeTab === tab.id
                          ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      {tab.name}
                    </button>
                  );
                })}
              </nav>
              <div className="p-4 border-t">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                  <LogOut size={20} />
                  Déconnexion
                </button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'addresses' && renderAddresses()}
            {/* Add other tabs content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;