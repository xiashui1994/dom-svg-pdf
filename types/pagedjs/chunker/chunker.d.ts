import type Queue from '../utils/queue.js'
import type ContentParser from './parser.js'
import type Page from './page.js'

export default Chunker
/**
 * Chop up text into flows
 * @class
 */
declare class Chunker {
  constructor(content: any, renderTo: any, options: any)
  settings: any
  hooks: object
  pages: any[]
  total: number
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

  q: Queue
  stopped: boolean
  rendered: boolean
  content: any
  charsPerBreak: any[]
  setup(renderTo: any): void
  pagesArea: HTMLDivElement
  pageTemplate: HTMLTemplateElement
  flow(content: any, renderTo: any): Promise<this>
  source: ContentParser
  breakToken: any
  render(parsed: any, startAt: any): Promise<any>
  start(): void
  stop(): void
  renderOnIdle(renderer: any): any
  renderAsync(renderer: any): Promise<any>
  handleBreaks(node: any, force: any): Promise<void>
  layout(content: any, startAt: any): unknown
  recoredCharLength(length: any): void
  maxChars: number
  removePages(fromIndex?: number): void
  addPage(blank: any): Page
  clonePage(originalPage: any): Promise<void>
  loadFonts(): any
  destroy(): void
}
