import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({outDir: 'dist/types'})],
  build: {
    outDir: './dist',
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, './src/index.tsx'),
      name: 'AxeReport',
      formats: ['es', 'umd'],
      // fileName: (format) => `index.${format}.js`,
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',  
        },
        assetFileNames: "index.[ext]",
      },
    },
  },
  resolve: { alias: { src: resolve('src/') } },
  server: {
    port: 3000,
  },
  define: {
    'process.env': {}
  }  
});
