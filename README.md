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

<p align="center">Convert HTML DOM nodes to PDF</p>

<p align="center">English | <a href="README.zh-CN.md">简体中文</a></p>

## Introduction

`dom-svg-pdf` does not depend on the browser’s print function and can directly export web pages as PDF files.

## Demo

Online preview: https://dom-svg-pdf.vercel.app

## Working Principle

1. Paginate HTML (based on CSS paginated media)
2. Convert the paginated HTML to SVG
3. Write the SVG into a PDF

## Features

- Compatible with both PC and mobile devices
- Automatically paginates and exports
- Based on CSS paginated media
- Supports mathematical formulas
- Supports custom fonts
- Supports single-page export

## Installation

```sh
pnpm/npm/yarn i dom-svg-pdf
```

## Usage

```js
import { domSvgPdf } from 'dom-svg-pdf'

// Use browser print
const pdf = await domSvgPdf('#app', {
  print: true,
})
pdf.print()

// Directly export PDF (requires importing fonts)
const pdf = await domSvgPdf('#app')
pdf.getBlob((blob) => {
  const url = URL.createObjectURL(blob)
  window.open(url)
})
```

## Configuration

#### `katex`

- Whether to use KaTeX for formula export. The default value is `false`. If set to `true`, it will load KaTeX fonts (the project must use KaTeX to render formulas and output them as HTML)

- You need to place the KaTeX font files from the `public/fonts` directory into your project and configure the `fontsPath` parameter

#### `fonts`

- Custom fonts. The default font is [Roboto]. For more details, refer to [Custom fonts (client-side)](https://pdfmake.github.io/docs/0.1/fonts/custom-fonts-client-side/)

#### `vfs`

- Virtual file system. For more details, refer to [Virtual File System](https://pdfmake.github.io/docs/0.1/fonts/custom-fonts-client-side/vfs/)

#### `bold`

- Whether to simulate bold text. The default value is `false`. If set to `true`, bold effects will be simulated

#### `docDefinition`

- PDF configuration. For details, refer to [pdfMake](https://pdfmake.github.io/docs/0.1/document-definition-object/)

#### `pageNumber`

- The page number index to export, starting from `1`. If this parameter is configured, only the specified page will be exported

#### `print`

If print is set to `true`, it will trigger the browser’s print function (automatically paginates print content)

#### `printPlugins`

`vivliostyle.js` plugin. For details, refer to [vivliostyle.js](https://docs.vivliostyle.org/#/api#plugin)

#### `beforePaged`

Lifecycle hook called before pagination

#### `afterPaged`

Lifecycle hook called after pagination. Parameters: `pageSize` (width and height of the page), `pages` (array of paginated page DOM elements)

#### `beforeToSvg`

Lifecycle hook called before converting to SVG. Parameters: `page` (page DOM), `index` (page index), `total` (total number of pages)

#### `afterToSvg`

Lifecycle hook called after converting to SVG. Parameters: `svg` (SVG string), `index` (page index), `total` (total number of pages)

#### `beforePdfMake`

Lifecycle hook called before generating the PDF object. Parameters: `docDefinition` (PDF configuration)

#### `afterPdfMake`

Lifecycle hook called after generating the PDF object. Parameters: `pdf` (PDF object), `docDefinition` (PDF configuration)

## Notes

- This is a library developed for browsers and can run in a browser environment. It may not work correctly on the server using JSDOM, but it can run in Puppeteer

## Acknowledgements

- [vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js): an open source project for a new typesetting system based on web standard technology
- [dom2svg](https://github.com/xiashui1994/dom2svg): Library to convert a given HTML DOM node into an accessible SVG "screenshot"
- [pdfMake](https://github.com/bpampuch/pdfmake): PDF document generation library for server-side and client-side in pure JavaScript
- [katex](https://github.com/KaTeX/KaTeX): Fast math typesetting for the web
