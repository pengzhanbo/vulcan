<script lang="ts" setup>
import { useDarkMode } from '~/composables'
import ThemeDarkIcon from './icons/ThemeDarkIcon.vue'
import ThemeLightIcon from './icons/ThemeLightIcon.vue'

const isDarkMode = useDarkMode()
const toggleMode = () => (isDarkMode.value = !isDarkMode.value)
</script>

<template>
  <div class="ml-2 flex text-xl" @click="toggleMode()">
    <component :is="isDarkMode ? ThemeDarkIcon : ThemeLightIcon" />
  </div>
</template>
