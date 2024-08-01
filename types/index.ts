import type { TCreatedPdf } from 'pdfmake/build/pdfmake'
import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces'
import type { Previewer } from 'pagedjs'

export declare interface PDFOptions {
  katex?: boolean
  fonts?: TFontDictionary
  fontsPath?: string
  bold?: boolean
  docDefinition?: Partial<TDocumentDefinitions>
  pageNumber?: number
  pagedjsConfig?: Partial<{
    content: DocumentFragment | string
    stylesheets: any
    renderTo: HTMLElement
    settings: any
  }>
  pagedjsPlugins?: any[]
  beforePaged?: () => void
  afterPaged?: (paged: Previewer) => void
  beforeToSvg?: (page: any) => void
  afterToSvg?: (svg: string, page: any) => void
  beforePdfMake?: (docDefinition: TDocumentDefinitions) => void
  afterPdfMake?: (pdf: TCreatedPdf, docDefinition: TDocumentDefinitions) => void
}
