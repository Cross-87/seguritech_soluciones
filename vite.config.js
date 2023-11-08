import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://github.com/Cross-87/seguritech_soluciones.git",
  plugins: [react()]
})
