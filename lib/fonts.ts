import type { TFontDictionary } from 'pdfmake/interfaces'
import type { VirtualFonts } from '../types/index'
import { KaTeX_AMS_fonts, KaTeX_AMS_vfs } from '../fonts/KaTeX_AMS'
import { KaTeX_Caligraphic_fonts, KaTeX_Caligraphic_vfs } from '../fonts/KaTeX_Caligraphic'
import { KaTeX_Fraktur_fonts, KaTeX_Fraktur_vfs } from '../fonts/KaTeX_Fraktur'
import { KaTeX_Main_fonts, KaTeX_Main_vfs } from '../fonts/KaTeX_Main'
import { KaTeX_Math_fonts, KaTeX_Math_vfs } from '../fonts/KaTeX_Math'
import { KaTeX_SansSerif_fonts, KaTeX_SansSerif_vfs } from '../fonts/KaTeX_SansSerif'
import { KaTeX_Script_fonts, KaTeX_Script_vfs } from '../fonts/KaTeX_Script'
import { KaTeX_Size1_fonts, KaTeX_Size1_vfs } from '../fonts/KaTeX_Size1'
import { KaTeX_Size2_fonts, KaTeX_Size2_vfs } from '../fonts/KaTeX_Size2'
import { KaTeX_Size3_fonts, KaTeX_Size3_vfs } from '../fonts/KaTeX_Size3'
import { KaTeX_Size4_fonts, KaTeX_Size4_vfs } from '../fonts/KaTeX_Size4'
import { KaTeX_Typewriter_fonts, KaTeX_Typewriter_vfs } from '../fonts/KaTeX_Typewriter'
import { Roboto_fonts, Roboto_vfs } from '../fonts/Roboto'

export function setFonts(pdfMake: any, base: boolean, katex: boolean, fontContainer: { vfs: VirtualFonts, fonts: TFontDictionary }) {
  const addVirtualFileSystem = (vfs: VirtualFonts) => {
    for (const key in vfs) {
      if (Object.prototype.hasOwnProperty.call(vfs, key))
        pdfMake.vfs = { ...pdfMake.vfs, [key]: vfs[key] }
    }
  }

  const addFontContainer = (vfs: VirtualFonts, fonts: TFontDictionary) => {
    addVirtualFileSystem(vfs)
    pdfMake.addFonts(fonts)
  }

  base && addFontContainer(Roboto_vfs, Roboto_fonts)

  if (katex) {
    addFontContainer(KaTeX_AMS_vfs, KaTeX_AMS_fonts)
    addFontContainer(KaTeX_Caligraphic_vfs, KaTeX_Caligraphic_fonts)
    addFontContainer(KaTeX_Fraktur_vfs, KaTeX_Fraktur_fonts)
    addFontContainer(KaTeX_Main_vfs, KaTeX_Main_fonts)
    addFontContainer(KaTeX_Math_vfs, KaTeX_Math_fonts)
    addFontContainer(KaTeX_SansSerif_vfs, KaTeX_SansSerif_fonts)
    addFontContainer(KaTeX_Script_vfs, KaTeX_Script_fonts)
    addFontContainer(KaTeX_Size1_vfs, KaTeX_Size1_fonts)
    addFontContainer(KaTeX_Size2_vfs, KaTeX_Size2_fonts)
    addFontContainer(KaTeX_Size3_vfs, KaTeX_Size3_fonts)
    addFontContainer(KaTeX_Size4_vfs, KaTeX_Size4_fonts)
    addFontContainer(KaTeX_Typewriter_vfs, KaTeX_Typewriter_fonts)
  }

  addFontContainer(fontContainer.vfs, fontContainer.fonts)
}
