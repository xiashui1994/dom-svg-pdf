/**
 * 页面上插入样式
 */
export function insertStyles(styles: string) {
  const style = document.createElement('style')
  style.innerHTML = styles
  document.head.appendChild(style)
}

export function wrapContent(element?: HTMLElement) {
  const body = document.querySelector('body') as HTMLBodyElement
  let template = body.querySelector(':scope > template[data-ref=\'pagedjs-content\']') as HTMLTemplateElement
  if (!template) {
    const content = element || body
    template = document.createElement('template')
    template.dataset.ref = 'pagedjs-content'
    template.innerHTML = content.innerHTML
    content.innerHTML = ''
    body.appendChild(template)
  }
  return template.content
}
