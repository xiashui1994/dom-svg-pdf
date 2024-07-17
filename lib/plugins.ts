import { Handler, Polisher } from 'pagedjs'
import type { PDFOptions } from '../types/index'
import { fallbackStyles, removeStyles } from './styles'

export function stylesHandler(options?: PDFOptions) {
  const { docDefinition = {}, katex = false } = options || {}
  const styles = fallbackStyles(docDefinition.defaultStyle?.font, katex)
  class stylesHandler extends Handler {
    constructor(chunker: any, polisher: any, caller: any) {
      super(chunker, polisher, caller)
    }

    beforeParsed() {
      const polisher = new Polisher()
      polisher.insert(styles)
      removeStyles()
    }
  }
  return stylesHandler
}
