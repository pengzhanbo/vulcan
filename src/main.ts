import 'virtual:eruda'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './styles/index.scss'

import App from './App.vue'
import { setupModules } from './modules'
import { router, setupRouter } from './router'
import { setupStore } from './store'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)
  setupModules(app)

  await router.isReady()
  app.mount('#app')
}

bootstrap().catch((e) => {
  console.error(e)
})
