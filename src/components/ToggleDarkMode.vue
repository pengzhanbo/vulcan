<script lang="ts" setup>
import ThemeDarkIcon from './icons/ThemeDarkIcon.vue'
import ThemeLightIcon from './icons/ThemeLightIcon.vue'
import { useDarkMode } from '~/composables'

const isDarkMode = useDarkMode()
const toggleMode = () => (isDarkMode.value = !isDarkMode.value)
</script>

<template>
  <div class="ml-2 flex text-xl" @click="toggleMode()">
    <component :is="isDarkMode ? ThemeDarkIcon : ThemeLightIcon" />
  </div>
</template>
