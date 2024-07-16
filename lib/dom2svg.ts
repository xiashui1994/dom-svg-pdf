import { elementToSVG, inlineResources } from 'dom2svg'

export async function dom2svgString(element: HTMLElement): Promise<string> {
  const svg = elementToSVG(element)
  const svgRootElement = svg.documentElement
  document.body.prepend(svgRootElement)
  try {
    for (const text of Array.from(svgRootElement.querySelectorAll('text'))) {
      const fontWeight = Number(text.getAttribute('font-weight')) || 400
      if (fontWeight < 500)
        continue
      const color = text.getAttribute('color') || 'black'
      text.setAttribute('stroke', color)
      text.setAttribute('stroke-width', fontWeight > 500 ? '0.5' : '0.25')
    }
    await inlineResources(svgRootElement, { cache: 'no-cache' })
  }
  finally {
    svgRootElement.remove()
  }
  return new XMLSerializer().serializeToString(svgRootElement)
}
