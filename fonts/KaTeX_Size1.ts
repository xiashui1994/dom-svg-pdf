import { getVFS } from '../lib/utils'
import KaTeX_Size1_Regular from '/fonts/KaTeX_Size1-Regular.ttf?inline'

export const KaTeX_Size1_vfs = {
  'KaTeX_Size1-Regular.ttf': getVFS(KaTeX_Size1_Regular),
}

export const KaTeX_Size1_fonts = {
  KaTeX_Size1: {
    normal: 'KaTeX_Size1-Regular.ttf',
    bold: 'KaTeX_Size1-Regular.ttf',
    italics: 'KaTeX_Size1-Regular.ttf',
    bolditalics: 'KaTeX_Size1-Regular.ttf',
  },
}
