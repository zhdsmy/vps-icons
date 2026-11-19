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
write('index.json', JSON.stringify(index, null, 2) + '\n')
write('preview.html', preview(index))
write('README.md', readme(index, read('src/readme.md')))
console.log(`Built ${index.icons.length} icons and ${generated.size} files.`)
