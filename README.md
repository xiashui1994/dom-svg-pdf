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

<p align="center">High-quality HTML to PDF solution - Supporting mathematical formulas, custom fonts, and precise pagination</p>

<p align="center">English | <a href="README.zh-CN.md">简体中文</a></p>

---

## ✨ Key Features

- 🚀 **No Browser Print Dependency** - Full control over PDF output using pure web technologies
- 📄 **Intelligent Pagination** - Professional typesetting based on CSS Paged Media standards
- 🧮 **Mathematical Formulas** - Complete KaTeX mathematical formula rendering support
- 🎨 **Custom Fonts** - Support for Chinese fonts and custom font loading
- 📱 **Cross-platform Compatible** - Works on both PC and mobile devices
- ⚡ **High Performance** - Support for single-page export and batch processing

## 🎬 Online Demo

Online preview: https://dom-svg-pdf.vercel.app

## 💡 How It Works

`dom-svg-pdf` uses a three-stage conversion process:

```
HTML DOM → Pagination → SVG Conversion → PDF Generation
             ↓             ↓              ↓
         vivliostyle → dom2svg → pdfMake
```

1. **Intelligent Pagination**: Uses `vivliostyle.js` for professional typesetting based on CSS Paged Media standards
2. **Precise Conversion**: Converts HTML elements to SVG graphics with pixel-perfect accuracy via `dom2svg`
3. **PDF Generation**: Writes SVG content into PDF documents using `pdfMake`

This approach ensures the output PDF is visually identical to the original HTML.


## 🚀 Quick Start

### Basic Installation

```bash
# Using npm
npm install dom-svg-pdf

# Using pnpm
pnpm add dom-svg-pdf

# Using yarn
yarn add dom-svg-pdf
```


## 📝 Usage Tutorial

### Basic Usage

```typescript
import { domSvgPdf } from 'dom-svg-pdf'

// Method 1: Call browser print dialog
async function printWithBrowser() {
  const printer = await domSvgPdf('#content', { 
    print: true 
  })
  printer.print()
}

// Method 2: Direct PDF generation and download
async function downloadPDF() {
  const pdf = await domSvgPdf('#content')
  pdf.download('document.pdf') // Direct download
}
```

### Single Page Export

```typescript
// Export only page 2
const pdf = await domSvgPdf('#content', {
  pageNumber: 2 // Export page 2 (starts from 1)
})
```

### Multi-page Export

```typescript
// Export multiple pages as one PDF
const pdf = await domSvgPdf([
  { el: '#page1', stylesheet: 'body { color: red; }' },
  { el: '#page2', stylesheet: 'body { color: blue; }' },
  { el: '#page3' }
])
```

### Mathematical Formula Support

```typescript
// KaTeX fonts are embedded, just enable it
const pdf = await domSvgPdf('#math-content', {
  katex: true // Enable KaTeX support (fonts auto-loaded)
})
```

### Custom Fonts

#### Method 1: Load Fonts from Network URLs

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

#### Method 2: Configure Custom Fonts via VFS

```typescript
const pdf = await domSvgPdf('#content', {
  // VFS Virtual File System (Base64 font data)
  vfs: {
    'MyFont-Regular.ttf': 'AAEAAAAOAIAAAwBgT1MvM...',  // Base64 font data
    'MyFont-Bold.ttf': 'AAEAAAAOAIAAAwBgT1MvM...'     // Base64 font data
  },
  fonts: {
    MyCustomFont: {
      normal: 'MyFont-Regular.ttf',
      bold: 'MyFont-Bold.ttf',
      italics: 'MyFont-Regular.ttf', // Reuse regular font
      bolditalics: 'MyFont-Bold.ttf'  // Reuse bold font
    }
  },
  docDefinition: {
    defaultStyle: { 
      font: 'MyCustomFont'
    }
  }
})
```


