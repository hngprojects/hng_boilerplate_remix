// vite.config.ts
import { vitePlugin as remix } from "file:///C:/Users/HP/Desktop/hng_boilerplate_remix/node_modules/.pnpm/@remix-run+dev@2.10.3_@remix-run+react@2.10.3_@remix-run+serve@2.10.3_typescript@5.5.3_vite@5.3.4/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/HP/Desktop/hng_boilerplate_remix/node_modules/.pnpm/vite@5.3.4/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/HP/Desktop/hng_boilerplate_remix/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.5.3_vite@5.3.4/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      "~": "/app"
      // Adjust the alias to point to the 'app' folder
    }
  },
  build: {
    rollupOptions: {
      external: [
        // Exclude your test files from being bundled
        "**/tests/**"
      ]
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    include: ["*.test.{js,ts,jsx,tsx}", "app/**/*.test.{js,ts,jsx,tsx}"],
    exclude: ["node_modules/**", "dist/**"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXGhuZ19ib2lsZXJwbGF0ZV9yZW1peFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcRGVza3RvcFxcXFxobmdfYm9pbGVycGxhdGVfcmVtaXhcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hQL0Rlc2t0b3AvaG5nX2JvaWxlcnBsYXRlX3JlbWl4L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZW1peCh7XHJcbiAgICAgIGZ1dHVyZToge1xyXG4gICAgICAgIHYzX2ZldGNoZXJQZXJzaXN0OiB0cnVlLFxyXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxyXG4gICAgICAgIHYzX3Rocm93QWJvcnRSZWFzb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiflwiOiBcIi9hcHBcIiwgLy8gQWRqdXN0IHRoZSBhbGlhcyB0byBwb2ludCB0byB0aGUgJ2FwcCcgZm9sZGVyXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcclxuICAgICAgICAvLyBFeGNsdWRlIHlvdXIgdGVzdCBmaWxlcyBmcm9tIGJlaW5nIGJ1bmRsZWRcclxuICAgICAgICBcIioqL3Rlc3RzLyoqXCIsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXHJcbiAgICBzZXR1cEZpbGVzOiBcIi4vc2V0dXBUZXN0cy50c1wiLFxyXG4gICAgaW5jbHVkZTogW1wiKi50ZXN0Lntqcyx0cyxqc3gsdHN4fVwiLCBcImFwcC8qKi8qLnRlc3Que2pzLHRzLGpzeCx0c3h9XCJdLFxyXG4gICAgZXhjbHVkZTogW1wibm9kZV9tb2R1bGVzLyoqXCIsIFwiZGlzdC8qKlwiXSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VCxTQUFTLGNBQWMsYUFBYTtBQUMzVixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxRQUNuQixzQkFBc0I7QUFBQSxRQUN0QixxQkFBcUI7QUFBQSxNQUN2QjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUE7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsUUFFUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLElBQ1osU0FBUyxDQUFDLDBCQUEwQiwrQkFBK0I7QUFBQSxJQUNuRSxTQUFTLENBQUMsbUJBQW1CLFNBQVM7QUFBQSxFQUN4QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
