<h1 align="center">dom-svg-pdf</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/dom-svg-pdf">
    <img src="https://img.shields.io/npm/v/dom-svg-pdf.svg" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/dom-svg-pdf">
    <img src="https://img.shields.io/npm/dm/dom-svg-pdf" alt="Downloads">
  </a>
  <a href="https://github.com/xiashui1994/dom-svg-pdf/issues">
    <img src="https://img.shields.io/github/issues/xiashui1994/dom-svg-pdf" alt="Issues">
  </a>
  <a href="https://github.com/xiashui1994/dom-svg-pdf/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/dom-svg-pdf.svg" alt="License">
  </a>
</p>

<p align="center">高质量的 HTML 转 PDF 解决方案 - 支持数学公式、自定义字体、精确分页</p>

<p align="center"><a href="README.md">English</a> | 简体中文</p>

---

## ✨ 核心特性

- 🚀 **无需浏览器打印** - 完全基于 Web 技术栈，精确控制 PDF 输出
- 📄 **智能分页** - 基于 CSS Paged Media 标准的专业排版
- 🧮 **数学公式** - 完整支持 KaTeX 数学公式渲染
- 🎨 **自定义字体** - 支持中文字体和自定义字体加载
- 📱 **跨平台兼容** - 支持 PC 端和移动端
- ⚡ **高性能** - 支持单页导出和批量处理

## 🎬 在线演示

在线预览：https://dom-svg-pdf.vercel.app

## 💡 工作原理

`dom-svg-pdf` 采用三阶段转换流程：

```
HTML DOM → 分页处理 → SVG 转换 → PDF 生成
             ↓          ↓         ↓
         vivliostyle → dom2svg → pdfMake
```

1. **智能分页**：使用 `vivliostyle.js` 基于 CSS Paged Media 标准进行专业排版
2. **精确转换**：通过 `dom2svg` 将 HTML 元素精确转换为 SVG 图形
3. **PDF 生成**：使用 `pdfMake` 将 SVG 内容写入 PDF 文档

这种方式确保了输出的 PDF 与原始 HTML 在视觉上完全一致。

## 🚀 快速开始

### 基础安装

```bash
# 使用 npm
npm install dom-svg-pdf

# 使用 pnpm
pnpm add dom-svg-pdf

# 使用 yarn
yarn add dom-svg-pdf
```

## 📝 使用教程

### 基础用法

```typescript
import { domSvgPdf } from 'dom-svg-pdf'

// 方式1：调用浏览器打印对话框
async function printWithBrowser() {
  const printer = await domSvgPdf('#content', {
    print: true
  })
  printer.print()
}

// 方式2：直接生成 PDF 并下载
async function downloadPDF() {
  const pdf = await domSvgPdf('#content')
  pdf.download('document.pdf') // 直接下载
}
```

### 单页导出

```typescript
// 只导出第2页
const pdf = await domSvgPdf('#content', {
  pageNumber: 2 // 导出第2页（从1开始）
})
```

### 多页面导出

```typescript
// 导出多个页面为一个 PDF
const pdf = await domSvgPdf([
  { el: '#page1', stylesheet: 'body { color: red; }' },
  { el: '#page2', stylesheet: 'body { color: blue; }' },
  { el: '#page3' }
])
```

### 数学公式支持

```typescript
// KaTeX 字体已内嵌，只需启用即可
const pdf = await domSvgPdf('#math-content', {
  katex: true // 启用 KaTeX 支持（字体自动加载）
})
```

### 自定义字体

#### 方法1：从网络链接加载字体

```typescript
const pdf = await domSvgPdf('#content', {
  fonts: {
    MyCustomFont: {
      normal: 'https://example.com/fonts/MyFont-Regular.ttf',
      bold: 'https://example.com/fonts/MyFont-Bold.ttf',
      italics: 'https://example.com/fonts/MyFont-Italic.ttf',
      bolditalics: 'https://example.com/fonts/MyFont-BoldItalic.ttf'
    }
  },
  docDefinition: {
    defaultStyle: {
      font: 'MyCustomFont'
    }
  }
})
```

#### 方法2：通过 VFS 配置自定义字体

```typescript
const pdf = await domSvgPdf('#content', {
  // VFS 虚拟文件系统（Base64 字体数据）
  vfs: {
    'MyFont-Regular.ttf': 'AAEAAAAOAIAAAwBgT1MvM...', // Base64 字体数据
    'MyFont-Bold.ttf': 'AAEAAAAOAIAAAwBgT1MvM...' // Base64 字体数据
  },
  fonts: {
    MyCustomFont: {
      normal: 'MyFont-Regular.ttf',
      bold: 'MyFont-Bold.ttf',
      italics: 'MyFont-Regular.ttf', // 复用普通字体
      bolditalics: 'MyFont-Bold.ttf' // 复用粗体字体
    }
  },
  docDefinition: {
    defaultStyle: {
      font: 'MyCustomFont'
    }
  }
})
```

