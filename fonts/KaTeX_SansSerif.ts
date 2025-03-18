import { getVFS } from '../lib/utils'
import KaTeX_SansSerif_Bold from '/fonts/KaTeX_SansSerif-Bold.ttf?inline'
import KaTeX_SansSerif_Italic from '/fonts/KaTeX_SansSerif-Italic.ttf?inline'
import KaTeX_SansSerif_Regular from '/fonts/KaTeX_SansSerif-Regular.ttf?inline'

export const KaTeX_SansSerif_vfs = {
  'KaTeX_SansSerif-Regular.ttf': getVFS(KaTeX_SansSerif_Regular),
  'KaTeX_SansSerif-Bold.ttf': getVFS(KaTeX_SansSerif_Bold),
  'KaTeX_SansSerif-Italic.ttf': getVFS(KaTeX_SansSerif_Italic),
}

export const KaTeX_SansSerif_fonts = {
  KaTeX_SansSerif: {
    normal: 'KaTeX_SansSerif-Regular.ttf',
    bold: 'KaTeX_SansSerif-Bold.ttf',
    italics: 'KaTeX_SansSerif-Italic.ttf',
    bolditalics: 'KaTeX_SansSerif-Bold.ttf',
  },
}
