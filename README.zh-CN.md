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

## 配置

#### `katex`

是否使用 KaTeX，仅支持以 HTML 形式输出 KaTeX，并且需要配置字体，具体配置请参考下文

#### `fonts`

自定义字体

#### `fontsPath`

自定义字体路径

#### `bold`

是否启用加粗

#### `docDefinition`

`pdfMake` 配置，详情请参考 [pdfMake 文档](https://pdfmake.github.io/docs/0.1/)

#### `pageNumber`

导出的页码，如果配置此参数，则仅导出指定的页码

#### `print`

print 为 true 时，在 PC 端唤起浏览器打印功能（打印内容自动分页）

#### `printPlugins`

`vivliostyle.js` 的插件，详情请参考 [vivliostyle.js 文档](https://docs.vivliostyle.org/#/api#plugin)

#### `beforePaged`

生命周期钩子，在分页前调用

#### `afterPaged`

生命周期钩子，在分页后调用

#### `beforeToSvg`

生命周期钩子，在 svg 转换前调用

#### `afterToSvg`

生命周期钩子，在 svg 转换后调用

#### `beforePdfMake`

生命周期钩子， 在生成 PDF 对象前调用

#### `afterPdfMake`

生命周期钩子， 在生成 PDF 对象后调用

## 使用

```js
a
```

## 注意

- 为浏览器开发的库，可以在浏览器中运行。在服务器上使用 JSDOM 可能无法正常使用，不过可以在 Puppeteer 中运行。
