// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/furniture-project/", // 👈 replace with your repo name
  plugins: [react()],
});
