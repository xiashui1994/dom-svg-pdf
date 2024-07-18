import { domSvgPdf } from '../lib/main'

window.addEventListener('DOMContentLoaded', async () => {
  const pdf = await domSvgPdf({
    katex: true,
    bold: true,
    afterToSvg(_svg, page) {
      page.element.remove()
    },
  })
  pdf.getBlob((blob) => {
    const url = URL.createObjectURL(blob)
    window.open(url)
  })
})
