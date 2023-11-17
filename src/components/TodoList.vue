<script setup lang="ts">
import { getTodoList } from '~/services/todo-list'

const data = ref<{ id: number, name: string }[]>([])

onBeforeMount(async () => {
  const [res] = await getTodoList()
  res && (data.value = res)
})
</script>

<template>
  <ul>
    <li v-for="item in data" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>
