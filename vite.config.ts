import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
          icons: ['react-icons']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    },
    proxy: {
      "/images": "http://localhost:5000",
    }
  },
})
