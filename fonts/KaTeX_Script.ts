import { getVFS } from '../lib/utils'
import KaTeX_Script_Regular from '/fonts/KaTeX_Script-Regular.ttf?inline'

export const KaTeX_Script_vfs = {
  'KaTeX_Script-Regular.ttf': getVFS(KaTeX_Script_Regular),
}

export const KaTeX_Script_fonts = {
  KaTeX_Script: {
    normal: 'KaTeX_Script-Regular.ttf',
    bold: 'KaTeX_Script-Regular.ttf',
    italics: 'KaTeX_Script-Regular.ttf',
    bolditalics: 'KaTeX_Script-Regular.ttf',
  },
}
