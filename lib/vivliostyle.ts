import { plugin } from '@vivliostyle/core'
import type { PDFOptions, Paged } from '../types/index'
import { printHTML } from './print'
import { allStylesheets, fallbackStyles } from './styles'
import { getSerializedElements } from './dom'

export async function domPaged(el: HTMLElement, options?: PDFOptions): Promise<Paged & { iframeWin: Window }> {
  const { docDefinition = {}, katex = false, printPlugins = [], beforePaged, afterPaged } = options || {}
  await beforePaged?.()
  const htmlDoc = `<!doctype html><html><head>${allStylesheets()}<style>${fallbackStyles(docDefinition.defaultStyle?.font, katex)}</style></head><body>${el.innerHTML}</body></html>`
  printPlugins.forEach(p => plugin.registerHook(...p))
  const { width, height, iframeWin } = await printHTML(htmlDoc)
  const pages = getSerializedElements(iframeWin, '[data-vivliostyle-page-container]')
  await afterPaged?.({ width, height, pages })
  return { width, height, pages, iframeWin }
}
