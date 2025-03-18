import { getVFS } from '../lib/utils'
import KaTeX_Size3_Regular from '/fonts/KaTeX_Size1-Regular.ttf?inline'

export const KaTeX_Size3_vfs = {
  'KaTeX_Size3-Regular.ttf': getVFS(KaTeX_Size3_Regular),
}

export const KaTeX_Size3_fonts = {
  KaTeX_Size3: {
    normal: 'KaTeX_Size3-Regular.ttf',
    bold: 'KaTeX_Size3-Regular.ttf',
    italics: 'KaTeX_Size3-Regular.ttf',
    bolditalics: 'KaTeX_Size3-Regular.ttf',
  },
}
