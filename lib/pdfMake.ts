import type { Content, PageSize, TDocumentDefinitions } from 'pdfmake/interfaces'
import type { PDFOptions } from '../types/index'
import pdfMake from 'pdfmake/build/pdfmake.min'
import { getFonts } from './fonts'

export async function createPdf(content: Content, pageSize: PageSize, options?: PDFOptions) {
  const font: string = 'LXGWNeoXiHei'
  const { docDefinition = {}, katex = false, fonts = {}, fontsPath = window.location.origin, beforePdfMake, afterPdfMake } = options || {}

  // pdfMake 配置
  const docOptions: TDocumentDefinitions = {
    defaultStyle: { font },
    content,
    pageSize,
    pageMargins: [0, 0, 0, 0],
    ...docDefinition,
  }

  await beforePdfMake?.(docOptions);
  (<any>pdfMake).fonts = { ...getFonts(docOptions.defaultStyle?.font === font, katex, fontsPath), ...fonts }
  const PDF = pdfMake.createPdf(docOptions)
  await afterPdfMake?.(PDF, docOptions)
  return PDF
}
