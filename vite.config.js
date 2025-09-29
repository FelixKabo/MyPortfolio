import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // jika pakai React

export default defineConfig({
  plugins: [react()],
  base: "/MyPortfolio/", // <- Ganti sesuai nama repo GitHub
});
