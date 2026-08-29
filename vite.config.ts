// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Detect the Lovable development environment.
// GitHub Actions will use the static configuration below.
const isLovableSandbox =
  process.env["LOVABLE_SANDBOX"] === "1" ||
  !!process.env["DEV_SERVER__PROJECT_PATH"];

export default defineConfig({
  // GitHub Pages hosts the website inside the repository path.
  vite: {
    base: isLovableSandbox ? "/" : "/winv-site/",
  },

  // Keep the normal server configuration inside Lovable,
  // but create a fully static site when building outside Lovable.
  nitro: isLovableSandbox ? {} : false,

  tanstackStart: isLovableSandbox
    ? {
        // Keep your existing SSR server entry for Lovable.
        server: { entry: "server" },
      }
    : {
        // Generate static HTML files for GitHub Pages.
        prerender: {
          enabled: true,
          crawlLinks: true,
        },
      },
});
