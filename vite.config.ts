import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',  // Accepte les connexions sur toutes les interfaces réseau
    port: 5173,       // Port sur lequel ton application écoute (peut être modifié selon ton besoin)
  },
});
