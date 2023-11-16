<script lang="ts" setup>
withDefaults(
  defineProps<{
    border?: boolean
    borderTop?: boolean
    borderBottom?: boolean
    title?: string
  }>(),
  {
    border: false,
    borderTop: false,
    borderBottom: false,
    title: '',
  },
)
</script>

<template>
  <div
    class="card-wrapper transition-colors"
    :class="{
      'border-t': border || borderTop,
      'border-b': border || borderBottom,
    }"
  >
    <slot name="title">
      <h3 v-if="title" class="card-title transition-colors">
        {{ title }}
      </h3>
    </slot>
    <slot />
    <slot name="footer" />
  </div>
</template>

<style lang="scss">
.card-wrapper {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  background-color: var(--c-bg-card);

  &:last-of-type {
    margin-bottom: 0;
  }

  &.border-t {
    border-top: solid 1px var(--c-border);
  }

  &.border-b {
    border-bottom: solid 1px var(--c-border);
  }

  .card-title {
    margin: 0 0 8px 0;
    padding-bottom: 8px;
    border-bottom: solid 1px var(--c-border);
  }
}
</style>
