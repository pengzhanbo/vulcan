# Vulcan

<p align="center">ððä¸ä¸ªåºäº vite + vue3 çé¡¹ç®æ¨¡æ¿ï¼å¸®å©å¿«éåå»º Mobile Web åºç¨ãðð</p>
<br>
<p align="center">
  <a href="https://vulcan-vue.netlify.app/">å¨çº¿æ¡ä¾</a>
</p>
<br>
<p align="center">
  <a href="/README.md"> English </a>
  <span> | </span>
  <span> ä¸­æ </span>
</p>
<br>
<br>

## ç¹æ§

- â¡ï¸ [vue 3](https://github.com/vuejs/core), [vite 4](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - éå¸¸å¿«ï¼
- ð¦¾ ä½¿ç¨ Typescript
- ð¦ ç»ä»¶èªå¨å è½½
- ð ä½¿ç¨ [pinia](https://pinia.vuejs.org/) ç¶æç®¡ç
- ð¥ ä½¿ç¨ `<script setup>` è¯­æ³
- ð [i18n](https://github.com/intlify/vue-i18n-next) éæ å½éåæ¹æ¡
- ð¥ èªå¨å è½½ APIï¼ Composition API èªå¨å¼å¥
- âï¸ ä½¿ç¨ [Vitest](https://github.com/vitest-dev/vitest) è¿è¡ååæµè¯, [Cypress](https://cypress.io/) è¿è¡ E2E æµè¯
- ð¨ ä½¿ç¨ postcss / sass ç¼å CSS
- ð å°è£ [axios](https://axios-http.com) - æ´å¥½çç®¡ç APIï¼ä»£ç å³ API ææ¡£
- ð¬ API Mock Data - éè¿ mock-dev-server å¨é¡¹ç®å¼åç¯å¢ä¸­å¯¹ æ¥å£è¿è¡ mock
- âï¸ px to viewport
- ð eslint / prettier
- â³ git hooks - è§è git commit åå®¹æ ¼å¼

## é¢éç½®

### æä»¶

- [Vue-Router](https://github.com/vuejs/router) - è·¯ç±ç³»ç»
- [Pinia](https://pinia.vuejs.org) - ç¶æç®¡ç
- [Vue-i18n](https://github.com/intlify/vue-i18n-next) - å½éå
  - [@intlify/unplugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - `vue-i18n` æä»¶
- [VueUse](https://github.com/antfu/vueuse) - composition API å®ç¨å·¥å·åº
- [axios](https://axios-http.com) - http è¯·æ±åº
- [js-cookie](https://github.com/js-cookie/js-cookie) - cookie ç®¡ç
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - èªå¨å è½½ç»ä»¶
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - èªå¨å è½½ composition-api, æ éå¼å¥
- [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect) - æ¨¡åä¾èµåæå·¥å·
- [vite-plugin-vconsole](/scripts//vite-plugins/vconsole.ts) - èªå¨å¯¼å¥ [vconsole]()
- [vite-plugin-mock-dev-server](https://github.com/pengzhanbo/vite-plugin-mock-dev-server) - å¨é¡¹ç®å¼åæå¡ä¸­æ·»å  mock-dev-serverï¼èªå¨å è½½ mock æä»¶

### ç¼ç é£æ ¼

- [prettier](https://prettier.io)
- [eslint](https://eslint.org) - ä½¿ç¨ [@pengzhanbo/eslint-config]() éç½®ï¼ åå¼å·ï¼æ åå·
- ä½¿ç¨ `<script setup>` SFC è¯­æ³

### å·¥å·

- [Typescript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - åºäº vite çååæµè¯æ¡æ¶
- [Cypress](https://cypress.io/) - e2e æµè¯æ¡æ¶
- [pnpm](https://pnpm.js.org/) - åç®¡çå·¥å·ï¼å¿«éï¼èçç£ç
- [husky](https://typicode.github.io/husky), [lint-staged](https://github.com/okonet/lint-staged), [commitizen](https://github.com/commitizen/cz-cli) - ç®¡ç git hooksï¼æäº¤åä»£ç æ£æ¥ãæäº¤åå®¹æ ¼å¼
- [postcss](https://postcss.org/), [sass](https://github.com/sass/dart-sass) å¤ç CSS
  - [autoprefixer](https://github.com/postcss/autoprefixer)
  - [postcss-px-to-viewport-8-plugin](https://github.com/lkxian888/postcss-px-to-viewport-8-plugin) - px to viewport

## è¯è¯ï¼

> vulcan éè¦ node çæ¬ >= 14.18

### åéå°æ¬å°

```sh
npx degit pengzhanbo/vulcan my-vulcan-app
cd my-vulcan-app
pnpm i # å¦æä½ æ²¡è£è¿ pnpm, å¯ä»¥åè¿è¡: npm install -g pnpm
```

## æ¸å

å¨ä½¿ç¨æ¬æ¨¡æ¿æ¶ï¼è¯·å°è¯æç§æ¸åæ´æ°æ¨çä¿¡æ¯ï¼

- [ ] å¨ `LICENSE` ä¸­æ´æ°ä½èä¿¡æ¯
- [ ] å¨ `package.json` ä¸­æ´æ° `name` å­æ®µ
- [ ] å é¤ä¸å¿è¦ç DEMO æä»¶
- [ ] å é¤ä¸å¿è¦çè·¯ç±
- [ ] éæ°æ´ç `README`

## ä½¿ç¨

### å¼å

æ§è¡ä»¥ä¸å½ä»¤å³å¯å¨ [localhost:8080/](http://localhost:8080/) è®¿é®

```sh
pnpm dev
```

### æå»º

æ§è¡ä»¥ä¸å½ä»¤å³å¯è¿è¡é¡¹ç®æå»º

```sh
pnpm build
```

æå»ºåçä»£ç å°ä¼å¨ `dist` ä¸­çæ

## æµè§å¨æ¯æ

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                             not support                                                                                              |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## LICENSE

[MIT](/LICENSE)
