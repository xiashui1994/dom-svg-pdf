/**
 * dom-svg-pdf
 * https://github.com/xiashui1994/dom-svg-pdf
 * author xiashui
 * version 1.1.3
 * copyright (c) 2023 xiashui
 * license MIT
 */
import type { PDFOptions, ReturnType } from '../types/index'
import { dom2Content } from './dom2svg'
import { createPdf } from './pdfMake'
import { domPaged } from './vivliostyle'

async function domSvgPdf<T>(el: string, options?: PDFOptions & { print?: T }): Promise<ReturnType<T>> {
  const paged = await domPaged(window.document.querySelector(el)!, options)
  if (options?.print)
    return paged.iframeWin as ReturnType<T>
  const { pageSize, pages } = paged
  const content = await dom2Content(pages, pageSize, options)
  const PDF = await createPdf(content, pageSize, options)
  return PDF as ReturnType<T>
}

export { domSvgPdf }
