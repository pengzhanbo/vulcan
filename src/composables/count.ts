import { useRequest } from './request'
import { getCounter } from '~/apis'

export const useCount = (initial = 0) => {
  const { isLoading, data, request } = useRequest(
    getCounter,
    { current: initial },
    { result: { count: initial }, code: 200, message: '' },
  )

  const count = computed(() => data.value?.result.count || initial)

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
