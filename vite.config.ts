/// <reference types="vitest" />
import path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import inspect from 'vite-plugin-inspect'
import vconsole from './scripts/vite-plugins/vconsole'

const stringify = JSON.stringify

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __APP_BASE_URL__: stringify(env.APP_BASE_URL),
      __APP_API_URL__: stringify(env.APP_API_URL),
      __APP_FETCH_TIMEOUT__: stringify(env.APP_FETCH_TIMEOUT),
      __IS_DEVELOPMENT__: mode === 'development',
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    server: {
      // 接口代理
      proxy: {
        '^/api': {
          target: '',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      vue({
        include: [/\.vue$/],
        reactivityTransform: true,
      }),
      vueJsx(),

      // /scripts/vite-plugin/vconsole.ts
      vconsole(),

      // https://github.com/intlify/bundle-tools/blob/main/packages/vite-plugin-vue-i18n/README.md
      vueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [path.resolve(__dirname, 'locales/**')],
      }),

      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue/macros',
          '@vueuse/core',
          'vue-i18n',
        ],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/composables', 'src/store'],
        vueTemplate: true,
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        extensions: ['vue'],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/vite-plugin-inspect
      // Visit http://localhost:8080/__inspect/ to see the inspector
      inspect(),

      // 添加 legacy 兼容，如果你的项目只运行于新版本的现代浏览器，则可以删除此插件
      legacy(),
    ],
    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts'],
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse'],
      },
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 生产环境时移除console
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
