import Handler from '../handler.js'

export default Following
declare class Following extends Handler {
  styleSheet: any
  selectors: any
  onRule(ruleNode: any, ruleItem: any, rulelist: any): void
  afterParsed(parsed: any): void
  processSelectors(parsed: any, selectors: any): void
}
