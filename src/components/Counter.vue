<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useDemoStore()
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement } = store
</script>

<template>
  <Card class="counter-wrapper p-5" border>
    <p class="mt-0">
      <span>count: {{ count }}</span>
    </p>
    <p>
      <span>doubleCount: {{ doubleCount }}</span>
    </p>
    <button @click="increment()">+</button>
    <button class="ml-5" @click="decrement()">-</button>
  </Card>
</template>
