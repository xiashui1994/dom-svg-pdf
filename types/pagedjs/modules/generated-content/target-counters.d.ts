import Handler from '../handler.js'

export default TargetCounters
declare class TargetCounters extends Handler {
  styleSheet: any
  counterTargets: any
  onContent(funcNode: any, fItem: any, fList: any, declaration: any, rule: any): void
  afterPageLayout(fragment: any, page: any, breakToken: any, chunker: any): void
}
