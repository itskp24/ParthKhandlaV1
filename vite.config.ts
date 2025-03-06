import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
      process.env.REPL_ID !== undefined
      ? [
        await import("@replit/vite-plugin-cartographer").then((m) =>
          m.cartographer()
        ),
      ]
      : []),
  ],
  server: {
    port: 5173,
    open: true,

  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "shared"),

    },
  },
  root: __dirname,
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// export default defineConfig({
//   plugins: [
//     react(),
//     runtimeErrorOverlay(),
//     themePlugin(),
//     ...(process.env.NODE_ENV !== "production" &&
//       process.env.REPL_ID !== undefined
//       ? [
//         await import("@replit/vite-plugin-cartographer").then((m) =>
//           m.cartographer(),
//         ),
//       ]
//       : [])
//   ],
//   server: {
//     port: 5173,
//     open: true,
//   },
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
//   build: {
//     outDir: "dist",
//     sourcemap: true,
//   },
// });
