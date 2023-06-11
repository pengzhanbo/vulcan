import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import presetUnitToVw from './scripts/unocss/preset-unit-to-vw'

export default defineConfig({
  shortcuts: {
    'border': 'b b-solid b-border',
    'border-t': 'b-t b-t-solid b-border',
    'border-r': 'b-r b-r-solid b-border',
    'border-b': 'b-b b-b-solid b-border',
    'border-l': 'b-l b-l-solid b-border',
    'flex-center': 'flex justify-center items-center',
    'fixed-0': 'fixed top-0 left-0',
    'icon': 'w-1em h-1em text-1em vertical-middle leading-1em m-auto',
    'btn':
      'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
  },
  theme: {
    colors: {
      border: 'var(--c-border)',
      brand: 'var(--c-brand)',
      background: 'var(--c-bg)',
      text: 'var(--c-text)',
    },
  } as Theme,
  presets: [
    // https://unocss.dev/presets/uno
    presetUno(),
    presetUnitToVw({ fontSize: 32, viewportWidth: 750, precision: 5 }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
