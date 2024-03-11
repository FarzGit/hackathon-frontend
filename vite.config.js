import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api/users/':{
        target:'http://44.204.65.112:8000',
        changeOrigin:true,
        // rewrite: (path) => path.replace(/^\/api/, ''), 
      }
    }
  }
})
