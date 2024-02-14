import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://privetdi.github.io/vue_device",
  plugins: [vue()],
})
