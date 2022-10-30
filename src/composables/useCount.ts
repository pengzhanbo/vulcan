import { getCounter } from '~/apis'

export const useCount = (initial = 0) => {
  const count = ref(initial)

  const updateCount = async () => {
    const res = await getCounter({ current: count.value })
    count.value = res.count
  }

  return {
    count,
    updateCount,
  }
}
