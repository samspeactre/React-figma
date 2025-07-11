import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["mixer-enrollment-physician-architects.trycloudflare.com"],
  },
  optimizeDeps: {
    include: [
      "swiper",
      "swiper/react",
      "swiper/modules",
      "swiper/css/pagination",
    ],
  },
});
