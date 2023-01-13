# Vulcan

<p align="center">🚀🚀The Project Template for Vite + Vue3， Mobile Web Application Starter。🚀🚀</p>
<br>
<p align="center">
  <a href="https://vulcan-vue.netlify.app/">Live Demo</a>
</p>
<br>
<p align="center">
  <span> English </span>
  <span> | </span>
  <a href="/README.zh-CN.md">中文</a>
</p>
<br>
<br>

## Feature

- ⚡️ [vue 3](https://github.com/vuejs/core), [vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - fast! fast! fast!
- 🦾 Typescript
- 📦 Component Auto Import
- 🍍 [pinia](https://pinia.vuejs.org/) - State Management
- 🔥 `<script setup>` syntax
- 🌍 [i18n](https://github.com/intlify/vue-i18n-next) Support Internationalization
- 📥 APIS Auto Import - composition API and other directory
- ⚙️ Unit test with [Vitest](https://github.com/vitest-dev/vitest) , E2E test with[Cypress](https://cypress.io/)
- 🎨 postcss / sass
- 📒 [axios](https://axios-http.com) encapsulation - Better to API management, APIs code is docs
- 📬 API Mock Data - Mock-Dev-Server
- ⚖️ px to viewport
- 📐 eslint / prettier
- ⏳ git hooks - format git commit

## Pre-packed

### Plugin

- [Vue-Router](https://github.com/vuejs/router) - Router system
- [Pinia](https://pinia.vuejs.org) - State management
- [Vue-i18n](https://github.com/intlify/vue-i18n-next) - Internationalization
  - [@intlify/unplugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - Vite plugin for `vue-i18n`
- [VueUse](https://github.com/antfu/vueuse) - Composition APIs
- [axios](https://axios-http.com) - http
- [js-cookie](https://github.com/js-cookie/js-cookie) - Cookie Management
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - Component Auto Import
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - APIs and other directory without Import
- [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect) - Module Deps Inspect
- [vite-plugin-vconsole](/scripts//vite-plugins/vconsole.ts) - Import [vconsole]()
- [vite-plugin-mock-dev-server](https://github.com/pengzhanbo/vite-plugin-mock-dev-server) - Http request mock dev server

### Coding Style

- [prettier](https://prettier.io)
- [eslint](https://eslint.org) - use [@pengzhanbo/eslint-config]() config， single quotes, no semi
- `<script setup>` SFC syntax

### Dev Tools

- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Unit testing powered by vite
- [Cypress](https://cypress.io/) - E2E testing
- [pnpm](https://pnpm.js.org/) - package manager, fast and disk space efficient
- [husky](https://typicode.github.io/husky), [lint-staged](https://github.com/okonet/lint-staged), [commitizen](https://github.com/commitizen/cz-cli) - git hooks，format commit
- [postcss](https://postcss.org/), [sass](https://github.com/sass/dart-sass) CSS
  - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [postcss-px-to-viewport-8-plugin](https://github.com/lkxian888/postcss-px-to-viewport-8-plugin) - px to viewport

## Try It Now！

> vulcan need node version >= 14.18

### Clone To Local

```sh
npx degit pengzhanbo/vulcan my-vulcan-app
cd my-vulcan-app
pnpm i
```

## Checklist

When you use this template, try follow the checklist to update your info property

- [ ] Change the author name in `LICENSE`
- [ ] Change the `name` in `package.json`
- [ ] Delete the uncalled for DEMO files
- [ ] Delete the uncalled for Router
- [ ] clear up the `README`

## Usage

### development

run and visit [localhost:8080/](http://localhost:8080/)

```sh
pnpm dev
```

### Build

To build App, run

```sh
pnpm build
```

The built files will be generated in `dist` directory.

## Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                             not support                                                                                              |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## Archives

[awesome-vite](https://github.com/vitejs/awesome-vite#vue-3)

## LICENSE

[MIT](/LICENSE)
