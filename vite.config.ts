// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { fileURLToPath } from "node:url";
import svgr from "vite-plugin-svgr";

const rrShim = fileURLToPath(
  new URL("./src/legacy/rr-shim.jsx", import.meta.url),
);

export default defineConfig({
  // Vercel serves the app as a static SPA (see vercel.json), so skip the Nitro server build there.
  nitro: process.env.VERCEL ? false : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // The ported app is a classic client-rendered SPA (touches window during
    // render), so disable SSR and serve it exactly like the original.
    spa: { enabled: true },
  },
  vite: {
    plugins: [svgr()],
    resolve: {
      alias: [
        // The legacy app imports react-router-dom / react-router; route them
        // through the TanStack compatibility shim so its code stays unchanged.
        { find: /^react-router-dom$/, replacement: rrShim },
        { find: /^react-router$/, replacement: rrShim },
      ],
    },
  },
});
