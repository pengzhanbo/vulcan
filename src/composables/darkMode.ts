import type { InjectionKey, WritableComputedRef } from 'vue'

export type DarkModeRef = WritableComputedRef<boolean>

export const darkModeSymbol: InjectionKey<DarkModeRef> = Symbol(
  import.meta.env.DEV ? 'darkMode' : '',
)

export function updateHtmlDarkClass(isDarkMode: DarkModeRef): void {
  const update = (value = isDarkMode.value): void => {
    // set `class="dark"` on `<html>` element
    const htmlEl = window?.document.querySelector('html')
    htmlEl?.classList.toggle('dark', value)
  }

  onMounted(() => {
    watch(isDarkMode, update, { immediate: true })
  })

  onUnmounted(() => update())
}

/**
 * Inject dark mode global computed
 */
export function useDarkMode(): DarkModeRef {
  const isDarkMode = inject(darkModeSymbol)
  if (!isDarkMode)
    throw new Error('useDarkMode() is called without provider.')

  return isDarkMode
}

/**
 * Create dark mode ref and provide as global computed in setup
 */
export function setupDarkMode(): void {
  const isDarkPreferred = usePreferredDark()
  const darkStorage = useStorage('vulcan-color-scheme', 'auto')

  const isDarkMode = computed<boolean>({
    get() {
      // auto detected from prefers-color-scheme
      if (darkStorage.value === 'auto')
        return isDarkPreferred.value

      // storage value
      return darkStorage.value === 'dark'
    },
    set(val) {
      if (val === isDarkPreferred.value)
        darkStorage.value = 'auto'
      else
        darkStorage.value = val ? 'dark' : 'light'
    },
  })
  provide(darkModeSymbol, isDarkMode)

  updateHtmlDarkClass(isDarkMode)
}
