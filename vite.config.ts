/// <reference types="vitest" />
import path from 'node:path'
import process from 'node:process'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig, loadEnv } from 'vite'
import Inspect from 'vite-plugin-inspect'
import MockDevServer from 'vite-plugin-mock-dev-server'
import TsconfigPath from 'vite-tsconfig-paths'

// import Devtools from 'vite-plugin-vue-devtools'
import Eruda from './scripts/vite-plugins/eruda'

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.VITE_APP_BASE_URL || '/',
    server: {
      // 接口代理
      proxy: {
        '^/api': {
          target: '',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      // https://github.com/aleclarson/vite-tsconfig-paths
      TsconfigPath(),

      Vue(),

      VueJsx(),

      // /scripts/vite-plugin/eruda.ts
      // https://github.com/liriliri/eruda
      Eruda(),

      // https://github.com/pengzhanbo/vite-plugin-mock-dev-server
      MockDevServer(),

      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
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
          'pinia',
        ],
        dts: 'src/auto-imports.d.ts',
        vueTemplate: true,
      }),

      // https://github.com/antfu/vite-plugin-inspect
      // Visit http://localhost:8080/__inspect/ to see the inspector
      command === 'build' && Inspect(),

      // https://github.com/webfansplz/vite-plugin-vue-devtools
      // Devtools(),
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
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  }
})
