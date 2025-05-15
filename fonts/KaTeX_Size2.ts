import { getVFS } from '../lib/utils'
import KaTeX_Size2_Regular from '/fonts/KaTeX_Size2-Regular.ttf?inline'

export const KaTeX_Size2_vfs = {
  'KaTeX_Size2-Regular.ttf': getVFS(KaTeX_Size2_Regular),
}

export const KaTeX_Size2_fonts = {
  KaTeX_Size2: {
    normal: 'KaTeX_Size2-Regular.ttf',
    bold: 'KaTeX_Size2-Regular.ttf',
    italics: 'KaTeX_Size2-Regular.ttf',
    bolditalics: 'KaTeX_Size2-Regular.ttf',
  },
}
