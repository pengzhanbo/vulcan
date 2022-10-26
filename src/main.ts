import 'virtual:vconsole'

import App from './App.vue'
import { setupModules } from './modules'
import { router, setupRouter } from './router'
import { setupStore } from './store'

import 'normalize.css'
import './styles/index.scss'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)
  setupModules(app)

  await router.isReady()
  app.mount('#app')
}

bootstrap()
