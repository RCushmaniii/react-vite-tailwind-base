import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  // Add public directory configuration
  publicDir: 'public',
  build: {
    outDir: 'dist',
    // Ensure assets are copied
    assetsInlineLimit: 0,
  },
  server: {
    // Configure the dev server to handle client-side routing
    host: true,
    port: 3000,
    strictPort: false,
    open: true,
    // Use middleware to handle client-side routing
    middlewareMode: false,
    fs: {
      // Prevent serving files from root that might conflict with routes
      deny: ['components.json']
    }
  },
  preview: {
    // Configure the preview server
    host: true,
    port: 4173,
    strictPort: false,
    open: true,
  }
})
