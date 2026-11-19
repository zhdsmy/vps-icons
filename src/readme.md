# VPS & cloud icons · 云厂商图标

用于监控面板、导航页和文档的云厂商及通用图标。下载后可离线引用。
Provider and infrastructure icons for dashboards, directories, and documentation. All assets work offline.

[图标对照 / Preview](preview.html) · [索引 / Index](index.json)

## 使用 / Usage

本地直接引用 `svg/color/<slug>.svg`。背景较暗时，优先使用索引声明的 `color-dark`。
Use the regular color SVG on light surfaces. On dark surfaces, use the declared dark variant when available.

```html
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="svg/small/color-dark/aws.svg">
  <img src="svg/small/color/aws.svg" width="16" height="16" alt="AWS">
</picture>
```

PNG 专用图标可直接引用，如 `png/color/16/bagevm.png`。 / For PNG-only entries, choose the display size directly.

固定版本 CDN 示例，须先发布对应 tag 才能使用。
For a published tag, use a pinned CDN URL. This example assumes the tag exists.

```html
<img src="https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.0.0/svg/color/aws.svg"
     width="24" height="24" alt="AWS">
```

单色 SVG 可内联继承 `currentColor`。外链图标可用 CSS mask 跟随文字颜色。
Inline the monochrome SVG to inherit text color, or apply it as a mask to an element.

```html
<span class="provider" role="img" aria-label="Tencent Cloud"></span>
<style>
.provider {
  display: inline-block;
  width: 1em;
  height: 1em;
  background: currentColor;
  mask: url("svg/mono/tencent-cloud.svg") center / contain no-repeat;
}
</style>
```

| 格式 / Format | 路径 / Path | 尺寸 / Size |
|---|---|---|
| SVG | `svg/{color,color-dark,mono}/<slug>.svg` | 64 × 64 viewBox |
| PNG | `png/{color,color-dark,mono-black,mono-white}/<size>/<slug>.png` | <!-- sizes --> px |

## 图标目录 / Catalog

| 质量 / Quality | 定义 / Definition |
|---|---|
| `vector` | 官方、已署名的第三方原生矢量或本库原创图形。 / Native vector from the brand, a credited collection, or this project. |
| `redrawn` | 对照位图手工绘制，在 64 px 与原图比对。 / Manual SVG redraw compared to the original at 64 px. |
| `raster` | 高清位图。保留渐变、阴影和复杂背景的 PNG 仅提供 PNG 版本。 / High-resolution bitmap. Shaded artwork is available as PNG. |
| `upscaled` | 原图最长边不超过 64 px，经传统超采样放大。 / Small original enlarged with Lanczos sampling. |
| `placeholder` | 品牌色底与厂商首字母的占位图。 / Initial on a brand-colored field when artwork is unavailable. |

`variants.svg` 为空时请引用 PNG。PNG 自动选择小尺寸图稿。对具有 `small.maxSize` 的矢量条目，可从 `svg/small/<variant>/<slug>.svg` 直接取小尺寸图稿。
Use PNG where the SVG variant list is empty. The index gives the original source, one-time processing steps and small-icon provenance. The table marks entries seeking clearer or vector sources.

| 图标 / Icon | 名称 / Name | Slug | 深色 / Dark | 来源质量 / Quality | 来源 / Source |
|---|---|---|:---:|---|---|
<!-- catalog -->

## 贡献 / Contributing

1. 提供能核实的来源 URL、原始尺寸和授权信息。首选官方矢量图形标。 / Supply the source URL, native dimensions, and license. Prefer an official vector symbol.
2. 在 `src/art/<slug>/` 提交已处理的彩色、单色和所需深色图稿，小尺寸专用图放在 `small/`。SVG 使用 64 × 64 viewBox，单色使用 `currentColor`。位图源使用 512 × 512 透明 PNG，各变体分别保存。 / Commit prepared masters. Use lowercase kebab-case slugs and leave optical padding.
3. 更新 `src/catalog.json` 的名称、别名、来源、许可、五档质量、小图来源和一次性处理步骤。纯色背景按记录的颜色和边缘规则处理。复杂渐变或阴影保留 PNG。 / Record provenance and the cleanup recipe. Keep source preparation outside the build. Use conventional resampling for small inputs.
4. 使用 Node.js 22 或更新版本执行下列命令。打开 `preview.html`，在浅色和深色背景检查 16、24、32 px。提交源文件及构建产物。 / Run the build, inspect small sizes in both themes (open the 24 px PNGs directly), and include regenerated assets.

```sh
npm ci && npm run build && npm run check
```

## 授权 / License

代码、元数据和五个原创通用图标使用 MIT。各品牌的名称、图标和商标归各自权利人所有。本库仅供识别服务。品牌图稿遵循各自来源的授权，使用前请查看索引的 `license` 和 `source`。
Code, metadata and the five original generic icons use the MIT license. Brand artwork and trademarks belong to their respective owners and are included for identification. Collection licenses cover collection contributions. Individual brand rights and guidelines still apply. Direct website artwork with no identified open license is marked proprietary.

[MIT](LICENSE) · [LobeHub MIT notice](src/LICENSE-LobeHub.txt) · [Simple Icons disclaimer](https://github.com/simple-icons/simple-icons/blob/11.15.0/DISCLAIMER.md)
