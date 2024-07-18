import type { TCreatedPdf } from 'pdfmake/build/pdfmake'
import type { Content, TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces'
import type { Previewer } from 'pagedjs'

export declare interface PDFOptions {
  katex?: boolean
  fonts?: TFontDictionary
  fontsPath?: string
  bold?: boolean
  docDefinition?: Partial<TDocumentDefinitions>
  pageNumber?: number
  pagedjsPlugins?: any[]
  beforePaged?: () => void
  afterPaged?: (paged: Previewer) => void
  beforeToSvg?: (page: any, pages: any[]) => void
  afterToSvg?: (svg: string, page: any, pages: any[]) => void
  beforePdfMake?: (content: Content, docDefinition: TDocumentDefinitions) => void
  afterPdfMake?: (pdf: TCreatedPdf, content: Content, docDefinition: TDocumentDefinitions) => void
}
