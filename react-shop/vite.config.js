import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import sass from "sass";

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
