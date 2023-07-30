import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin({ styleId: "growise-style" }),
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/manifest.json",
          dest: ".",
        },
        {
          src: "src/assets/images",
          dest: "assets",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        inject: path.resolve("./src/services/inject.js"),
        app: path.resolve("./src/main.jsx"),
      },
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    outDir: "dist",
    assetsDir: "assets",
    manifest: "vite-manifest.json",
  },
});
