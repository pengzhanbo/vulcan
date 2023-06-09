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
    class="mb-4 box-border w-full bg-$c-bg-card px-4 py-4 transition-colors last-of-type:mb-0"
    :class="{
      'border-t': border || borderTop,
      'border-b': border || borderBottom,
    }"
  >
    <slot name="title">
      <h3 v-if="title" class="m-0 mb-2 border-b pb-2 transition-colors">
        {{ title }}
      </h3>
    </slot>
    <slot />
    <slot name="footer" />
  </div>
</template>
