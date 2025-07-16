// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  vite: {
      build: {
          rollupOptions: {
              // external: ["@astrojs/rss"],
          },
      },
  },

  integrations: [preact()],
});