export function getFonts(base: boolean, katex: boolean, fontsPath: string) {
  const createFont = (normal: string, bold?: string, italics?: string, bolditalics?: string) => {
    return {
      normal: `${fontsPath}${normal}`,
      bold: `${fontsPath}${bold || normal}`,
      italics: `${fontsPath}${italics || normal}`,
      bolditalics: `${fontsPath}${bolditalics || bold || normal}`,
    }
  }

  const baseFonts = {
    LXGWNeoXiHei: createFont('/fonts/LXGWNeoXiHei.ttf'),
  }

  const katexFonts = {
    KaTeX_AMS: createFont('/fonts/KaTeX_AMS-Regular.ttf'),
    KaTeX_Caligraphic: createFont('/fonts/KaTeX_Caligraphic-Regular.ttf', '/fonts/KaTeX_Caligraphic-Bold.ttf'),
    KaTeX_Fraktur: createFont('/fonts/KaTeX_Fraktur-Regular.ttf', '/fonts/KaTeX_Fraktur-Bold.ttf'),
    KaTeX_Main: createFont('/fonts/KaTeX_Main-Regular.ttf', '/fonts/KaTeX_Main-Bold.ttf', '/fonts/KaTeX_Main-Italic.ttf', '/fonts/KaTeX_Main-BoldItalic.ttf'),
    KaTeX_Math: createFont('/fonts/KaTeX_Math-Italic.ttf', '/fonts/KaTeX_Math-BoldItalic.ttf'),
    KaTeX_SansSerif: createFont('/fonts/KaTeX_SansSerif-Regular.ttf', '/fonts/KaTeX_SansSerif-Bold.ttf', '/fonts/KaTeX_SansSerif-Italic.ttf'),
    KaTeX_Script: createFont('/fonts/KaTeX_Script-Regular.ttf'),
    KaTeX_Size1: createFont('/fonts/KaTeX_Size1-Regular.ttf'),
    KaTeX_Size2: createFont('/fonts/KaTeX_Size2-Regular.ttf'),
    KaTeX_Size3: createFont('/fonts/KaTeX_Size3-Regular.ttf'),
    KaTeX_Size4: createFont('/fonts/KaTeX_Size4-Regular.ttf'),
    KaTeX_Typewriter: createFont('/fonts/KaTeX_Typewriter-Regular.ttf'),
  }

  return { ...(base ? baseFonts : {}), ...(katex ? katexFonts : {}) }
}
