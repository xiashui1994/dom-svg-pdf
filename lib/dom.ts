/**
 * 页面上插入样式
 */
export function insertStyles(styles: string) {
  const style = document.createElement('style')
  style.innerHTML = styles
  document.head.appendChild(style)
}
