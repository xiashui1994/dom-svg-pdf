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

<p align="center">将 HTML DOM 节点转换为 PDF</p>

<p align="center"><a href="README.md">English</a> | 简体中文</p>

## 简介

dom-svg-pdf 不依赖浏览器的打印功能，可以直接将网页导出为 PDF。

## 示例

在线预览：https://dom-svg-pdf.vercel.app

## 原理

1. 将 HTML 进行分页（基于 CSS 分页媒体）
2. 将分页后的 HTML 转换为 SVG
3. 将 SVG 写入 PDF

## 特点

- 兼容 PC 端和移动端
- 自动分页导出
- 基于 CSS 分页媒体
- 支持数学公式
- 支持自定义字体
- 支持单页导出

## 安装

```sh
pnpm/npm/yarn i dom-svg-pdf
```

## 使用

```js
import { domSvgPdf } from 'dom-svg-pdf'

// 使用浏览器打印
const pdf = await domSvgPdf('#app', {
  print: true,
})
pdf.print()

// 直接导出 PDF（需要引入字体）
const pdf = await domSvgPdf('#app')
pdf.getBlob((blob) => {
  const url = URL.createObjectURL(blob)
  window.open(url)
})
```

## 配置

#### `katex`

- 是否使用 KaTeX 支持公式导出，默认值为 `false` ，为 `true` 时会加载 KaTeX 的字体（项目中需要使用 KaTeX 渲染公式，且以 HTML 形式输出）

- 需要将 `public/fonts` 目录中的 KaTeX 字体文件放到项目中，并配置 `fontsPath` 参数

#### `fonts`

- 自定义字体，默认字体为 [LXGWNeoXiHei](https://github.com/lxgw/LxgwNeoXiHei), 详情请参考 [Custom fonts (client-side)](https://pdfmake.github.io/docs/0.1/fonts/custom-fonts-client-side/)

#### `fontsPath`

- 自定义字体路径，默认值为 `window.location.origin`

#### `bold`

- 是否模拟加粗，默认为 `false`，为 `true` 时会模拟加粗效果

#### `docDefinition`

- PDF 配置，详情请参考 [pdfMake](https://pdfmake.github.io/docs/0.1/document-definition-object/)

#### `pageNumber`

- 导出的页码索引，从 `1` 开始，如果配置了此参数，则仅导出指定的页码

#### `print`

print 为 `true` 时，唤起浏览器打印功能（打印内容自动分页）

#### `printPlugins`

`vivliostyle.js` 的插件，详情请参考 [vivliostyle.js](https://docs.vivliostyle.org/#/api#plugin)

#### `beforePaged`

生命周期钩子，在分页前调用

#### `afterPaged`

生命周期钩子，在分页后调用，参数：`pageSize` （页面宽高），`pages` （分页后的页面 DOM 数组）

#### `beforeToSvg`

生命周期钩子，在 svg 转换前调用，参数：`page` （页面 DOM），`index` （页面索引），`total` （页面总数）

#### `afterToSvg`

生命周期钩子，在 svg 转换后调用，参数：`svg` （svg 字符串），`index` （页面索引），`total` （页面总数）

#### `beforePdfMake`

生命周期钩子， 在生成 PDF 对象前调用，参数：`docDefinition` （PDF 配置）

#### `afterPdfMake`

生命周期钩子， 在生成 PDF 对象后调用，参数：`pdf` （PDF 对象），`docDefinition` （PDF 配置）

## 注意

- 为浏览器开发的库，可以在浏览器中运行。在服务器上使用 JSDOM 可能无法正常使用，不过可以在 Puppeteer 中运行。

## 鸣谢

- [vivliostyle.js](https://github.com/vivliostyle/vivliostyle.js)：一个基于 Web 标准技术的新型排版系统
- [dom2svg](https://github.com/xiashui1994/dom2svg)：将给定 HTML DOM 节点转换为可访问的 SVG
- [pdfMake](https://github.com/bpampuch/pdfmake)：纯 JavaScript 中用于服务器端和客户端的 PDF 文档生成库
- [katex](https://github.com/KaTeX/KaTeX)：快速数学公式渲染
- [LXGWNeoXiHei](https://github.com/lxgw/LxgwNeoXiHei)：源自 IPAex Gothic 的简体中文无衬线字体
