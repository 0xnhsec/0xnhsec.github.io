import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig({
  // Saat build di GitHub Actions, VITE_BASE_PATH = "/nama-repo/"
  // Saat dev lokal, fallback ke "./" agar tetap bisa dipakai dengan npm run dev
  base: process.env.VITE_BASE_PATH ?? './',
  plugins: [inspectAttr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
