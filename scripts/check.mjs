import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { DOMParser } from '@xmldom/xmldom'
import { PNG } from 'pngjs'
import { artPath, index, qualities, pngPath, read, sizes, svgPath } from './catalog.mjs'
import { preview, readme } from './pages.mjs'

assert.deepEqual(JSON.parse(read('index.json')), index)
assert.equal(read('README.md'), readme(index, read('src/readme.md')))
assert.equal(read('preview.html'), preview(index))
const tags = new Set('svg g defs path ellipse rect polygon linearGradient radialGradient stop'.split(' '))
const attributes = new Set(('xmlns viewBox d points id transform fill stroke fill-rule clip-rule opacity fill-opacity ' +
  'stroke-width stroke-miterlimit stroke-linejoin width height offset stop-color stop-opacity gradientTransform gradientUnits x y x1 y1 x2 y2 cx cy rx ry r').split(' '))
const expected = new Set()
const art = new Set()

function checkSvg(path, mono) {
  const source = read(path)
  assert(!/<[!?]/.test(source), path + ' contains an XML directive')
  const doc = new DOMParser({ onError: (level, message) => { throw new Error(path + ': ' + message) } })
    .parseFromString(source, 'image/svg+xml')
  const root = doc.documentElement
  assert.equal(root.tagName, 'svg', path)
  assert.equal(root.getAttribute('viewBox'), '0 0 64 64', path)
  if (mono) assert.equal(root.getAttribute('fill'), 'currentColor', path)
  const ids = new Set()
  const references = []
  for (const el of doc.getElementsByTagName('*')) {
    assert.equal(el.namespaceURI, 'http://www.w3.org/2000/svg', path)
    assert(tags.has(el.tagName), path + ': ' + el.tagName)
    for (const attr of el.attributes) {
      const { name, value } = attr
      assert(attributes.has(name), path + ': ' + name)
      if (name === 'xmlns') {
        assert.equal(value, 'http://www.w3.org/2000/svg')
        continue
      }
      if (name === 'id') {
        assert(!ids.has(value), path + ': duplicate ID')
        ids.add(value)
      }
      if (['fill', 'stroke', 'stop-color'].includes(name)) {
        if (mono) assert.equal(value, 'currentColor', path)
        else {
          const local = /^url\(#([\w.-]+)\)$/.exec(value)
          if (local) references.push(local[1])
          else assert(/^(none|#[a-f\d]{3}|#[a-f\d]{6})$/i.test(value), path + ': ' + value)
        }
      } else assert(!/url\s*\(|(?:https?|data|file):/i.test(value), path + ': ' + name)
    }
  }
  assert(references.every(id => ids.has(id)), path + ': missing gradient')
}

function checkPng(path, size, variant) {
  const image = PNG.sync.read(readFileSync(path))
  assert.equal(image.width, size, path)
  assert.equal(image.height, size, path)
  let solid = 0
  const ink = variant === 'mono-white' ? 255 : variant === 'mono-black' ? 0 : null
  for (let i = 0; i < image.data.length; i += 4) {
    if (image.data[i + 3] < 64) continue
    if (ink !== null) {
      for (let c = 0; c < 3; c++) assert.equal(image.data[i + c], ink, path)
    }
    solid++
  }
  assert(solid > size * size * .035 && solid < size * size * .9, path + ': empty or excessive ink')
}

function files(dir) {
  return new Set(readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter(file => file.isFile()).map(file => join(file.parentPath, file.name)))
}

const counts = Object.fromEntries(qualities.map(q => [q, 0]))
let missingSvg = 0
for (const { slug, small, variants, quality } of index.icons) {
  counts[quality]++
  if (!variants.svg.length) missingSvg++
  for (const compact of small.maxSize ? [false, true] : [false]) {
    for (const variant of variants.svg) {
      const source = artPath(slug, variant, 'svg', compact)
      const path = svgPath(slug, variant, compact)
      art.add(source)
      expected.add(path)
      assert.equal(read(path), read(source), path)
      checkSvg(path, variant === 'mono')
    }
    if (!variants.svg.length) for (const variant of variants.png) {
      const source = artPath(slug, variant, 'png', compact)
      art.add(source)
      checkPng(source, 512, variant)
    }
  }
  for (const variant of variants.png) for (const size of sizes) {
    const path = pngPath(slug, variant, size)
    expected.add(path)
    checkPng(path, size, variant)
  }
}
console.log(qualities.map(q => q + '=' + counts[q]).join(' ') + ' | missing SVG=' + missingSvg)
assert.deepEqual(files('src/art'), art, 'Unexpected or missing source art')
assert.deepEqual(new Set([...files('svg'), ...files('png')]), expected, 'Unexpected or missing assets')
console.log(`Checked ${index.icons.length} catalog entries and ${expected.size} assets.`)
