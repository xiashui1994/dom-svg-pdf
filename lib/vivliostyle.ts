import { printHTML } from '@vivliostyle/core'
import type { PDFOptions, Paged } from '../types/index'
import { allStylesheets, fallbackStyles } from './styles'
import { getContainerSize, getSerializedElements, resetContainerStyle } from './dom'

export async function domPaged(el: HTMLElement, options?: PDFOptions): Promise<Paged> {
  const { docDefinition = {}, katex = false, printConfig = {} } = options || {}
  return new Promise((resolve, reject) => {
    const htmlDoc = `<!doctype html><html><head>${allStylesheets()}<style>${fallbackStyles(docDefinition.defaultStyle?.font, katex)}</style></head><body>${el.innerHTML}</body></html>`
    const config = {
      title: document.title || 'dom-svg-pdf',
      printCallback: (iframeWin: Window) => {
        resetContainerStyle(iframeWin, '[data-vivliostyle-spread-container]', { zoom: '1', transform: 'none', transformOrigin: 'center' })
        const { width, height } = getContainerSize(iframeWin, '[data-vivliostyle-outer-zoom-box]')
        const pages = getSerializedElements(iframeWin, '[data-vivliostyle-page-container]')
        resolve({ width, height, pages })
      },
      errorCallback: (message: string) => reject(message),
      hideIframe: true,
      removeIframe: false,
      ...printConfig,
    }
    printHTML(htmlDoc, config)
  })
}
