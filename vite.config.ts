import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `
          @use "/src/app/styles/variables.scss" as vars;
          // @import "/src/app/styles/variables.scss";
        `,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/react-redux-user-list",
});
