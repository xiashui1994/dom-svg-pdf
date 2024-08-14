/**
 * 将 px/rem/cm/mm/em/in 转换为 pt，其他值返回 false。如果它只是一个数字，它只会返回它
 * @param  {string} val 带有单位的值 (例如： 12px)
 * @return {number | boolean} 返回pt值，否则为 false
 */
export function convertToUnit(val: any) {
  if (!Number.isNaN(Number.parseFloat(val)) && Number.isFinite(val))
    return val * 1
  const match = (`${val}`).trim().match(/^(\d*(\.\d+)?)(pt|px|r?em|cm|mm|in)$/)
  if (!match)
    return false
  val = match[1]
  switch (match[3]) {
    case 'px':{
      val = Math.round(val * 0.75) // 1px => 0.75292857248934pt
      break
    }
    case 'em':
    case 'rem':{
      val *= 12 // 默认字体大小为 12pt
      break
    }
    case 'cm':{
      val = Math.round(val * 28.34646) // 1cm => 28.34646
      break
    }
    case 'mm':{
      val = Math.round(val * 2.834645) // 1mm => 2.834645
      break
    }
    case 'in': {
      val = Math.round(val * 72) // 1in => 72pt
    }
  }
  return val * 1
}
