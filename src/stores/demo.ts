import { acceptHMRUpdate, defineStore } from 'pinia'

export const useDemoStore = defineStore('demo', () => {
  const count = ref<number>(1)

  const doubleCount = computed(() => count.value * 2)

  const increment = () => (count.value += 1)
  const decrement = () => (count.value -= 1)

  return {
    count,
    doubleCount,
    increment,
    decrement,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDemoStore, import.meta.hot))
