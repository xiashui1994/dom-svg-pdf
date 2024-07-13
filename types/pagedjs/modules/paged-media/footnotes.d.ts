import Handler from '../handler.js'

export default Footnotes
declare class Footnotes extends Handler {
  footnotes: any
  needsLayout: any[]
  overflow: any[]
  onDeclaration(declaration: any, dItem: any, dList: any, rule: any): void
  onPseudoSelector(pseudoNode: any, pItem: any, pList: any, selector: any, rule: any): void
  afterParsed(parsed: any): void
  processFootnotes(parsed: any, notes: any): void
  processFootnoteContainer(node: any): void
  renderNode(node: any): void
  findVisibleFootnotes(notes: any, node: any): void
  recalcFootnotesHeight(node: any, noteContent: any, pageArea: any, noteCall: any, needsNoteCall: any): void
  moveFootnote(node: any, pageArea: any, needsNoteCall: any): void
  createFootnoteCall(node: any): HTMLAnchorElement
  afterPageLayout(pageElement: any, page: any, breakToken: any, chunker: any): void
  handleAlignment(node: any): void
  beforePageLayout(page: any): void
  afterOverflowRemoved(removed: any, rendered: any): void
  afterOverflowAdded(rendered: any): void
  marginsHeight(element: any, total?: boolean): number
  paddingHeight(element: any, total?: boolean): number
  borderHeight(element: any, total?: boolean): number
}
