export default BreakToken
/**
 * BreakToken
 * @class
 */
declare class BreakToken {
  constructor(node: any, overflowArray: any)
  node: any
  overflow: any
  finished: boolean
  breakNeededAt: any[]
  equals(otherBreakToken: any): boolean
  setFinished(): void
  isFinished(): boolean
  addNeedsBreak(needsBreak: any): void
  getNextNeedsBreak(): any
  getForcedBreakQueue(): any[]
  setForcedBreakQueue(queue: any): any
}
