import { getVFS } from '../lib/utils'
import KaTeX_Typewriter_Regular from '/fonts/KaTeX_Typewriter-Regular.ttf?inline'

export const KaTeX_Typewriter_vfs = {
  'KaTeX_Typewriter-Regular.ttf': getVFS(KaTeX_Typewriter_Regular),
}

export const KaTeX_Typewriter_fonts = {
  KaTeX_Typewriter: {
    normal: 'KaTeX_Typewriter-Regular.ttf',
    bold: 'KaTeX_Typewriter-Regular.ttf',
    italics: 'KaTeX_Typewriter-Regular.ttf',
    bolditalics: 'KaTeX_Typewriter-Regular.ttf',
  },
}
