# vps-icons · 云厂商与主机图标库

面向服务器监控面板（如哪吒探针）、状态页、导航站与技术文档的独立云厂商、VPS / IDC 及通用基础设施图标库。通过 jsDelivr CDN 直接引用，也可克隆后完全离线使用。

Self-contained cloud, VPS, hosting, and generic infrastructure icons for monitoring dashboards, status pages, directories, and documentation. Load directly via jsDelivr CDN or self-host offline.

<!-- stats -->

[![全部图标预览（上：浅色背景，下：深色背景） / All icons on light and dark backgrounds](preview.png)](https://zhdsmy.github.io/vps-icons/preview.html)

[在线交互预览 · Live preview](https://zhdsmy.github.io/vps-icons/preview.html) · [完整元数据索引 · index.json](index.json)

---

## CDN 用法 / CDN Usage

本库通过 GitHub tag + [jsDelivr](https://www.jsdelivr.com/) 分发（不发布 npm 包）。生产环境请固定版本 tag，如 `@v1.1.0`：

Distributed via GitHub tags and jsDelivr (not published to npm). Pin an immutable release tag such as `@v1.1.0` in production:

```text
https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.1.0
```

### 1. 彩色图标（`<img>` 与浅/深自适应 `<picture>`） / Color Icons

```html
<!-- 标准尺寸彩色 SVG / Standard color SVG -->
<img src="https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.1.0/svg/color/cloudflare.svg"
     width="32" height="32" alt="Cloudflare">

<!-- 浅/深背景自适应 + 小尺寸专版（≤ 24 px）/ Theme-aware compact SVG (<= 24 px) -->
<picture>
  <source media="(prefers-color-scheme: dark)"
          srcset="https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.1.0/svg/small/color-dark/aws.svg">
  <img src="https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.1.0/svg/small/color/aws.svg"
       width="24" height="24" alt="AWS">
</picture>

<!-- 固定尺寸 PNG（自动按 small.maxSize 选用小图）/ Fixed-size PNG (auto-selects small master) -->
<img src="https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.1.0/png/color/32/cloudflare.png"
     width="32" height="32" alt="Cloudflare">
```

> 若某个图标在 `index.json` 的 `variants.svg` 中不含 `color-dark`，深色背景直接回退到 `svg/color/<slug>.svg`（PNG 同理回退到 `png/color/<size>/<slug>.png`）。
> If `color-dark` is absent from `variants` in `index.json`, fall back to `color`.

### 2. 单色外链（CSS `mask` 跟随文字颜色） / Monochrome via CSS Mask

外链 `svg/mono/<slug>.svg`（或小尺寸 `svg/small/mono/<slug>.svg`）配合 `mask` 与 `background: currentColor`，可自动跟随父元素文字颜色：

Apply an external monochrome SVG as a CSS mask so the icon inherits `currentColor`:

```html
<span class="vps-icon" role="img" aria-label="Tencent Cloud"></span>
<style>
.vps-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  -webkit-mask: url("https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.1.0/svg/mono/tencent-cloud.svg") center / contain no-repeat;
  mask: url("https://cdn.jsdelivr.net/gh/zhdsmy/vps-icons@v1.1.0/svg/mono/tencent-cloud.svg") center / contain no-repeat;
}
</style>
```

### 3. 单色内联（`currentColor`） / Inline Monochrome SVG

所有 `svg/mono/<slug>.svg` 与 `svg/small/mono/<slug>.svg` 均使用 `viewBox="0 0 64 64"` 和 `fill="currentColor"`，无外部依赖，可直接内联到 HTML / JSX / Vue（以下摘自 `svg/mono/vercel.svg`）：

Every monochrome SVG uses `viewBox="0 0 64 64"` and `fill="currentColor"` with no external references, ready to inline directly (excerpt from `svg/mono/vercel.svg`):

```html
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64" width="16" height="16" aria-hidden="true">
  <path fill="currentColor" d="M60 56.558H4L32 7.442z"/>
</svg>
```

---

## 变体与尺寸 / Variants & Sizes

| 格式 / Format | 路径 / Path | 尺寸 / Size | 说明 / Notes |
|---|---|---|---|
| SVG（标准彩色） | `svg/color/<slug>.svg` | 64 × 64 viewBox | 默认及浅色背景主图 / Default & light surfaces |
| SVG（深色彩色） | `svg/color-dark/<slug>.svg` | 64 × 64 viewBox | 仅当 `variants.svg` 包含 `color-dark` 时存在 / Only when `color-dark` is declared |
| SVG（单色） | `svg/mono/<slug>.svg` | 64 × 64 viewBox | `fill="currentColor"`，支持内联与 CSS `mask` / Inherits `currentColor` |
| SVG（小尺寸专版） | `svg/small/{color,color-dark,mono}/<slug>.svg` | 64 × 64 viewBox | 仅当 `small.maxSize` 存在时提供 / Only when `small.maxSize` is set |
| PNG（预渲染位图） | `png/{color,color-dark,mono-black,mono-white}/<size>/<slug>.png` | <!-- sizes --> px | `size <= small.maxSize` 时自动由 `small/` 渲染 / Auto-rendered from `small/` at small sizes |

---

## `small` 小图是什么、何时用 / Compact Small Masters

在 16 px – 32 px 的侧边栏、服务器列表、状态徽章等场景下，字标、细线条或复杂细节容易发糊、粘连或难以辨认。对这类图标，本库在 `svg/small/<variant>/<slug>.svg` 提供专门的小尺寸图稿（抽离独立图形标、精简噪点或加粗描边），并在 `index.json` 中通过 `small.maxSize`（常见为 `24` 或 `32`）声明生效阈值：

At 16–32 px (sidebars, server tables, badges), wide wordmarks, hairlines, and intricate marks lose clarity. Entries declaring `small.maxSize` (typically `24` or `32`) ship dedicated compact masters under `svg/small/` with isolated symbols, simplified geometry, or reinforced strokes:

- **引用 PNG 时（自动）**：无需额外判断，`png/<variant>/<size>/<slug>.png` 在 `size <= small.maxSize` 时已自动使用小图渲染。
  **Using PNG (automatic):** pre-rendered PNGs at `size <= small.maxSize` already use the `small/` master.
- **引用 SVG 时（按阈值切换）**：当渲染尺寸 `<= small.maxSize`（例如 16 px / 24 px 表格图标）时，加载 `svg/small/<variant>/<slug>.svg`；大于该尺寸时加载 `svg/<variant>/<slug>.svg`。未声明 `small.maxSize` 的条目全尺寸共用标准主图。
  **Using SVG (switch by threshold):** load `svg/small/<variant>/<slug>.svg` when displaying at `<= small.maxSize` px, and `svg/<variant>/<slug>.svg` above it. Entries without `small.maxSize` use the primary master at all sizes.

---

## 来源质量五档 / Quality Tiers

| 质量 / Quality | 定义 / Definition |
|---|---|
| `vector` | 官方原生矢量、已署名开源图标集原生矢量，或本库 5 个原创通用图标。 / Native vector from the brand, a credited collection, or one of this project's 5 original generic icons. |
| `redrawn` | 对照官方高清位图/站标手工重绘的干净矢量，在 64 px 与原图比对。 / Hand-redrawn vector traced from official raster artwork and verified at 64 px. |
| `raster` | 高清位图（最长边 ≥ 256 px，保留复杂渐变或阴影，仅提供 PNG）。 / High-resolution bitmap (≥ 256 px) kept as PNG-only to preserve complex shading. |
| `upscaled` | 原图最长边 ≤ 64 px，经 Lanczos 传统重采样放大（待替换清晰源）。 / Small raster original (≤ 64 px) enlarged with Lanczos resampling (better source wanted). |
| `placeholder` | 暂无可用官方图稿时以品牌色与首字母生成的占位图（待替换）。 / Brand-colored initial placeholder when official artwork is unavailable. |

---

## `index.json` 结构 / Index Schema

`index.json` 由 `src/catalog.json` 构建生成，可供前端或脚本自动检索别名、品牌色、变体与小图阈值：

`index.json` is generated from `src/catalog.json` for programmatic lookup of aliases, brand colors, available variants, and small-icon thresholds:

| 字段 / Field | 类型 / Type | 说明 / Description |
|---|---|---|
| `sizes` | `number[]` | 导出的 PNG 像素尺寸列表（`[16, 24, 32, 48, 64, 128, 256, 512]`）。 / Exported PNG widths in px. |
| `icons[]` | `object[]` | 图标条目数组。 / Array of icon records. |
| `slug` | `string` | 唯一文件名标识（小写 `kebab-case`）。 / Unique lowercase `kebab-case` identifier used in paths. |
| `name` / `names["zh-CN"]` | `string` | 英文名与中文名。品牌有官方中文名时使用官方名称，否则沿用英文名。 / English and Chinese names. Brands use their official Chinese name when available, otherwise the English name. |
| `aliases` | `string[]` | 检索键，可包含拼音。别名、常用名、slug 和英文名按 NFKC 规范化并忽略大小写、空白和标点后，不能指向不同条目。 / Search keys, including pinyin. Across entries, aliases and nicknames must be unique and cannot shadow a slug or English name after NFKC normalization and removal of case, whitespace and punctuation differences. |
| `nicknames?` | `string[]` | 中文社区常用的简称或外号。提供时至少包含一个非空字符串。 / Common names in Chinese-speaking communities. When present, contains one or more non-empty strings. |
| `website` | `string` | 厂商官网 HTTPS 链接（通用图标指向 `preview.html` 锚点）。 / Official HTTPS website (or `preview.html` anchor for generic icons). |
| `brandColor` | `string` | 十六进制品牌主色（`#RRGGBB`）。 / Primary hex brand color. |
| `source` / `monoSource?` | `string` | 主图与可选单色图的原始来源 URL（5 个原创图标为仓库内路径）。 / Provenance URL(s) for primary and optional monochrome masters. |
| `sourcePage?` / `paletteSource?` | `string` | 图源说明页与配色来源的 HTTPS 链接。 / HTTPS links to the source page and color reference. |
| `license` | `string` | 该图标对应的授权与商标说明。 / Per-icon license and trademark statement. |
| `quality` | `string` | 五档来源质量之一（`vector` \| `redrawn` \| `raster` \| `upscaled` \| `placeholder`）。 / One of the five quality tiers. |
| `processing` | `string[]` | 一次性图形整理与小图/深色处理记录。 / One-time artwork preparation notes. |
| `small` | `object` | `{ artwork, source, maxSize? }`：小尺寸处理说明、来源与可选 `maxSize` 阈值（对应 `src/catalog.json` 中的 `smallMax`）。 / Small-size provenance and optional `maxSize` threshold (from `smallMax` in `src/catalog.json`). |
| `variants` | `object` | `{ svg: string[], png: string[] }`：实际生成的变体列表；当 `src/catalog.json` 中 `hasDark: true` 时包含 `color-dark`。 / Available asset variants; includes `color-dark` when `hasDark: true` in `src/catalog.json`. |
| `nativeSize?` | `[number, number]` | 仅 `raster` / `upscaled` 条目包含的原始位图像素尺寸。 / Original pixel dimensions (only on `raster` / `upscaled` entries). |

```json
{
  "sizes": [16, 24, 32, 48, 64, 128, 256, 512],
  "icons": [
    {
      "slug": "aws",
      "name": "Amazon Web Services",
      "names": { "zh-CN": "亚马逊云科技" },
      "aliases": ["aws", "lightsail", "amazon", "yamaxun"],
      "website": "https://aws.amazon.com",
      "brandColor": "#252F3E",
      "source": "https://raw.githubusercontent.com/gilbarbara/logos/.../logos/aws.svg",
      "license": "CC0-1.0 (SVG Logos collection); brand rights reserved",
      "quality": "vector",
      "processing": ["..."],
      "small": {
        "artwork": "Compact aws wordmark ... for 16 and 24 px.",
        "source": "https://raw.githubusercontent.com/gilbarbara/logos/.../logos/aws.svg",
        "maxSize": 24
      },
      "variants": {
        "svg": ["color", "color-dark", "mono"],
        "png": ["color", "color-dark", "mono-black", "mono-white"]
      }
    }
  ]
}
```

---

## 图标目录 / Catalog

<!-- catalog-note -->

名称不同时并列显示英文名与中文名。常用名列列出中文社区的叫法，缺省时显示「—」。

English and Chinese names appear together when they differ. The next column lists common community names or an em dash when none are recorded.

| 图标 / Icon | 名称 / Name | 常用名 / Also known as | Slug | 深色 / Dark | 小图 / Small | 来源质量 / Quality | 来源 / Source |
|---|---|---|---|:---:|:---:|---|---|
<!-- catalog -->

---

## 贡献指南 / Contributing

欢迎提交新厂商、用官方原生矢量替换 `redrawn` 条目，或改进深色与小尺寸清晰度。你可以先通过 [Icon Issue 模板](.github/ISSUE_TEMPLATE/icon.yml) 提供线索，或直接提交 PR：

Contributions of new active providers, official native vector upgrades for `redrawn` entries, and dark/small-size refinements are welcome. Open an issue using the [icon template](.github/ISSUE_TEMPLATE/icon.yml) or submit a PR:

1. **收录原则 / Inclusion policy**：仅收录仍在正常运营的云服务商、VPS / IDC 厂商或通用基础设施图标。**不收录 DigVPS 墓碑厂商、已停业/跑路、或已并入其他品牌且原官网失效的厂商。**
   Only active providers are accepted. **Tombstoned (e.g. DigVPS graveyard), shut-down, defunct, or retired/merged brands whose websites are offline will not be included.**
2. **来源与命名 / Source & naming**：提供可公开访问的 HTTPS 原图 URL（首选官方 SVG 图形标）及准确授权。`slug` 必须使用小写 `kebab-case`（如 `oracle-cloud`）。
   Provide a verifiable HTTPS source URL (prefer official vector marks) and accurate license. Use lowercase `kebab-case` slugs.
3. **准备图稿 / Prepare masters**：将整理好的图稿放在 `src/art/<slug>/`（`color.svg`、`mono.svg`，暗底对比不足时补 `color-dark.svg`，16–32 px 易糊时在 `small/` 放小尺寸专版）。统一使用 `viewBox="0 0 64 64"` 与光学留白（满幅方块缩至约 50 × 50，圆形/图形约 56 × 56），单色图仅使用 `currentColor` 且保留徽章镂空轮廓。
   Place prepared masters under `src/art/<slug>/` using `viewBox="0 0 64 64"`, optical padding (~50 × 50 for solid squares, ~56 × 56 for circles/marks), and `currentColor` for monochrome.
4. **更新目录 / Update catalog**：在 `src/catalog.json` 中补充名称、`aliases`、`website`、`brandColor`、`source`、`license`、`quality`（如实标注 `vector` / `redrawn` 等）、`hasDark`、`smallMax` 与 `processing`。不要手动编辑 `svg/`、`png/`、`index.json`、`preview.html`、`preview.png` 或 `README.md`。
   Update `src/catalog.json` with honest `quality` and provenance. Never hand-edit generated files.
5. **构建与校验 / Build & verify**（需 Node.js ≥ 22）：运行下方命令，直接在浏览器打开 `preview.html` 检查浅色（`#ffffff`）与深色（`#111827`）背景下的 16 / 24 / 32 px 效果，并一并提交源文件与生成产物（CI 会验证 `git status` 无未提交差异）。

```sh
npm ci && npm run build && npm run check
```

---

## 商标声明与授权 / Trademarks & License

- **代码与原创资产 / Code & original assets**：本仓库的构建脚本、元数据与 5 个原创通用图标（`home`、`nas`、`relay`、`other`、`unknown`）采用 **MIT 协议**，详见 [`LICENSE`](LICENSE)。
  Build scripts, metadata, and the five original generic icons (`home`, `nas`, `relay`, `other`, `unknown`) are licensed under the **MIT License** ([LICENSE](LICENSE)).
- **商标声明 / Trademarks**：所有品牌名称、标志和商标均归各自权利人所有，本库收录这些图标仅用于识别对应云服务与主机商（指示性使用）。使用前请遵守各品牌的商标与品牌使用规范；如权利人希望更新或移除对应图标，请提交 Issue。
  All brand names, logos, and trademarks belong to their respective owners and are included strictly for service identification. Respect each brand's usage guidelines; brand owners may open an issue to request updates or removal.
- **第三方图标授权 / Third-party artwork licenses**：各品牌图标遵循各自来源的授权，具体以 `index.json` 中每条记录的 `license` 与 `source` 字段为准：
  Individual icons remain under their upstream licenses as recorded in `index.json` (`license` and `source`):
  - **LobeHub Icons** — MIT License（[`src/LICENSE-LobeHub.txt`](src/LICENSE-LobeHub.txt)）
  - **Simple Icons** — CC0-1.0（[`src/LICENSE-CC0-1.0.txt`](src/LICENSE-CC0-1.0.txt) · [Simple Icons Disclaimer](https://github.com/simple-icons/simple-icons/blob/16.38.0/DISCLAIMER.md)）
  - **SVG Logos (`gilbarbara/logos`)** — CC0-1.0（[`src/LICENSE-CC0-1.0.txt`](src/LICENSE-CC0-1.0.txt)）
  - **theSVG (`auth-badges`)** — CC0-1.0（[`src/LICENSE-CC0-1.0.txt`](src/LICENSE-CC0-1.0.txt)）
  - **Scaleway Ultraviolet** — Apache-2.0（[`src/LICENSE-Apache-2.0.txt`](src/LICENSE-Apache-2.0.txt)）
  - **Adobe Source Sans Pro**（`soyoustart` 字体轮廓 / outlines）— SIL OFL-1.1（[`src/LICENSE-OFL-1.1.txt`](src/LICENSE-OFL-1.1.txt)）
  - **Wikimedia Commons (`PD-textlogo`)** — 公有领域文本标识，商标权归权利人所有 / Public domain textlogo; trademark rights reserved
  - **品牌官网直采 / Official brand websites** — 未声明开源许可的均标为专有品牌图稿（Proprietary brand artwork），权利归品牌方所有 / Marked proprietary where no open license is identified

| 允许的 `license` 值 / Accepted license statement | 条目数 / Icons |
|---|---:|
<!-- licenses -->
