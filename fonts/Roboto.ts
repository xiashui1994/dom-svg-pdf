import { getVFS } from '../lib/utils'
import Roboto_Italic from '/fonts/Roboto-Italic.ttf?inline'
import Roboto_Medium from '/fonts/Roboto-Medium.ttf?inline'
import Roboto_MediumItalic from '/fonts/Roboto-MediumItalic.ttf?inline'
import Roboto_Regular from '/fonts/Roboto-Regular.ttf?inline'

export const Roboto_vfs = {
  'Roboto-Regular.ttf': getVFS(Roboto_Regular),
  'Roboto-Medium.ttf': getVFS(Roboto_Medium),
  'Roboto-Italic.ttf': getVFS(Roboto_Italic),
  'Roboto-MediumItalic.ttf': getVFS(Roboto_MediumItalic),
}

export const Roboto_fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf',
  },
}
