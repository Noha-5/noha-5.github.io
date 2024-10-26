import { ViteImageOptimizer } from "vite-plugin-image-optimizer"
import { defineConfig } from "vite"

export default defineConfig(() => {
  return {
    root: "src/",
    publicDir: "../public/",
    base: "./",
    server: {
      host: true, // Open to local network and display URL
      open: !(
        "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env
      ), // Open if it's not a CodeSandbox
    },
    build: {
      outDir: "../dist", // Output in the dist/ folder
      emptyOutDir: true, // Empty the folder first
    },
    plugins: [
      ViteImageOptimizer({
        png: {
          quality: 40,
        },
        jpg: {
          quality: 40,
        },
      }),
    ],
  }
})
