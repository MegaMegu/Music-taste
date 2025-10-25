import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
  server: {
    // Run dev server on 127.0.0.1:8000 so redirect URIs using 127.0.0.1:8000 work locally.
    host: "127.0.0.1",
    port: 8000,
    strictPort: true,
    // keep existing note; Vite handles SPA fallback internally
    historyApiFallback: true,
  },
});
