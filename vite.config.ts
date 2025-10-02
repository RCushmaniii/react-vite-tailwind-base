import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs-extra'

// Custom plugin to copy markdown files to the build output
function copyMarkdownFiles() {
  return {
    name: 'copy-markdown-files',
    writeBundle() {
      try {
        // Copy README.md from project root to dist
        if (fs.existsSync('README.md')) {
          fs.copySync('README.md', 'dist/README.md')
        }
        
        // Create a function to recursively find and copy all markdown files
        function copyMarkdownFilesRecursively(sourceDir: string, targetDir: string) {
          // Ensure the target directory exists
          fs.ensureDirSync(targetDir)
          
          // Get all files and directories in the source directory
          const items = fs.readdirSync(sourceDir)
          
          // Process each item
          items.forEach(item => {
            const sourcePath = `${sourceDir}/${item}`
            const targetPath = `${targetDir}/${item}`
            
            // Check if it's a directory
            if (fs.statSync(sourcePath).isDirectory()) {
              // Skip node_modules and dist directories
              if (item !== 'node_modules' && item !== 'dist') {
                // Recursively process subdirectories
                copyMarkdownFilesRecursively(sourcePath, targetPath)
              }
            } 
            // If it's a markdown file, copy it
            else if (item.endsWith('.md')) {
              fs.copySync(sourcePath, targetPath)
              console.log(`Copied: ${sourcePath} -> ${targetPath}`)
            }
          })
        }
        
        // Start the recursive copy from the project root
        copyMarkdownFilesRecursively('.', 'dist')
        
        // Ensure the legal directory is copied
        if (fs.existsSync('public/legal')) {
          fs.copySync('public/legal', 'dist/legal')
          console.log('✅ Copied legal markdown files to dist/legal')
        }
        
        console.log('✅ Successfully copied all markdown files to dist')
      } catch (error) {
        console.error('❌ Error copying markdown files:', error)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyMarkdownFiles()],
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
