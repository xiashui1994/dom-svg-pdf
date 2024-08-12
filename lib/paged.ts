import { Previewer, registerHandlers } from 'pagedjs'
import type { PDFOptions } from '../types/index'
import { wrapContent } from './dom'
import { stylesHandler } from './plugins'
import { allStylesheets } from './styles'

export async function domPaged(options?: PDFOptions) {
  const { pagedjsConfig = {}, pagedjsPlugins = [], beforePaged, afterPaged } = options || {}
  const { content, stylesheets = [], renderTo, settings } = pagedjsConfig
  registerHandlers(stylesHandler(options), ...pagedjsPlugins)

  await beforePaged?.()
  const paged = new Previewer(settings)
  await paged.preview(wrapContent(content), [...allStylesheets(), ...stylesheets], renderTo)
  await afterPaged?.(paged)

  return paged
}
