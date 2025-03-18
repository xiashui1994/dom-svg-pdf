import { getVFS } from '../lib/utils'
import KaTeX_Caligraphic_Bold from '/fonts/KaTeX_Caligraphic-Bold.ttf?inline'
import KaTeX_Caligraphic_Regular from '/fonts/KaTeX_Caligraphic-Regular.ttf?inline'

export const KaTeX_Caligraphic_vfs = {
  'KaTeX_Caligraphic-Regular.ttf': getVFS(KaTeX_Caligraphic_Regular),
  'KaTeX_Caligraphic-Bold.ttf': getVFS(KaTeX_Caligraphic_Bold),
}

export const KaTeX_Caligraphic_fonts = {
  KaTeX_Caligraphic: {
    normal: 'KaTeX_Caligraphic-Regular.ttf',
    bold: 'KaTeX_Caligraphic-Bold.ttf',
    italics: 'KaTeX_Caligraphic-Regular.ttf',
    bolditalics: 'KaTeX_Caligraphic-Bold.ttf',
  },
}
