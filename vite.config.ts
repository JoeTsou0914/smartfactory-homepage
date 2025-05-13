// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwind(),                          // ← 加在这里
  ],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
