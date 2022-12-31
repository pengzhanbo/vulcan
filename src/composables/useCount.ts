import { useRequest } from './useRequest'
import { getCounter } from '~/apis'

export const useCount = (initial = 0) => {
  const { isLoading, data, request } = useRequest(
    getCounter,
    { current: initial },
    { count: initial }
  )

  const count = computed(() => data.value?.count || initial)

  const updateCount = () => {
    if (!isLoading.value) {
      request({ current: count.value })
    }
  }

  return {
    count,
    updateCount,
  }
}
