import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: [
      './src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      './src/config/**',
    ],
    coverage: {
      exclude: ['*.config.*', '*.d.ts'],
    },
  },  
})