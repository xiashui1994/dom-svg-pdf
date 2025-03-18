import { getVFS } from '../lib/utils'
import KaTeX_Fraktur_Bold from '/fonts/KaTeX_Fraktur-Bold.ttf?inline'
import KaTeX_Fraktur_Regular from '/fonts/KaTeX_Fraktur-Regular.ttf?inline'

export const KaTeX_Fraktur_vfs = {
  'KaTeX_Fraktur-Regular.ttf': getVFS(KaTeX_Fraktur_Regular),
  'KaTeX_Fraktur-Bold.ttf': getVFS(KaTeX_Fraktur_Bold),
}

export const KaTeX_Fraktur_fonts = {
  KaTeX_Fraktur: {
    normal: 'KaTeX_Fraktur-Regular.ttf',
    bold: 'KaTeX_Fraktur-Bold.ttf',
    italics: 'KaTeX_Fraktur-Regular.ttf',
    bolditalics: 'KaTeX_Fraktur-Bold.ttf',
  },
}
