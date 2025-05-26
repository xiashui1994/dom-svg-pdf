import { CoreViewer } from '@vivliostyle/core'
import { createIframe } from './dom'
import { convertToUnit } from './utils'

const content = `
  <!DOCTYPE html>
  <html data-vivliostyle-paginated="true">
    <head>
      <meta charset='utf-8'/>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <style>
        html[data-vivliostyle-paginated] {
          width: 100%;
          height: 100%;
        }
        html[data-vivliostyle-paginated] body,
        html[data-vivliostyle-paginated] [data-vivliostyle-viewer-viewport] {
          width: 100% !important;
          height: 100% !important;
        }
        html[data-vivliostyle-paginated],
        html[data-vivliostyle-paginated] body {
          margin: 0;
          padding: 0;
        }
        html[data-vivliostyle-paginated] [data-vivliostyle-page-container] {
          display: block !important;
        }
      </style>
      <style id='vivliostyle-page-rules'></style>
    </head>
    <body>
      <div id="vivliostyle-viewer-viewport"></div>
    </body>
  </html>`

function preparePrint(iframeWin: Window, htmlDoc: string | string[]): Promise<CoreViewer> {
  const objectUrls: string[] = []
  const options = (Array.isArray(htmlDoc) ? htmlDoc : [htmlDoc]).map((doc) => {
    const docBlob = new Blob([doc], { type: 'text/html' })
    const docURL = URL.createObjectURL(docBlob)
    objectUrls.push(docURL)
    return { url: docURL }
  })
  const viewportElement = iframeWin.document.body.firstElementChild as HTMLElement
  const Viewer = new CoreViewer({
    viewportElement,
    window: iframeWin,
    debug: true,
  }, {
    pixelRatio: 0,
    zoom: 1,
  })
  return new Promise<CoreViewer>((resolve) => {
    const handleReadyStateChange = () => {
      if (Viewer.readyState === 'complete') {
        objectUrls.forEach(url => URL.revokeObjectURL(url))
        resolve(Viewer)
      }
    }
    Viewer.addListener('readystatechange', handleReadyStateChange)
    Viewer.loadDocument(options)
  })
}

export async function printHTML(htmlDoc: string | string[]) {
  const iframe = await createIframe(content, { width: '0', height: '0', borderWidth: '0' })
  const iframeWin = iframe.contentWindow!
  const Viewer = await preparePrint(iframeWin, htmlDoc)
  const pageSizes = Viewer.getPageSizes()
  const { width, height } = pageSizes[0] || {}
  const pageSize = { width: convertToUnit(`${width}px`) || 0, height: convertToUnit(`${height}px`) || 0 }
  return { iframeWin, pageSize }
}