## 🔧 配置参考

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `print` | `boolean` | `false` | 是否使用浏览器打印模式 |
| `pageNumber` | `number` | `undefined` | 指定导出的页码（从1开始）|
| `bold` | `boolean` | `false` | 是否模拟加粗效果（没有粗体字体时模拟加粗） |
| `katex` | `boolean` | `false` | 是否启用 KaTeX 数学公式字体 |
| `fonts` | `TFontDictionary` | `{}` | 自定义字体配置 |
| `vfs` | `VirtualFonts` | `{}` | 虚拟文件系统（字体文件） |
| `docDefinition` | `Partial<TDocumentDefinitions>` | `{}` | pdfMake 文档配置 |
| `printPlugins` | `Parameters<typeof registerHook>[]` | `[]` | vivliostyle.js 插件 |
| `beforePaged` | `() => void` | `undefined` | 分页前钩子 |
| `afterPaged` | `(paged) => void` | `undefined` | 分页后钩子 |
| `beforeToSvg` | `(page, index, total) => void` | `undefined` | SVG转换前钩子 |
| `afterToSvg` | `(svg, index, total) => void` | `undefined` | SVG转换后钩子 |
| `beforePdfMake` | `(docDefinition) => void` | `undefined` | PDF生成前钩子 |
| `afterPdfMake` | `(pdf, docDefinition) => void` | `undefined` | PDF生成后钩子 |

### 生命周期钩子详解

所有生命周期钩子都是可选的，用于在转换过程的不同阶段执行自定义逻辑：

```typescript
const pdf = await domSvgPdf('#content', {
  // 分页前
  beforePaged: () => {
    console.log('即将开始分页...')
    // 可以在这里修改DOM或样式
  },

  // 分页后
  afterPaged: ({ pageSize, pages }) => {
    console.log(`分页完成: ${pages.length} 页`)
    console.log(`页面尺寸: ${pageSize.width} x ${pageSize.height}`)
    // 可以在这里检查分页结果
  },

  // SVG转换前（每页调用）
  beforeToSvg: (page, index, total) => {
    console.log(`开始转换第 ${index + 1}/${total} 页`)
    // 可以在这里修改单页内容
  },

  // SVG转换后（每页调用）
  afterToSvg: (svg, index, total) => {
    console.log(`第 ${index + 1}/${total} 页转换完成`)
    // 可以在这里处理SVG内容
  },

  // PDF生成前
  beforePdfMake: (docDefinition) => {
    console.log('即将生成PDF...', docDefinition)
    // 可以在这里最后修改PDF配置
  },

  // PDF生成后
  afterPdfMake: (pdf, docDefinition) => {
    console.log('PDF生成完成', pdf, docDefinition)
    // 可以在这里处理生成的PDF对象
  }
})
```

## ⚠️ 重要说明

- **运行环境**：本库专为浏览器设计，需要 DOM 环境。服务端使用请配合 Puppeteer
- **浏览器兼容性**：建议在现代浏览器中使用，IE 不支持

## 🔗 相关资源

- **pdfMake 文档**: [https://pdfmake.github.io/docs/](https://pdfmake.github.io/docs/)
- **vivliostyle.js**: [https://vivliostyle.org/](https://vivliostyle.org/)
- **Paged.js**: [https://pagedjs.org/en/documentation/](https://pagedjs.org/en/documentation/)
- **KaTeX**: [https://katex.org/](https://katex.org/)
- **CSS Paged Media**: [https://www.w3.org/TR/css-page-3/](https://www.w3.org/TR/css-page-3/)

## 🙏 鸣谢

感谢以下开源项目为 `dom-svg-pdf` 提供的强大支持：

- **[vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js)** - 基于 Web 标准的新型排版系统，提供专业的 CSS 分页媒体支持
- **[dom2svg](https://github.com/xiashui1994/dom2svg)** - 高质量的 HTML DOM 到 SVG 转换库
- **[pdfMake](https://github.com/bpampuch/pdfmake)** - 纯 JavaScript 的客户端 PDF 文档生成库
- **[KaTeX](https://github.com/KaTeX/KaTeX)** - 快速、高质量的数学公式渲染引擎

## 📄 许可证

[MIT License](LICENSE)
