import Handler from '../handler.js'

export default StringSets
declare class StringSets extends Handler {
  stringSetSelectors: any
  onDeclaration(declaration: any, dItem: any, dList: any, rule: any): void
  onContent(funcNode: any, fItem: any, fList: any, declaration: any, rule: any): void
  type: any
  afterPageLayout(fragment: any): void
  pageLastString: any
}
