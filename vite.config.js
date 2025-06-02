import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // <- allow external access (important with VPN)
    port: 5173,       // <- or any available port
    strictPort: true  // <- fail if port is taken, helpful for debugging
  }
})
