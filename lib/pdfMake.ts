import pdfMake from 'pdfmake/build/pdfmake.min'
import type { Content, PageOrientation, PageSize, TDocumentDefinitions } from 'pdfmake/interfaces'
import type { PDFOptions } from '../types/index'
import { getFonts } from './fonts'

export async function createPdf(content: Content, pageOrientation: PageOrientation | undefined, pageSize: PageSize | undefined, options?: PDFOptions) {
  const font: string = 'LXGWNeoXiHei'
  const { docDefinition = {}, katex = false, fonts = {}, fontsPath = window.location.origin } = options || {}

  // pdfMake 配置
  const docOptions: TDocumentDefinitions = {
    defaultStyle: { font },
    content,
    pageSize,
    pageMargins: [0, 0, 0, 0],
    pageOrientation,
    ...docDefinition,
  };

  (<any>pdfMake).fonts = { ...getFonts(docOptions.defaultStyle?.font === font, katex, fontsPath), ...fonts }

  return pdfMake.createPdf(docOptions)
}
