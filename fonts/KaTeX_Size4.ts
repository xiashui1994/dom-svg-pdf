import { getVFS } from '../lib/utils'
import KaTeX_Size4_Regular from '/fonts/KaTeX_Size1-Regular.ttf?inline'

export const KaTeX_Size4_vfs = {
  'KaTeX_Size4-Regular.ttf': getVFS(KaTeX_Size4_Regular),
}

export const KaTeX_Size4_fonts = {
  KaTeX_Size4: {
    normal: 'KaTeX_Size4-Regular.ttf',
    bold: 'KaTeX_Size4-Regular.ttf',
    italics: 'KaTeX_Size4-Regular.ttf',
    bolditalics: 'KaTeX_Size4-Regular.ttf',
  },
}
