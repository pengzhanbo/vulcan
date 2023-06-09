<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useDemoStore()
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement } = store
</script>

<template>
  <Card class="p-5" border>
    <p class="mt-0">
      <span>count: {{ count }}</span>
    </p>
    <p>
      <span>doubleCount: {{ doubleCount }}</span>
    </p>
    <button class="inc btn" @click="increment()">+</button>
    <button class="dec ml-5 btn" @click="decrement()">-</button>
  </Card>
</template>
