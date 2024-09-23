import { CoreViewer } from '@vivliostyle/core'
import { createIframe } from './dom'

const srcdoc = `
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

function preparePrint(iframeWin: Window, htmlDoc: string): Promise<CoreViewer> {
  const docBlob = new Blob([htmlDoc], { type: 'text/html' })
  const docURL = URL.createObjectURL(docBlob)
  const Viewer = new CoreViewer({
    viewportElement: iframeWin.document.body.firstElementChild as HTMLElement,
    window: iframeWin,
    debug: true,
  }, {
    pixelRatio: 0,
    zoom: 1,
  })
  return new Promise((resolve) => {
    Viewer.addListener('readystatechange', () => {
      if (Viewer.readyState === 'complete')
        resolve(Viewer)
    })
    Viewer.loadDocument({ url: docURL })
  })
}

export async function printHTML(htmlDoc: string) {
  const iframe = await createIframe(srcdoc)
  const iframeWin = iframe.contentWindow!
  const Viewer = await preparePrint(iframeWin, htmlDoc)
  const pageSizes = Viewer.getPageSizes()
  return { iframeWin, ...pageSizes[0] }
}
