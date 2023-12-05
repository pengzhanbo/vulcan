import type { MaybeRefOrGetter } from 'vue'

const titleRef = ref('')

export function setupNavbar(defaultTitle?: string) {
  const _title = defaultTitle ?? document.title
  titleRef.value = _title ?? ''

  return { title: titleRef }
}

export interface NavbarOptions {
  title?: MaybeRefOrGetter<string>
}

export function useNavbar(options: NavbarOptions = {}) {
  const { title } = options

  const { locale } = useI18n()

  if (title) {
    if (typeof title === 'string') {
      titleRef.value = title
    }
    else {
      const unwatch = watch(
        locale,
        () => (titleRef.value = toValue(title)),
        { immediate: true },
      )

      tryOnScopeDispose(unwatch)
    }
  }

  return {
    title: titleRef,
  }
}
