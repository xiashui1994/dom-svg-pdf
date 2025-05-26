import type { registerHook } from '@vivliostyle/core'
import type { TCreatedPdf, vfs } from 'pdfmake/build/pdfmake'
import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces'

export declare interface PDFOptions {
  katex?: boolean
  fonts?: TFontDictionary
  vfs?: VirtualFonts
  bold?: boolean
  docDefinition?: Partial<TDocumentDefinitions>
  pageNumber?: number
  print?: boolean
  printPlugins?: Parameters<typeof registerHook>[]
  beforePaged?: () => void
  afterPaged?: (paged: Paged) => void
  beforeToSvg?: (page: HTMLElement, index: number, total: number) => void
  afterToSvg?: (svg: string, index: number, total: number) => void
  beforePdfMake?: (docDefinition: TDocumentDefinitions) => void
  afterPdfMake?: (pdf: TCreatedPdf, docDefinition: TDocumentDefinitions) => void
}

export declare interface PageSize {
  width: number
  height: number
}

export declare interface Paged {
  pageSize: PageSize
  pages: HTMLElement[]
}

export declare type ReturnType<T> = T extends true ? Window : TCreatedPdf

export declare type VirtualFonts = typeof vfs

export declare interface ElOptions {
  el: string
  stylesheet?: string
  allStylesheets?: boolean
}
