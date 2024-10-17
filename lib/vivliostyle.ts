import type { Paged, PDFOptions } from '../types/index'
import { plugin } from '@vivliostyle/core'
import { getSerializedElements } from './dom'
import { printHTML } from './print'
import { allStylesheets, fallbackStyles } from './styles'

export async function domPaged(el: HTMLElement, options?: PDFOptions): Promise<Paged & { iframeWin: Window }> {
  const { docDefinition = {}, katex = false, printPlugins = [], beforePaged, afterPaged } = options || {}
  await beforePaged?.()
  const htmlDoc = `<!doctype html><html><head>${allStylesheets()}<style>${fallbackStyles(docDefinition.defaultStyle?.font, katex)}</style></head><body>${el.innerHTML}</body></html>`
  printPlugins.forEach(p => plugin.registerHook(...p))
  const { pageSize, iframeWin } = await printHTML(htmlDoc)
  const pages = getSerializedElements(iframeWin, '[data-vivliostyle-page-container]')
  await afterPaged?.({ pageSize, pages })
  return { pageSize, pages, iframeWin }
}
