import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      icons: path.resolve(__dirname, "./src/assets/icons"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
