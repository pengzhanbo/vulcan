/// <reference types="vitest" />
import path from 'node:path'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import Inspect from 'vite-plugin-inspect'
import MockDevServer from 'vite-plugin-mock-dev-server'
import TsconfigPath from 'vite-tsconfig-paths'
import Eruda from './scripts/vite-plugins/eruda'

const stringify = JSON.stringify

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    define: {
      __APP_BASE_URL__: stringify(env.APP_BASE_URL),
      __APP_API_URL__: stringify(env.APP_API_URL),
      __APP_FETCH_TIMEOUT__: stringify(env.APP_FETCH_TIMEOUT),
      __IS_DEVELOPMENT__: mode === 'development',
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
      // https://github.com/aleclarson/vite-tsconfig-paths
      TsconfigPath(),

      Vue({
        include: [/\.vue$/],
        reactivityTransform: true,
      }),

      VueJsx(),

      // /scripts/vite-plugin/eruda.ts
      // https://github.com/liriliri/eruda
      Eruda(),

      // https://github.com/pengzhanbo/vite-plugin-mock-dev-server
      MockDevServer(),

      // https://github.com/intlify/bundle-tools/blob/main/packages/vite-plugin-vue-i18n/README.md
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
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

      UnoCSS(),

      // https://github.com/antfu/vite-plugin-inspect
      // Visit http://localhost:8080/__inspect/ to see the inspector
      command === 'build' && Inspect(),
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
