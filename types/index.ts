import type { TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces'

export declare interface PDFOptions {
  katex?: boolean
  fonts?: TFontDictionary
  fontsPath?: string
  bold?: boolean
  docDefinition?: Partial<TDocumentDefinitions>
  pagedjsPlugins?: string[]
}
