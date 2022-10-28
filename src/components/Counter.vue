<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useDemoStore()
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement } = store
</script>

<template>
  <Card class="counter-wrapper" border>
    <p>
      <span>count: {{ count }}</span>
    </p>
    <p>
      <span>doubleCount: {{ doubleCount }}</span>
    </p>
    <button class="inc" @click="increment()">+</button>
    <button class="dec" @click="decrement()">-</button>
  </Card>
</template>

<style lang="scss">
.counter-wrapper {
  padding: 20px;

  button {
    font-size: 32px;
  }

  .dec {
    margin-left: 18px;
  }
}
</style>
