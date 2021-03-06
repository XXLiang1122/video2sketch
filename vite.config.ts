import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  alias: {
    '/@': resolve(__dirname, 'src')
  },
  build: {
    base: '/utils/dist',
    assetsDir: 'static'
  }
})
