import Handler from '../handler.js'

export default UndisplayedFilter
declare class UndisplayedFilter extends Handler {
  displayRules: object
  onDeclaration(declaration: any, dItem: any, dList: any, rule: any): void
  filter(content: any): void
  sorter(a: any, b: any): number
  sortDisplayedSelectors(content: any, displayRules?: any[]): {
    matches: any[]
    selectors: any[]
  }
  removable(element: any): boolean
}
