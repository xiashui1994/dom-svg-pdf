import { getVFS } from '../lib/utils'
import KaTeX_Math_BoldItalic from '/fonts/KaTeX_Math-BoldItalic.ttf?inline'
import KaTeX_Math_Italic from '/fonts/KaTeX_Math-Italic.ttf?inline'

export const KaTeX_Math_vfs = {
  'KaTeX_Math-Italic.ttf': getVFS(KaTeX_Math_Italic),
  'KaTeX_Math-BoldItalic.ttf': getVFS(KaTeX_Math_BoldItalic),
}

export const KaTeX_Math_fonts = {
  KaTeX_Math: {
    normal: 'KaTeX_Math-Italic.ttf',
    bold: 'KaTeX_Math-BoldItalic.ttf',
    italics: 'KaTeX_Math-Italic.ttf',
    bolditalics: 'KaTeX_Math-BoldItalic.ttf',
  },
}
