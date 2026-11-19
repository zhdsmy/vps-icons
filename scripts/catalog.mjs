import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

export const sizes = [16, 24, 32, 48, 64, 128, 256, 512]
export const qualities = ['vector', 'redrawn', 'raster', 'upscaled', 'placeholder']
const proprietary = 'Proprietary brand artwork; no open license identified'
export const licenses = new Set([
  proprietary,
  proprietary + '; CC0-1.0 Simple Icons monochrome balloon, brand rights reserved',
  proprietary + '; CC0-1.0 Simple Icons monochrome mark, brand rights reserved',
  proprietary + '; Source Sans Pro outlines under SIL OFL-1.1',
  proprietary + '; Lexend glyph outlines under SIL OFL-1.1',
  'MIT',
  'MIT (LobeHub artwork); brand rights reserved',
  'CC0-1.0 (Simple Icons collection); brand rights reserved',
  'CC0-1.0 (SVG Logos collection); brand rights reserved',
  'CC0-1.0 (SVG Logos collection); brand rights reserved; CC0-1.0 Simple Icons monochrome mark, brand rights reserved',
  'CC0-1.0 (TheSVG collection); brand rights reserved',
  'CC0-1.0 (auth-badges artwork via theSVG); official mascot and trademarks belong to Time4VPS',
  'Apache-2.0 (Scaleway Ultraviolet); brand rights reserved',
  'Public domain (PD-textlogo, Wikimedia Commons); trademark rights reserved',
  'Public domain (Wikimedia Commons, PD-textlogo); trademark rights reserved by KT.',
])
const genericIcons = new Set(['home', 'nas', 'relay', 'other', 'unknown'])
const variants = [
  { svg: 'color', png: ['color'] },
  { svg: 'color-dark', png: ['color-dark'] },
  { svg: 'mono', png: ['mono-black', 'mono-white'] },
]
export const read = path => readFileSync(path, 'utf8')
const catalog = JSON.parse(read('src/catalog.json'))
const slugs = new Set()
const listOfText = list => Array.isArray(list) && list.length && list.every(t => typeof t === 'string' && t.trim())

function checkUrls(slug, fields, prefix = '') {
  for (const [key, value] of Object.entries(fields)) {
    const field = prefix + key
    if (/(?:website|source(?:page)?|url)$/i.test(key)) {
      if (genericIcons.has(slug)) {
        if (field === 'website' && value === `preview.html#light-${slug}`) continue
        if (['source', 'small.source'].includes(field) && value === `src/art/${slug}/mono.svg`) continue
      }
      assert(typeof value === 'string' && /^https:\/\/[^/\\?#\s][^\\\s]*$/iu.test(value) && URL.canParse(value),
        `${slug}: ${field} must be an absolute HTTPS URL`)
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      checkUrls(slug, value, field + '.')
    }
  }
}

const icons = catalog.map(({ format, hasDark, smallMax, ...data }) => {
  const { slug, quality } = data
  assert.match(slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  assert(!slugs.has(slug), 'Duplicate slug: ' + slug)
  slugs.add(slug)
  assert(qualities.includes(quality) && ['svg', 'png'].includes(format), slug)
  assert.match(data.brandColor, /^#[a-f\d]{6}$/i)
  assert(listOfText([data.name, data.names?.['zh-CN'], data.source, data.license, data.website, data.small?.source, data.small?.artwork]), slug)
  assert(listOfText(data.aliases) && listOfText(data.processing), slug)
  checkUrls(slug, data)
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
