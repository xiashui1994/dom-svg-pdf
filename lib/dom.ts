/**
 * 获取序列化元素列表
 * @param ctx window
 * @param el string
 */
export function getSerializedElements(ctx: Window, el: string) {
  const elements = ctx.document.querySelectorAll(el)
  return Array.from(elements) as HTMLElement[]
}

/**
 * 模拟加粗
 * @param svgRootElement svg
 */
export function simulateBold(svgRootElement: HTMLElement) {
  for (const text of Array.from(svgRootElement.querySelectorAll('text'))) {
    const fontWeight = Number(text.getAttribute('font-weight')) || 400
    if (fontWeight < 500)
      continue
    const color = text.getAttribute('fill') || 'black'
    text.setAttribute('stroke', color)
    text.setAttribute('stroke-width', fontWeight > 500 ? '0.5' : '0.25')
  }
}

/**
 * 创建 iframe 并插入到页面中
 * @param content - iframe 内容
 * @returns {HTMLIFrameElement} iframe
 */
export function createIframe(content: string, style: Partial<CSSStyleDeclaration>): Promise<HTMLIFrameElement> {
  return new Promise((resolve) => {
    const iframe = window.document.createElement('iframe')
    Object.assign(iframe.style, style)
    window.document.body.appendChild(iframe)
    iframe.contentDocument?.open()
    iframe.onload = () => resolve(iframe)
    iframe.contentDocument?.write(content)
    iframe.contentDocument?.close()
  })
}
