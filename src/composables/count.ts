import { getCount } from '~/services/count'

export function useCount(initial = 0) {
  const isLoading = ref(false)
  const count = ref(initial)

  const updateCount = async () => {
    if (isLoading.value)
      return
    isLoading.value = true
    const [data] = await getCount(count.value)
    isLoading.value = false
    if (data)
      count.value = data.count
  }

  return {
    count,
    updateCount,
  }
}
