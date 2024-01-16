import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
