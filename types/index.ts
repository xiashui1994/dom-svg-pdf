import type { TFontDictionary } from 'pdfmake/interfaces'

export declare interface PDFOptions {
  katex?: boolean
  fonts?: TFontDictionary
  fontsPath?: string
  defaultFont?: string
}
