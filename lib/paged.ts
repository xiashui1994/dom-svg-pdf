import { Handler, Polisher, Previewer, registerHandlers } from 'pagedjs'
import type { PDFOptions } from '../types/index'
import { fallbackStyles, removeStyles } from './styles'

export async function domPaged(options?: PDFOptions) {
  const { katex = false, defaultFont = '' } = options || {}
  const styles = fallbackStyles(defaultFont, katex)
  class pagedHandler extends Handler {
    constructor(chunker: any, polisher: any, caller: any) {
      super(chunker, polisher, caller)
    }

    beforeParsed() {
      const polisher = new Polisher()
      polisher.insert(styles)
      removeStyles()
    }
  }
  registerHandlers(pagedHandler)

  const paged = new Previewer()
  await paged.preview()
  return paged
}
