import { getVFS } from '../lib/utils'
import KaTeX_AMS_Regular from '/fonts/KaTeX_AMS-Regular.ttf?inline'

export const KaTeX_AMS_vfs = {
  'KaTeX_AMS-Regular.ttf': getVFS(KaTeX_AMS_Regular),
}

export const KaTeX_AMS_fonts = {
  KaTeX_AMS: {
    normal: 'KaTeX_AMS-Regular.ttf',
    bold: 'KaTeX_AMS-Regular.ttf',
    italics: 'KaTeX_AMS-Regular.ttf',
    bolditalics: 'KaTeX_AMS-Regular.ttf',
  },
}
