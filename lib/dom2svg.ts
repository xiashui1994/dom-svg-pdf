import type { Content } from 'pdfmake/interfaces'
import type { PageSize, PDFOptions } from '../types/index'
import { elementToSVG, inlineResources } from 'dom2svg'
import { simulateBold } from './dom'

export async function dom2svgString(element: HTMLElement, options?: PDFOptions): Promise<string> {
  const svg = elementToSVG(element, { inlineSvg: false })
  const svgRootElement = svg.documentElement
  window.document.body.prepend(svgRootElement)
  try {
    if (options?.bold)
      simulateBold(svgRootElement)
    await inlineResources(svgRootElement, { cache: 'no-cache' })
  }
  finally {
    svgRootElement.remove()
  }
  return new XMLSerializer().serializeToString(svgRootElement)
}

export async function dom2Content(pages: HTMLElement[], pageSize: PageSize, options?: PDFOptions): Promise<Content> {
  const { pageNumber, beforeToSvg, afterToSvg } = options || {}
  const content: Content = []
  pages = pages.filter((_page, index) => !pageNumber || pageNumber === index + 1)
  for (const [index, page] of pages.entries()) {
    await beforeToSvg?.(page, index, pages.length)
    const svg = await dom2svgString(page, options)
    await afterToSvg?.(svg, index, pages.length)
    content.push({ svg, ...pageSize })
  }
  return content
}
