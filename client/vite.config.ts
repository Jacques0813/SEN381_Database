import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': {
        target: 'https://sen-381-database.vercel.app/',
        changeOrigin: true
      }
    }
  },
  base: 'https://sen-381-database.vercel.app',
})
