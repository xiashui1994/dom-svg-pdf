import pdfMake from 'pdfmake/build/pdfmake.min'
import type { TDocumentDefinitions } from 'pdfmake/interfaces'
import type { PDFOptions } from '../types/index'
import { getFonts } from './fonts'

export async function createPdf(options?: PDFOptions) {
  const font: string = 'LXGWNeoXiHei'
  const { katex = false, fonts = {}, fontsPath = window.location.origin } = options || {}

  // pdfMake 配置
  const docOptions: TDocumentDefinitions = {
    defaultStyle: { font },
    content: [],
  };

  (<any>pdfMake).fonts = { ...getFonts(docOptions.defaultStyle?.font === font, katex, fontsPath), ...fonts }

  return pdfMake.createPdf(docOptions)
}
