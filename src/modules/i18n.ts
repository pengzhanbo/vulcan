import messages from '@intlify/vite-plugin-vue-i18n/messages'
import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { DEFAULT_LANGUAGE } from '~/common'

export const installI18n = (app: App) => {
  const i18n = createI18n({
    legacy: false,
    locale: DEFAULT_LANGUAGE,
    fallbackLocale: DEFAULT_LANGUAGE,
    messages,
  })

  app.use(i18n)
}

export const setupI18n = () => {
  const lang = useLocalStorage('vulcan-locale', DEFAULT_LANGUAGE)
  const { locale } = useI18n()

  onMounted(() => {
    if (locale.value !== lang.value) {
      locale.value = lang.value
    }

    watch(
      () => locale.value,
      (locale) => {
        lang.value = locale
      }
    )
  })
}
