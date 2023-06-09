import {
  defineConfig,
  presetUno,
  presetWind,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetUnitToVw from './scripts/unocss/preset-unit-to-vw'

const remRE = /(-?[\.\d]+)rem/g

export default defineConfig({
  shortcuts: {
    'bb-b': 'b-b b-b-solid b-b-$c-border',
    'bb-t': 'b-t b-t-solid b-t-$c-border',
  },
  presets: [
    presetUno(),
    presetWind(),
    presetUnitToVw({ fontSize: 32, viewportWidth: 750, precision: 5 }),
  ],
  transformers: [
    transformerCompileClass(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
