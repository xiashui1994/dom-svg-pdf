/**
 * 重置容器样式
 * @param ctx window
 * @param el string
 */
export function resetContainerStyle(ctx: Window, el: string, styles: Record<string, string>) {
  const container = ctx.document.querySelector(el) as HTMLElement
  if (!container)
    return
  Object.assign(container.style, styles)
}

/**
 * 获取容器大小
 * @param ctx window
 * @param el string
 */
export function getContainerSize(ctx: Window, el: string) {
  const container = ctx.document.querySelector(el) as HTMLElement
  const { width, height } = container?.style || { width: '0px', height: '0px' }
  return { width, height }
}

/**
 * 获取序列化元素列表
 * @param ctx window
 * @param el string
 */
export function getSerializedElements(ctx: Window, el: string) {
  const elements = ctx.document.querySelectorAll(el)
  return Array.from(elements) as HTMLElement[]
}
