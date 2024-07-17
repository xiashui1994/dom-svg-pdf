/**
 * dom-svg-pdf
 * https://github.com/xiashui1994/dom-svg-pdf
 * author xiashui
 * version 1.0.0
 * copyright (c) 2023 xiashui
 * license MIT
 */
import type { PDFOptions } from '../types/index'
import { domPaged } from './paged'
import { dom2Content } from './dom2svg'
import { createPdf } from './pdfMake'
import { convertToUnit } from './utils'

async function domSvgPdf(options?: PDFOptions): Promise<pdfMake.TCreatedPdf> {
  const paged = await domPaged(options)
  const { pages, size } = paged.chunker
  const { width, height, orientation, format } = size
  const formatSize = { width: convertToUnit(`${width.value}${width.unit}`) || width.value, height: convertToUnit(`${height.value}${height.unit}`) || height.value }
  const content = await dom2Content(pages, orientation, formatSize, options)
  const PDF = await createPdf(content, orientation, format || formatSize, options)
  return PDF
}

export { domSvgPdf }
