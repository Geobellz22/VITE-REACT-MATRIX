import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// (link unavailable)
export default defineConfig({
  plugins: [react()],
  loader: {
    '.js': 'jsx',
  },
});