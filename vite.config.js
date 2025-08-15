import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

 "scripts": {
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
// Replace with your repo name
export default defineConfig({
  base: '/e-commerce-static/',
  plugins: [react()],
  
 
})
