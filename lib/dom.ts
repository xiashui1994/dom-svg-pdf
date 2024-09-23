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
 * 创建 iframe 并插入到页面中
 * @param srcdoc - iframe 内容
 * @returns {HTMLIFrameElement} iframe
 */
export function createIframe(srcdoc: string): Promise<HTMLIFrameElement> {
  return new Promise((resolve) => {
    const iframe = window.document.createElement('iframe')
    Object.assign(iframe.style, { width: '0', height: '0', borderWidth: '0' })
    iframe.srcdoc = srcdoc
    iframe.onload = () => resolve(iframe)
    window.document.body.appendChild(iframe)
  })
}
