import type Polisher from '../polisher/polisher.js'
import type Chunker from '../chunker/chunker.js'

export default Previewer
declare class Previewer {
  constructor(options: any)
  settings: any
  polisher: Polisher
  chunker: Chunker
  hooks: any
  size: {
    width: {
      value: number
      unit: string
    }
    height: {
      value: number
      unit: string
    }
    format: any
    orientation: any
  }

  initializeHandlers(): import('../utils/handlers.js').Handlers
  atpages: any
  registerHandlers(...args: any[]): any
  getParams(name: any): any
  wrapContent(): any
  removeStyles(doc?: Document): any[]
  preview(content: any, stylesheets: any, renderTo: any): Promise<Chunker>
  handlers: import('../utils/handlers.js').Handlers
}
