import type { ElOptions, Paged, PDFOptions } from '../types/index'
import { plugin } from '@vivliostyle/core'
import { getSerializedElements } from './dom'
import { printHTML } from './print'
import { commonCSS, getAllStylesheets, patchStyles } from './styles'

export async function domPaged(el: string | ElOptions | ElOptions[], options?: PDFOptions): Promise<Paged & { iframeWin: Window }> {
  const { docDefinition = {}, katex = false, printPlugins = [], beforePaged, afterPaged } = options || {}
  await beforePaged?.()
  const elements = typeof el === 'string' ? [{ el }] : Array.isArray(el) ? el : [el]
  const htmlDocs = elements.map(({ el, stylesheet = '', allStylesheets = true }) => {
    const domElement = window.document.querySelector(el)!
    const headContent = [
      allStylesheets ? getAllStylesheets() : '',
      katex ? `<style>${patchStyles(docDefinition.defaultStyle?.font, katex)}</style>` : '',
      stylesheet ? `<style>${stylesheet}</style>` : '',
      `<style>${commonCSS}</style>`,
    ].filter(Boolean).join('')
    return `<!doctype html><html><head>${headContent}</head><body>${domElement.outerHTML}</body></html>`
  }).filter(Boolean)
  printPlugins.forEach(p => plugin.registerHook(...p))
  const { pageSize, iframeWin } = await printHTML(htmlDocs)
  const pages = getSerializedElements(iframeWin, '[data-vivliostyle-page-container]')
  await afterPaged?.({ pageSize, pages })
  return { pageSize, pages, iframeWin }
}
