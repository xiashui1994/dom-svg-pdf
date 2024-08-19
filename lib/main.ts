/**
 * dom-svg-pdf
 * https://github.com/xiashui1994/dom-svg-pdf
 * author xiashui
 * version 1.0.9
 * copyright (c) 2023 xiashui
 * license MIT
 */
import type { TCreatedPdf } from 'pdfmake/build/pdfmake'
import type { PDFOptions } from '../types/index'
import { domPaged } from './vivliostyle'
import { dom2Content } from './dom2svg'
import { createPdf } from './pdfMake'
import { convertToUnit } from './utils'

async function domSvgPdf(el: string, options?: PDFOptions): Promise<TCreatedPdf | void> {
  const paged = await domPaged(document.querySelector(el)!, options)
  if (!paged)
    return
  const { width, height, pages } = paged
  const formatSize = { width: convertToUnit(width) || 0, height: convertToUnit(height) || 0 }
  const content = await dom2Content(pages, formatSize, options)
  const PDF = await createPdf(content, formatSize, options)
  return PDF
}

export { domSvgPdf }
