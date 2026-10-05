import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { defineConfig } from 'vite'

// Builds the whole app into ONE self-contained index.html (JS + CSS inlined).
// Run with: npm run build:single
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: '../github-upload',
    emptyOutDir: true,
  },
})
