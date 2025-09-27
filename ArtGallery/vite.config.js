import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/OnilineArtGallery-FULL-STACK/', // <-- Must exactly match your repo name, including slashes!
})
