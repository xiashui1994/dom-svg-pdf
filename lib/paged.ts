import { Previewer, registerHandlers } from 'pagedjs'
import type { PDFOptions } from '../types/index'
import { stylesHandler } from './plugins'

export async function domPaged(options?: PDFOptions) {
  const { pagedjsPlugins = [] } = options || {}
  registerHandlers(stylesHandler(options), ...pagedjsPlugins)

  const paged = new Previewer()
  await paged.preview()
  return paged
}
