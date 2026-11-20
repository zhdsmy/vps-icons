import { mkdirSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import pica from 'pica'
import { PNG } from 'pngjs'
import { initWasm, Resvg } from '@resvg/resvg-wasm'
import { artPath, index, pngPath, read, sizes, svgPath } from './catalog.mjs'
import { preview, readme } from './pages.mjs'

await initWasm(readFileSync(new URL(import.meta.resolve('@resvg/resvg-wasm/index_bg.wasm'))))
const scaler = pica({ features: ['js'] })
const generated = new Set()
function write(path, data) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, data)
  generated.add(path)
}

function render(source, size) {
  const renderer = new Resvg(source, { fitTo: { mode: 'width', value: size } })
  const image = renderer.render()
  try { return image.asPng() } finally { image.free(); renderer.free() }
}

for (const { slug, small, variants } of index.icons) {
  for (const compact of small.maxSize ? [false, true] : [false]) {
    for (const variant of variants.svg) {
      write(svgPath(slug, variant, compact), read(artPath(slug, variant, 'svg', compact)))
    }
    for (const variant of variants.png) {
      const selected = sizes.filter(size => Boolean(small.maxSize && size <= small.maxSize) === compact)
      if (variants.svg.length) {
        const monochrome = variant.startsWith('mono-')
        let svg = read(artPath(slug, monochrome ? 'mono' : variant, 'svg', compact))
        if (monochrome) svg = svg.replaceAll('currentColor', variant === 'mono-white' ? '#ffffff' : '#000000')
        for (const size of selected) write(pngPath(slug, variant, size), render(svg, size))
      } else {
        const source = readFileSync(artPath(slug, variant, 'png', compact))
        const { data: src, width, height } = PNG.sync.read(source)
        for (const size of selected) {
          if (size === width) write(pngPath(slug, variant, size), source)
          else {
            const data = await scaler.resizeBuffer({ src, width, height, toWidth: size, toHeight: size, filter: 'lanczos3' })
            // Keep the requested ink exact after the resampler rounds premultiplied channels.
            if (variant.startsWith('mono-')) {
              const ink = variant === 'mono-white' ? 255 : 0
              for (let i = 0; i < data.length; i += 4) data.fill(ink, i, i + 3)
            }
            write(pngPath(slug, variant, size), PNG.sync.write({ width: size, height: size, data }))
          }
        }
      }
    }
  }
}

for (const dir of ['svg', 'png']) {
  for (const file of readdirSync(dir, { recursive: true, withFileTypes: true })) {
    const path = join(file.parentPath, file.name)
    if (file.isFile() && file.name.endsWith('.' + dir) && !generated.has(path)) unlinkSync(path)
  }
}
// README overview: every icon at 32 px, light panel over dark panel.
const cols = 24, cell = 40, pad = 16
const panelWidth = cols * cell + pad * 2, panelHeight = Math.ceil(index.icons.length / cols) * cell + pad * 2
const panel = (variant, background, top) => `<rect y="${top}" width="${panelWidth}" height="${panelHeight}" fill="${background}"/>` +
  index.icons.map(({ slug, variants }, n) => {
    const v = variants.png.includes(variant) ? variant : 'color'
    const href = variants.svg.length
      ? 'data:image/svg+xml;base64,' + Buffer.from(read(svgPath(slug, v))).toString('base64')
      : 'data:image/png;base64,' + readFileSync(pngPath(slug, v, 32)).toString('base64')
    const x = pad + (n % cols) * cell + 4, y = top + pad + Math.floor(n / cols) * cell + 4
    return `<image x="${x}" y="${y}" width="32" height="32" href="${href}"/>`
  }).join('')
write('preview.png', render(`<svg xmlns="http://www.w3.org/2000/svg" width="${panelWidth}" height="${panelHeight * 2}">` +
  panel('color', '#ffffff', 0) + panel('color-dark', '#111827', panelHeight) + '</svg>', panelWidth))
write('index.json', JSON.stringify(index, null, 2) + '\n')
write('preview.html', preview(index))
write('README.md', readme(index, read('src/readme.md')))
console.log(`Built ${index.icons.length} icons and ${generated.size} files.`)
