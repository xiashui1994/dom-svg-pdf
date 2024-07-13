import Handler from '../handler.js'

export default TargetText
declare class TargetText extends Handler {
  styleSheet: any
  textTargets: any
  beforeContent: string
  afterContent: string
  selector: any
  onContent(funcNode: any, fItem: any, fList: any, declaration: any, rule: any): void
  onPseudoSelector(pseudoNode: any, pItem: any, pList: any, selector: any, rule: any): void
  afterParsed(fragment: any): void
}
