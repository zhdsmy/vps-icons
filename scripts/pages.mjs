import { displayPath, pngPath, read } from './catalog.mjs'

const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

export function preview({ icons, sizes }) {
  const samples = sizes.filter(n => [16, 32, 64].includes(n))
  function panel(theme) {
    const heading = theme === 'light' ? 'Light' : 'Dark'
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
    return `<section class="panel ${theme}" aria-label="${heading} background"><h2>${heading}</h2>
<table><thead><tr><th scope="col">Icon</th>${samples.map(n => `<th scope="col">${n} px</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></section>`
  }
  return read('src/preview.html').replace('<!-- panels -->', panel('light') + '\n' + panel('dark'))
}

export function readme({ icons, sizes }, template) {
  const rows = icons.map(icon => {
    const missingSvg = !icon.variants.svg.length
    const wanted = missingSvg || ['upscaled', 'placeholder'].includes(icon.quality)
    const label = missingSvg ? ' · PNG only' : ''
    const quality = icon.quality + label + (wanted ? ' · 欢迎贡献 / better source wanted' : '')
    const dark = icon.variants.png.includes('color-dark') ? `[✓](${displayPath(icon, 'color-dark')})` : '—'
    return `| ![](${pngPath(icon.slug, 'color', 24)}) | ${icon.name} · ${icon.names['zh-CN']} | [\`${icon.slug}\`](${displayPath(icon, 'color')}) | ${dark} | ${quality} | [↗](${icon.source}) |`
  })
  return template.replace('<!-- sizes -->', sizes.join(' · ')).replace('<!-- catalog -->', rows.join('\n'))
}
