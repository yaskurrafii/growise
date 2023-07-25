import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
import { createHtmlPlugin } from "vite-plugin-html";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      entry: "src/main.jsx",
      template: "index.html",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/manifest.json",
          dest: ".",
        },
        { src: "src/services", dest: "." },
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
      output: {
        entryFileNames: `app.js`,
        assetFileNames: `assets/[name].[ext]`
      },
    },
    outDir: "build",
    assetsDir: "assets",
    manifest: "vite-manifest.json",
  },
});
