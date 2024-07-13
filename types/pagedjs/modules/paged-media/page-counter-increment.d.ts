import Handler from '../handler.js'

export default PageCounterIncrement
declare class PageCounterIncrement extends Handler {
  styleSheet: any
  pageCounter: {
    name: string
    increments: any
    resets: any
  }
  onDeclaration(declaration: any, dItem: any, dList: any, rule: any): void
  afterParsed(_: any): void
  handleIncrement(declaration: any, rule: any): {
    selector: any
    number: any
  }
  insertRule(rule: any): void
}
