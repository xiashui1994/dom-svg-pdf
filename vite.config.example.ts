import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    assetsInlineLimit: 409600,
    copyPublicDir: false,
  },
})
