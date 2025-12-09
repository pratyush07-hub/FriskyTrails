import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Serve assets from the relocated public directory under src/public
  publicDir: 'src/public',
  plugins: [
    tailwindcss(),
    react()],
})
