// vite.config.ts
import { defineConfig } from 'vitest/config'; // 👈 vitest/config
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Asegúrate de que este archivo exista
  },
});
