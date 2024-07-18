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
      name: 'domSvgPdf',
      fileName: 'dom-svg-pdf',
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['dom2svg', 'pdfmake/build/pdfmake.min'],
      output: {
        globals: {
          'dom2svg': 'dom2svg',
          'pdfmake/build/pdfmake.min': 'pdfmake',
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