## 🔧 Configuration Reference

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `print` | `boolean` | `false` | Whether to use browser print mode |
| `pageNumber` | `number` | `undefined` | Specify page number to export (starts from 1) |
| `bold` | `boolean` | `false` | Whether to simulate bold effect (simulates bold when no bold font available) |
| `katex` | `boolean` | `false` | Whether to enable KaTeX mathematical formula fonts |
| `fonts` | `TFontDictionary` | `{}` | Custom font configuration |
| `vfs` | `VirtualFonts` | `{}` | Virtual file system (font files) |
| `docDefinition` | `Partial<TDocumentDefinitions>` | `{}` | pdfMake document configuration |
| `printPlugins` | `Parameters<typeof registerHook>[]` | `[]` | vivliostyle.js plugins |
| `beforePaged` | `() => void` | `undefined` | Before pagination hook |
| `afterPaged` | `(paged) => void` | `undefined` | After pagination hook |
| `beforeToSvg` | `(page, index, total) => void` | `undefined` | Before SVG conversion hook |
| `afterToSvg` | `(svg, index, total) => void` | `undefined` | After SVG conversion hook |
| `beforePdfMake` | `(docDefinition) => void` | `undefined` | Before PDF generation hook |
| `afterPdfMake` | `(pdf, docDefinition) => void` | `undefined` | After PDF generation hook |

### Lifecycle Hooks Details

All lifecycle hooks are optional and used to execute custom logic at different stages of the conversion process:

```typescript
const pdf = await domSvgPdf('#content', {
  // Before pagination
  beforePaged: () => {
    console.log('About to start pagination...')
    // Can modify DOM or styles here
  },
  
  // After pagination
  afterPaged: ({ pageSize, pages }) => {
    console.log(`Pagination complete: ${pages.length} pages`)
    console.log(`Page size: ${pageSize.width} x ${pageSize.height}`)
    // Can check pagination results here
  },
  
  // Before SVG conversion (called for each page)
  beforeToSvg: (page, index, total) => {
    console.log(`Starting conversion of page ${index + 1}/${total}`)
    // Can modify individual page content here
  },
  
  // After SVG conversion (called for each page)
  afterToSvg: (svg, index, total) => {
    console.log(`Page ${index + 1}/${total} conversion complete`)
    // Can process SVG content here
  },
  
  // Before PDF generation
  beforePdfMake: (docDefinition) => {
    console.log('About to generate PDF...', docDefinition)
    // Can make final modifications to PDF config here
  },
  
  // After PDF generation
  afterPdfMake: (pdf, docDefinition) => {
    console.log('PDF generation complete', pdf, docDefinition)
    // Can process the generated PDF object here
  }
})
```

## ⚠️ Important Notes

- **Runtime Environment**: This library is designed for browsers and requires DOM environment. For server-side use, pair with Puppeteer
- **Browser Compatibility**: Recommended for use in modern browsers, IE not supported

## 🔗 Related Resources

- **pdfMake Documentation**: [https://pdfmake.github.io/docs/](https://pdfmake.github.io/docs/)
- **vivliostyle.js**: [https://vivliostyle.org/](https://vivliostyle.org/)
- **Paged.js**: [https://pagedjs.org/en/documentation/](https://pagedjs.org/en/documentation/)
- **KaTeX**: [https://katex.org/](https://katex.org/)
- **CSS Paged Media**: [https://www.w3.org/TR/css-page-3/](https://www.w3.org/TR/css-page-3/)

## 🙏 Acknowledgments

Thanks to the following open source projects for providing strong support for `dom-svg-pdf`:

- **[vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js)** - A new typesetting system based on web standards, providing professional CSS Paged Media support
- **[dom2svg](https://github.com/xiashui1994/dom2svg)** - High-quality HTML DOM to SVG conversion library
- **[pdfMake](https://github.com/bpampuch/pdfmake)** - Pure JavaScript client-side PDF document generation library
- **[KaTeX](https://github.com/KaTeX/KaTeX)** - Fast, high-quality mathematical formula rendering engine

## 📄 License

[MIT License](LICENSE)