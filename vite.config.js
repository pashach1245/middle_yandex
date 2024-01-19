import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import vitePluginChecker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  plugins: [
    vitePluginChecker({
      typescript: true,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
