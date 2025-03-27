import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/my-resume-web/', // Assure-toi que c'est un chemin absolu
  plugins: [vue()],
})
