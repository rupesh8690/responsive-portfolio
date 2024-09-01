import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will bind to 0.0.0.0 instead of localhost
    port: 3000, // Specify the port you want to use (optional)
  },
})
