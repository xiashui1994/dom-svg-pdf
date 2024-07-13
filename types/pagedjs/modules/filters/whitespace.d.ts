import Handler from '../handler.js'

export default WhiteSpaceFilter
declare class WhiteSpaceFilter extends Handler {
  filter(content: any): void
  filterEmpty(node: any): 2 | 1
}
