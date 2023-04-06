import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://joshadamous.github.io/external-fee-test/',
  plugins: [react()],
  server: {
    host: true,
  },
});
