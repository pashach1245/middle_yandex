import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import vitePluginChecker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";
import path from "path";

export default defineConfig({
  plugins: [
    vitePluginChecker({
      typescript: {
        tsconfigPath: path.resolve(process.cwd(), "tsconfig.json"),
        root: path.resolve(process.cwd(), "src"),
      },
      overlay: false,
    }),
  ],
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
