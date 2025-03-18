import { getVFS } from '../lib/utils'
import KaTeX_Main_Bold from '/fonts/KaTeX_Main-Bold.ttf?inline'
import KaTeX_Main_BoldItalic from '/fonts/KaTeX_Main-BoldItalic.ttf?inline'
import KaTeX_Main_Italic from '/fonts/KaTeX_Main-Italic.ttf?inline'
import KaTeX_Main_Regular from '/fonts/KaTeX_Main-Regular.ttf?inline'

export const KaTeX_Main_vfs = {
  'KaTeX_Main-Regular.ttf': getVFS(KaTeX_Main_Regular),
  'KaTeX_Main-Bold.ttf': getVFS(KaTeX_Main_Bold),
  'KaTeX_Main-Italic.ttf': getVFS(KaTeX_Main_Italic),
  'KaTeX_Main-BoldItalic.ttf': getVFS(KaTeX_Main_BoldItalic),
}

export const KaTeX_Main_fonts = {
  KaTeX_Main: {
    normal: 'KaTeX_Main-Regular.ttf',
    bold: 'KaTeX_Main-Bold.ttf',
    italics: 'KaTeX_Main-Italic.ttf',
    bolditalics: 'KaTeX_Main-BoldItalic.ttf',
  },
}
