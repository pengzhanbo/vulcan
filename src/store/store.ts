import { createPinia } from 'pinia'
import type { App } from 'vue'

export const store = createPinia()

export const setupStore = (app: App) => {
  app.use(store)
}
