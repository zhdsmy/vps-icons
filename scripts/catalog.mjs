import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

export const sizes = [16, 24, 32, 48, 64, 128, 256, 512]
export const qualities = ['vector', 'redrawn', 'raster', 'upscaled', 'placeholder']
const variants = [
  { svg: 'color', png: ['color'] },
  { svg: 'color-dark', png: ['color-dark'] },
  { svg: 'mono', png: ['mono-black', 'mono-white'] },
]
export const read = path => readFileSync(path, 'utf8')
const catalog = JSON.parse(read('src/catalog.json'))
const slugs = new Set()
const listOfText = list => Array.isArray(list) && list.length && list.every(t => typeof t === 'string' && t.trim())
const icons = catalog.map(({ format, hasDark, smallMax, ...data }) => {
  const { slug, quality } = data
  assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  assert(!slugs.has(slug), 'Duplicate slug: ' + slug)
  slugs.add(slug)
  assert(qualities.includes(quality) && ['svg', 'png'].includes(format), slug)
  assert.match(data.brandColor, /^#[a-f\d]{6}$/i)
  assert(listOfText([data.name, data.names?.['zh-CN'], data.source, data.license, data.website, data.small?.source, data.small?.artwork]), slug)
  assert(listOfText(data.aliases) && listOfText(data.processing), slug)
  if (data.source !== `src/art/${slug}/mono.svg`) {
    for (const url of [data.source, data.website, data.small.source, data.monoSource].filter(Boolean)) {
      assert.equal(new URL(url).protocol, 'https:', slug)
    }
  }
  if (smallMax) assert(sizes.includes(smallMax), slug)
  if (quality === 'upscaled') assert(data.nativeSize?.length === 2 && Math.max(...data.nativeSize) <= 64, slug)
  if (quality === 'raster') assert(data.nativeSize?.length === 2 && Math.max(...data.nativeSize) >= 256, slug)
  const available = variants.filter(v => v.svg !== 'color-dark' || hasDark)
  return { ...data, small: { ...data.small, ...(smallMax && { maxSize: smallMax }) },
    variants: { svg: format === 'svg' ? available.map(v => v.svg) : [], png: available.flatMap(v => v.png) } }
})
export const index = { sizes, icons }
export const artPath = (slug, variant, ext, small = false) =>
  `src/art/${slug}/${small ? 'small/' : ''}${variant}.${ext}`
export const svgPath = (slug, variant, small = false) =>
  `svg/${small ? 'small/' : ''}${variant}/${slug}.svg`
export const pngPath = (slug, variant, size) => `png/${variant}/${size}/${slug}.png`
export const displayPath = (icon, variant) => icon.variants.svg.length
  ? svgPath(icon.slug, variant) : pngPath(icon.slug, variant, 128)
