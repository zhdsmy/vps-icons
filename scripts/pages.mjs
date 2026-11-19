import { displayPath, pngPath, qualities, read, svgPath } from './catalog.mjs'

const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

function stats(icons) {
  const counts = Object.fromEntries(qualities.map(q => [q, 0]))
  let dark = 0
  let small = 0
  let missingSvg = 0
  for (const icon of icons) {
    counts[icon.quality]++
    if (icon.variants.png.includes('color-dark')) dark++
    if (icon.small.maxSize) small++
    if (!icon.variants.svg.length) missingSvg++
  }
  const activeQualities = qualities.filter(q => counts[q] > 0)
  return { total: icons.length, counts, activeQualities, dark, small, missingSvg }
}

export function preview({ icons, sizes }) {
  const s = stats(icons)
  const qText = s.activeQualities.map(q => `${q} ${s.counts[q]}`).join(' · ')
  const summary = [
    `<p>共 <strong>${s.total}</strong> 个图标（${qText} · 深色变体 ${s.dark} · 小尺寸专版 ${s.small}）。按 16 / 32 / 64 px 原尺寸对比浅色与深色背景下的彩色和单色 PNG，点击名称打开对应图稿。</p>`,
    `<p class="sub">${s.total} icons (${qText} · ${s.dark} dark variants · ${s.small} compact small masters). Native-size 16 / 32 / 64 px color and monochrome PNGs on light and dark surfaces. Opens directly in any browser without a local server.</p>`,
  ].join('\n    ')

  const samples = sizes.filter(n => [16, 32, 64].includes(n))
  function panel(theme) {
    const heading = theme === 'light' ? '浅色 / Light (#ffffff)' : '深色 / Dark (#111827)'
    const rows = icons.map(icon => {
      const { name, slug, variants } = icon
      const color = theme === 'dark' && variants.png.includes('color-dark') ? 'color-dark' : 'color'
      const mono = theme === 'light' ? 'mono-black' : 'mono-white'
      const cells = samples.map(size => {
        const images = [color, mono].map(v => `<img src="${pngPath(slug, v, size)}" width="${size}" height="${size}" alt="${v}">`).join('')
        return `<td><div class="pair">${images}</div></td>`
      }).join('')
      return `<tr id="${theme}-${slug}"><th scope="row"><a href="${displayPath(icon, color)}">${escape(name)}</a><code>${slug}</code></th>${cells}</tr>`
    }).join('\n')
    return `<section class="panel ${theme}" aria-label="${heading}"><h2>${heading}</h2>
<table><thead><tr><th scope="col">Icon</th>${samples.map(n => `<th scope="col">${n} px</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></section>`
  }
  return read('src/preview.html')
    .replace('<!-- summary -->', summary)
    .replace('<!-- panels -->', panel('light') + '\n' + panel('dark'))
}

export function readme({ icons, sizes }, template) {
  const s = stats(icons)
  const qZh = s.activeQualities.map(q => '`' + q + '` ' + s.counts[q]).join(' · ')
  const qEn = s.activeQualities.map(q => s.counts[q] + ' `' + q + '`').join(', ')
  const svgZh = s.missingSvg ? `${s.total - s.missingSvg} 个含 SVG、${s.missingSvg} 个仅 PNG` : `全部提供 SVG 与 ${sizes.length} 档 PNG`
  const svgEn = s.missingSvg ? `${s.total - s.missingSvg} SVG + ${s.missingSvg} PNG-only` : `all with SVG + ${sizes.length} PNG sizes`
  const statsBlock = [
    `当前共收录 **${s.total}** 个图标（${qZh}；${svgZh}；**${s.dark}** 个含深色变体，**${s.small}** 个含小尺寸专版）。`,
    `Currently **${s.total}** icons (${qEn}; ${svgEn}; **${s.dark}** dark variants, **${s.small}** compact small masters).`,
  ].join('\n\n')

  const lowQuality = s.counts.upscaled + s.counts.placeholder
  const catalogNote = s.missingSvg === 0 && lowQuality === 0
    ? '当前全部条目均已提供矢量 SVG（无 PNG-only / `upscaled` / `placeholder`）。若能为 `redrawn` 条目提供官方原生矢量源，欢迎提交 Issue 或 PR。\n\nAll current entries ship as SVG (zero PNG-only, `upscaled`, or `placeholder` icons). Official native vector upgrades for `redrawn` entries are welcome.'
    : '表中对缺少 SVG 或处于 `upscaled` / `placeholder` 的条目会标注 `欢迎贡献 / better source wanted`；`variants.svg` 为空时请引用 PNG。\n\nEntries without SVG or marked `upscaled` / `placeholder` are flagged for better sources; use PNG when `variants.svg` is empty.'

  const rows = icons.map(icon => {
    const missingSvg = !icon.variants.svg.length
    const wanted = missingSvg || ['upscaled', 'placeholder'].includes(icon.quality)
    const label = missingSvg ? ' · PNG only' : ''
    const quality = icon.quality + label + (wanted ? ' · 欢迎贡献 / better source wanted' : '')
    const dark = icon.variants.png.includes('color-dark') ? `[✓](${displayPath(icon, 'color-dark')})` : '—'
    const smallCell = icon.small.maxSize
      ? (missingSvg ? `≤${icon.small.maxSize}` : `[≤${icon.small.maxSize}](${svgPath(icon.slug, 'color', true)})`)
      : '—'
    return `| ![](${pngPath(icon.slug, 'color', 24)}) | ${icon.name} · ${icon.names['zh-CN']} | [` + '`' + `${icon.slug}` + '`' + `](${displayPath(icon, 'color')}) | ${dark} | ${smallCell} | ${quality} | [↗](${icon.source}) |`
  })
  return template
    .replace('<!-- stats -->', statsBlock)
    .replace('<!-- sizes -->', sizes.join(' · '))
    .replace('<!-- catalog-note -->', catalogNote)
    .replace('<!-- catalog -->', rows.join('\n'))
}
