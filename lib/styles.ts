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
 * 最小 base64 png
 */
export const minBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
