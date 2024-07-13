import { elementToSVG, inlineResources } from 'dom2svg'

export async function dom2svgString(element: HTMLElement): Promise<string> {
  const svg = elementToSVG(element)
  const svgRootElement = svg.documentElement
  document.body.prepend(svgRootElement)
  try {
    await inlineResources(svgRootElement, { cache: 'no-cache' })
  }
  finally {
    svgRootElement.remove()
  }
  return new XMLSerializer().serializeToString(svgRootElement)
}
