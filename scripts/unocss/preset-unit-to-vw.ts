import type { Preset } from 'unocss'

const remRE = /(-?[\.\d]+)rem/g
const pxRE = /(-?[\.\d]+)px/g

export interface Options {
  fontSize?: number
  viewportWidth?: number
  precision?: number
}
// 适配移动端开发场景下， rem 转换为 vw , px 转换为 vw
// 一般场景下， 750 的设计稿，字体大小为 double, 即 32px，而 unocss 默认为 16px
// 如果 px 小于等于 1， 则不进行处理
export default function presetRemToVw(options: Options = {}): Preset {
  const { fontSize = 16, viewportWidth = 750, precision = 5 } = options

  return {
    name: '@unocss/preset-rem-to-vw',
    postprocess: (util) => {
      util.entries.forEach((rule) => {
        const value = rule[1]
        if (typeof value === 'string' && remRE.test(value)) {
          rule[1] = value.replace(
            remRE,
            (_, match) =>
              `${precisionNumber(
                ((parseFloat(match) * fontSize) / viewportWidth) * 100,
                precision,
              )}vw`,
          )
        }
        if (typeof value === 'string' && pxRE.test(value)) {
          rule[1] = value.replace(pxRE, (_, match) =>
            Math.abs(match) <= 1
              ? _
              : `${precisionNumber(
                  (parseFloat(match) / viewportWidth) * 100,
                  precision,
                )}vw`,
          )
        }
      })
    },
  }
}

function precisionNumber(num: number, precision = 4) {
  return parseFloat(num.toFixed(precision))
}
