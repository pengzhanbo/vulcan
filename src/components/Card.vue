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
    class="box-border w-full px-4 py-4 mb-4 bg-$c-bg-card transition-colors last-of-type:mb-0"
    :class="{
      'bb-t': border || borderTop,
      'bb-b': border || borderBottom,
    }"
  >
    <slot name="title">
      <h3 v-if="title" class="m-0 pb-2 bb-b transition-colors">
        {{ title }}
      </h3>
    </slot>
    <slot />
    <slot name="footer" />
  </div>
</template>
