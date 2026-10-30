// Builds the static artifact preview: `npx vite build --config artifact/vite.config.ts`.
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const here = (path: string) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  root: here("."),
  base: "./",
  publicDir: here("../public"),
  plugins: [svgr(), react(), tailwindcss()],
  define: {
    "import.meta.env.VITE_SANDBOX": JSON.stringify("1"),
  },
  resolve: {
    alias: [
      { find: /^react-router-dom$/, replacement: here("../src/legacy/rr-shim.jsx") },
      { find: /^react-router$/, replacement: here("../src/legacy/rr-shim.jsx") },
      { find: /^@\//, replacement: here("../src/") },
    ],
  },
  build: {
    outDir: here("../dist-artifact"),
    emptyOutDir: true,
    assetsInlineLimit: 0,
  },
});
