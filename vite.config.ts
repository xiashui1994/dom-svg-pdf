import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  server: {
    host: true,
    open: true,
  },
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Counter',
      fileName: 'counter',
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
