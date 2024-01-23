import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/uzbechili",
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
});
