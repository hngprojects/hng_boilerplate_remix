import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "~": "/app", // Adjust the alias to point to the 'app' folder
    },
  },
  build: {
    rollupOptions: {
      external: [
        // Exclude your test files from being bundled
        "**/tests/**",
      ],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    include: ["*.test.{js,ts,jsx,tsx}", "app/**/*.test.{js,ts,jsx,tsx}"],
    exclude: ["node_modules/**", "dist/**"],
  },
});
