<script lang="ts" setup>
defineProps({
  border: {
    type: Boolean,
    default: false,
  },
  borderTop: {
    type: Boolean,
    default: false,
  },
  borderBottom: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    class="card-wrapper"
    :class="{
      'border-t': border || borderTop,
      'border-b': border || borderBottom,
    }"
  >
    <slot name="title">
      <h3 v-if="title" class="card-title">{{ title }}</h3>
    </slot>
    <slot />
    <slot name="footer"></slot>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 20px 40px;
  background-color: var(--c-bg-card);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  margin-bottom: 40px;

  &:last-of-type {
    margin-bottom: 0;
  }

  .card-title {
    margin: 0;
    padding-bottom: 20px;
    border-bottom: solid 1px var(--c-border);
    transition: border-color 0.2s ease;
  }

  &.border-t {
    border-top: solid 1px var(--c-border);
  }

  &.border-b {
    border-bottom: solid 1px var(--c-border);
  }
}
</style>
