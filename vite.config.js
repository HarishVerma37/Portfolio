import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["5dd6-2405-204-30ab-1bec-1097-269e-63be-4cc1.ngrok-free.app"], // Ngrok के होस्ट को allow करें
  },
})
