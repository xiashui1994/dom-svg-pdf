import pdfMake from 'pdfmake/build/pdfmake.min'
import type { Content, PageOrientation, PageSize, TDocumentDefinitions } from 'pdfmake/interfaces'
import type { PDFOptions } from '../types/index'
import { getFonts } from './fonts'

export async function createPdf(content: Content, pageOrientation: PageOrientation | undefined, pageSize: PageSize | undefined, options?: PDFOptions) {
  const font: string = 'LXGWNeoXiHei'
  const { docDefinition = {}, katex = false, fonts = {}, fontsPath = window.location.origin, beforePdfMake, afterPdfMake } = options || {}

  // pdfMake 配置
  const docOptions: TDocumentDefinitions = {
    defaultStyle: { font },
    content,
    pageSize,
    pageMargins: [0, 0, 0, 0],
    pageOrientation,
    ...docDefinition,
  }

  await beforePdfMake?.(content, docOptions);
  (<any>pdfMake).fonts = { ...getFonts(docOptions.defaultStyle?.font === font, katex, fontsPath), ...fonts }
  const PDF = pdfMake.createPdf(docOptions)
  await afterPdfMake?.(PDF, content, docOptions)
  return PDF
}
