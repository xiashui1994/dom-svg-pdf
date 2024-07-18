import { Handler } from 'pagedjs'
import type { PDFOptions } from '../types/index'
import { insertStyles } from './dom'
import { fallbackStyles, removeStyles } from './styles'

export function stylesHandler(options?: PDFOptions) {
  const { docDefinition = {}, katex = false } = options || {}
  const styles = fallbackStyles(docDefinition.defaultStyle?.font, katex)
  class stylesHandler extends Handler {
    beforeParsed() {
      insertStyles(styles)
      removeStyles()
    }
  }
  return stylesHandler
}
