const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  // Produits
  async getProducts() {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des produits');
    return response.json();
  },

  async getProduct(id: string) {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) throw new Error('Erreur lors de la récupération du produit');
    return response.json();
  },

  // Panier
  async addToCart(productId: string, quantity: number) {
    const response = await fetch(`${API_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, quantity }),
    });
    if (!response.ok) throw new Error('Erreur lors de l\'ajout au panier');
    return response.json();
  },

  async getCart() {
    const response = await fetch(`${API_URL}/cart`);
    if (!response.ok) throw new Error('Erreur lors de la récupération du panier');
    return response.json();
  },

  // Utilisateur
  async login(email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Erreur lors de la connexion');
    return response.json();
  },

  async register(email: string, password: string) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Erreur lors de l\'inscription');
    return response.json();
  },
};