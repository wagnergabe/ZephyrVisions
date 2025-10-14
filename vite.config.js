// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    strictPort: true,
    host: '127.0.0.1',   // bind IPv4
    open: true,
  },
})
