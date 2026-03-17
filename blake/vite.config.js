import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/blake/',
  build: { outDir: '../dist/blake', emptyOutDir: true },
})
