import { plugin, printHTML } from '@vivliostyle/core'
import type { PDFOptions, Paged } from '../types/index'
import { allStylesheets, fallbackStyles } from './styles'
import { getContainerSize, getSerializedElements, resetContainerStyle } from './dom'

export async function domPaged(el: HTMLElement, options?: PDFOptions): Promise<Paged | void> {
  const { docDefinition = {}, katex = false, printConfig = {}, printPlugins = [], beforePaged, afterPaged } = options || {}
  await beforePaged?.()
  return new Promise((resolve, reject) => {
    const htmlDoc = `<!doctype html><html><head>${allStylesheets()}<style>${fallbackStyles(docDefinition.defaultStyle?.font, katex)}</style></head><body>${el.innerHTML}</body></html>`
    const { printCallback, ...rest } = printConfig
    const config = {
      title: document.title || 'dom-svg-pdf',
      printCallback: async (iframeWin: Window) => {
        resetContainerStyle(iframeWin, '[data-vivliostyle-spread-container]', { zoom: '1', transform: 'none', transformOrigin: 'center' })
        const { width, height } = getContainerSize(iframeWin, '[data-vivliostyle-outer-zoom-box]')
        const pages = getSerializedElements(iframeWin, '[data-vivliostyle-page-container]')
        await afterPaged?.({ width, height, pages })
        if (printCallback) {
          printCallback(iframeWin)
          return resolve()
        }
        resolve({ width, height, pages })
      },
      errorCallback: (message: string) => reject(message),
      hideIframe: true,
      removeIframe: false,
      ...rest,
    }
    printPlugins.forEach(p => plugin.registerHook(...p))
    printHTML(htmlDoc, config)
  })
}
