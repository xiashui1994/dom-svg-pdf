/**
 * dom-svg-pdf
 * https://github.com/xiashui1994/dom-svg-pdf
 * author xiashui
 * version 1.1.1
 * copyright (c) 2023 xiashui
 * license MIT
 */
import type { PDFOptions, ReturnType } from '../types/index'
import { domPaged } from './vivliostyle'
import { dom2Content } from './dom2svg'
import { createPdf } from './pdfMake'
import { convertToUnit } from './utils'

async function domSvgPdf<T>(el: string, options?: PDFOptions & { print?: T }): Promise<ReturnType<T>> {
  const paged = await domPaged(window.document.querySelector(el)!, options)
  if (options?.print)
    return paged.iframeWin as ReturnType<T>
  const { width, height, pages } = paged
  const formatSize = { width: convertToUnit(width) || 0, height: convertToUnit(height) || 0 }
  const content = await dom2Content(pages, formatSize, options)
  const PDF = await createPdf(content, formatSize, options)
  return PDF as ReturnType<T>
}

export { domSvgPdf }
