import { Previewer, registerHandlers } from 'pagedjs'
import type { PDFOptions } from '../types/index'
import { stylesHandler } from './plugins'

export async function domPaged(options?: PDFOptions) {
  const { pagedjsPlugins = [], beforePaged, afterPaged } = options || {}
  registerHandlers(stylesHandler(options), ...pagedjsPlugins)

  await beforePaged?.()
  const paged = new Previewer()
  await paged.preview()
  await afterPaged?.(paged)

  return paged
}
