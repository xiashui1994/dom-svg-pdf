import { elementToSVG, inlineResources } from 'dom2svg'
import type { Content } from 'pdfmake/interfaces'
import type { PDFOptions } from '../types/index'

export async function dom2svgString(element: HTMLElement, options?: PDFOptions): Promise<string> {
  const svg = elementToSVG(element, { inlineSvg: false })
  const svgRootElement = svg.documentElement
  document.body.prepend(svgRootElement)
  try {
    if (options?.bold) {
      for (const text of Array.from(svgRootElement.querySelectorAll('text'))) {
        const fontWeight = Number(text.getAttribute('font-weight')) || 400
        if (fontWeight < 500)
          continue
        const color = text.getAttribute('fill') || 'black'
        text.setAttribute('stroke', color)
        text.setAttribute('stroke-width', fontWeight > 500 ? '0.5' : '0.25')
      }
    }
    await inlineResources(svgRootElement, { cache: 'no-cache' })
  }
  finally {
    svgRootElement.remove()
  }
  return new XMLSerializer().serializeToString(svgRootElement)
}

export async function dom2Content(pages: any[], formatSize: any, options?: PDFOptions): Promise<Content> {
  const { pageNumber, beforeToSvg, afterToSvg } = options || {}
  const content: Content = []
  pages = pages.filter((_page, index) => !pageNumber || pageNumber === index + 1)
  for (const page of pages) {
    await beforeToSvg?.(page)
    page.style.display = 'block'
    const svg = await dom2svgString(page, options)
    await afterToSvg?.(svg, page)
    content.push({ svg, ...formatSize })
  }
  return content
}
