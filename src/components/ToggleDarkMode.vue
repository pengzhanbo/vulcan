<script lang="ts" setup>
import ThemeDarkIcon from './icons/ThemeDarkIcon.vue'
import ThemeLightIcon from './icons/ThemeLightIcon.vue'

const isDarkMode = useDarkMode()
const toggleMode = () => (isDarkMode.value = !isDarkMode.value)
</script>

<template>
  <div class="flex ml-2 text-xl" @click="toggleMode()">
    <component :is="isDarkMode ? ThemeDarkIcon : ThemeLightIcon" />
  </div>
</template>
