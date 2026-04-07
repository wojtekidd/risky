import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// On GitHub Pages project sites the app lives at /<repo-name>/
// The workflow injects VITE_BASE_PATH automatically from github.event.repository.name.
// For local dev or a custom domain (user/org site) it falls back to '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
