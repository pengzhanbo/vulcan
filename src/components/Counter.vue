<script setup lang="ts">
import { useDemoStore } from '~/stores'
import Card from './Card.vue'

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
    <button class="inc btn" @click="increment()">
      +
    </button>
    <button class="dec ml-5 btn" @click="decrement()">
      -
    </button>
  </Card>
</template>

<style lang="scss">
.p-5 {
  padding: 20px;
}

.mt-0 {
  margin-top: 0;
}

.ml-5 {
  margin-left: 20px;
}

.btn {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 0.25rem;
  border: none;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(15, 118, 110, 1);
  cursor: pointer;
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;

  &:hover {
    background-color: rgba(17, 94, 89, 1);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
}
</style>
