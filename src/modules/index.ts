import type { App } from 'vue'
import { installI18n, setupI18n } from './i18n'

export function setupModules(app: App) {
  installI18n(app)
}

export { setupI18n }
