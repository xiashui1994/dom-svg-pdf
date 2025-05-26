/**
 * katex 样式补丁
 * katex 会把公式中的特殊字符加上 cjk_fallback 等类名，将 font-family 重置为默认字体避免乱码
 * https://github.com/KaTeX/KaTeX/blob/main/src/unicodeScripts.js
 */
export function patchStyles(font?: string, katex?: boolean) {
  if (!katex)
    return ''
  return `.latin_fallback, .cyrillic_fallback, .armenian_fallback, .brahmic_fallback, .georgian_fallback, .cjk_fallback, .hangul_fallback { font-family: ${font || 'Roboto'}; }
  .katex .clap>.inner,.katex .rlap>.inner { top: 0; }`
}

/**
 * 获取所有的样式
 */
export function getAllStylesheets() {
  return Array.from(window.document.querySelectorAll('style, link[rel="stylesheet"]')).map(element => element.outerHTML).join('')
}

/**
 * 通用样式
 */
export const commonCSS = 'html,body{ -webkit-user-select:initial;-moz-user-select:initial;user-select:initial;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;text-size-adjust:none; }'
