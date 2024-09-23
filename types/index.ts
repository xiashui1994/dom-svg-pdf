import type { TCreatedPdf } from 'pdfmake/build/pdfmake'
import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces'
import type { registerHook } from '@vivliostyle/core'

export declare interface PDFOptions {
  katex?: boolean
  fonts?: TFontDictionary
  fontsPath?: string
  bold?: boolean
  docDefinition?: Partial<TDocumentDefinitions>
  pageNumber?: number
  print?: boolean
  printPlugins?: Parameters<typeof registerHook>[]
  beforePaged?: () => void
  afterPaged?: (paged: Paged) => void
  beforeToSvg?: (page: HTMLElement, index: number, total: number) => void
  afterToSvg?: (svg: string, index: number) => void
  beforePdfMake?: (docDefinition: TDocumentDefinitions) => void
  afterPdfMake?: (pdf: TCreatedPdf, docDefinition: TDocumentDefinitions) => void
}

export declare interface Paged {
  width: number
  height: number
  pages: HTMLElement[]
}

export declare type ReturnType<T> = T extends true ? Window : TCreatedPdf
