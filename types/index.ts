import type { TCreatedPdf } from 'pdfmake/build/pdfmake'
import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces'
import type { PrintConfig } from '@vivliostyle/core'

export declare interface PDFOptions {
  katex?: boolean
  fonts?: TFontDictionary
  fontsPath?: string
  bold?: boolean
  docDefinition?: Partial<TDocumentDefinitions>
  pageNumber?: number
  printConfig?: Partial<PrintConfig>
  beforeToSvg?: (page: any) => void
  afterToSvg?: (svg: string, page: any) => void
  beforePdfMake?: (docDefinition: TDocumentDefinitions) => void
  afterPdfMake?: (pdf: TCreatedPdf, docDefinition: TDocumentDefinitions) => void
}

export declare interface Paged {
  width: string
  height: string
  pages: HTMLElement[]
}
