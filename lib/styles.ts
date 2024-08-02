/**
 * katex 会把公式中的特殊字符加上 cjk_fallback 等类名，将 font-family 重置为默认字体避免乱码
 * https://github.com/KaTeX/KaTeX/blob/main/src/unicodeScripts.js
 */
export function fallbackStyles(font?: string, katex?: boolean) {
  if (!katex)
    return ''
  return `.latin_fallback, .cyrillic_fallback, .armenian_fallback, .brahmic_fallback, .georgian_fallback, .cjk_fallback, .hangul_fallback { font-family: ${font || 'LXGWNeoXiHei'}; }`
}

/**
 * 移除不支持的样式
 */
export function removeStyles() {
  const pseudoElements = ['::first-letter', '::first-line']
  const pseudoSelectorRegex = new RegExp(pseudoElements.join('|'))
  for (const sheet of Array.from(document.styleSheets)) {
    const rules = Array.from(sheet.cssRules)
    for (let i = rules.length - 1; i >= 0; i--) {
      const rule = rules[i] as CSSStyleRule
      if (rule.selectorText?.match(pseudoSelectorRegex)) {
        sheet.deleteRule(i)
      }
    }
  }
}

/**
 * 获取所有的样式
 */
export function allStylesheets() {
  const stylesheets = (Array.from(document.styleSheets).map(sheet => sheet.ownerNode) as HTMLElement[]).filter(element => !element.hasAttribute('data-pagedjs-inserted-styles') && !element.hasAttribute('data-pagedjs-ignore') && (!element.getAttribute('media') || element.getAttribute('media')?.includes('screen')))
  return stylesheets.sort((a, b) => {
    const position = a.compareDocumentPosition(b)
    if (position === Node.DOCUMENT_POSITION_PRECEDING)
      return 1
    if (position === Node.DOCUMENT_POSITION_FOLLOWING)
      return -1
    return 0
  }).map((element) => {
    if (element.nodeName === 'STYLE') {
      const obj: any = {}
      obj[window.location.href] = element.textContent
      element.remove()
      return obj
    }
    if (element.nodeName === 'LINK') {
      element.remove()
      return (element as HTMLLinkElement).href
    }
    return null
  })
}
