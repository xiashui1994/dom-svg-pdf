import Handler from '../handler.js'

export default Breaks
declare class Breaks extends Handler {
  breaks: any
  onDeclaration(declaration: any, dItem: any, dList: any, rule: any): void
  afterParsed(parsed: any): void
  processBreaks(parsed: any, breaks: any): void
  mergeBreaks(pageBreaks: any, newBreaks: any): any
  addBreakAttributes(pageElement: any, page: any): void
  afterPageLayout(pageElement: any, page: any): void
}
