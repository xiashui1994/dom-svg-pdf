import { domSvgPdf } from '../lib/main'

window.addEventListener('DOMContentLoaded', async () => {
  const pdf = await domSvgPdf('#app')
  pdf!.getBlob((blob) => {
    const url = URL.createObjectURL(blob)
    window.open(url)
  })
})
