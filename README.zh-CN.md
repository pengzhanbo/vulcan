# Vulcan

<p align="center">🚀🚀一个基于 vite + vue3 的项目模板，帮助快速创建 Mobile Web 应用。🚀🚀</p>
<br>
<p align="center">
  <a href="https://vulcan-vue.netlify.app/">在线案例</a>
</p>
<br>
<p align="center">
  <a href="/README.md"> English </a>
  <span> | </span>
  <span> 中文 </span>
</p>
<br>
<br>

## 特性

- ⚡️ [vue 3](https://github.com/vuejs/core), [vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 非常快！
- 🦾 使用 Typescript
- 📦 组件自动加载
- 🍍 使用 [pinia](https://pinia.vuejs.org/) 状态管理
- 🔥 使用 `<script setup>` 语法
- 🌍 [i18n](https://github.com/intlify/vue-i18n-next) 集成 国际化方案
- 📥 自动加载 API， Composition API 自动引入
- ⚙️ 使用 [Vitest](https://github.com/vitest-dev/vitest) 进行单元测试, [Cypress](https://cypress.io/) 进行 E2E 测试
- 🎨 使用 postcss / sass 编写 CSS
- 📒 封装 [axios](https://axios-http.com) - 更好的管理 API，代码即 API 文档
- 📬 API Mock Data - 通过 mock-dev-server 在项目开发环境中对 接口进行 mock
- ⚖️ px to viewport
- 📐 eslint / prettier
- ⏳ git hooks - 规范 git commit 内容格式

## 预配置

### 插件

- [Vue-Router](https://github.com/vuejs/router) - 路由系统
- [Pinia](https://pinia.vuejs.org) - 状态管理
- [Vue-i18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [@intlify/unplugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - `vue-i18n` 插件
- [VueUse](https://github.com/antfu/vueuse) - composition API 实用工具库
- [axios](https://axios-http.com) - http 请求库
- [js-cookie](https://github.com/js-cookie/js-cookie) - cookie 管理
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动加载 composition-api, 无需引入
- [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect) - 模块依赖分析工具
- [vite-plugin-vconsole](/scripts//vite-plugins/vconsole.ts) - 自动导入 [vconsole]()
- [vite-plugin-mock-dev-server](https://github.com/pengzhanbo/vite-plugin-mock-dev-server) - 在项目开发服务中添加 mock-dev-server，自动加载 mock 文件

### 编码风格

- [prettier](https://prettier.io)
- [eslint](https://eslint.org) - 使用 [@pengzhanbo/eslint-config]() 配置， 单引号，无分号
- 使用 `<script setup>` SFC 语法

### 工具

- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - 基于 vite 的单元测试框架
- [Cypress](https://cypress.io/) - e2e 测试框架
- [pnpm](https://pnpm.js.org/) - 包管理工具，快速，节省磁盘
- [husky](https://typicode.github.io/husky), [lint-staged](https://github.com/okonet/lint-staged), [commitizen](https://github.com/commitizen/cz-cli) - 管理 git hooks，提交前代码检查、提交内容格式
- [postcss](https://postcss.org/), [sass](https://github.com/sass/dart-sass) 处理 CSS
  - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [postcss-px-to-viewport-8-plugin](https://github.com/lkxian888/postcss-px-to-viewport-8-plugin) - px to viewport

## 试试！

> vulcan 需要 node 版本 >= 14.18

### 克隆到本地

```sh
npx degit pengzhanbo/vulcan my-vulcan-app
cd my-vulcan-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

## 清单

在使用本模板时，请尝试按照清单更新您的信息：

- [ ] 在 `LICENSE` 中更新作者信息
- [ ] 在 `package.json` 中更新 `name` 字段
- [ ] 删除不必要的 DEMO 文件
- [ ] 删除不必要的路由
- [ ] 重新整理 `README`

## 使用

### 开发

执行以下命令即可在 [localhost:8080/](http://localhost:8080/) 访问

```sh
pnpm dev
```

### 构建

执行以下命令即可进行项目构建

```sh
pnpm build
```

构建后的代码将会在 `dist` 中生成

## 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                             not support                                                                                              |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## LICENSE

[MIT](/LICENSE)
