<script lang="ts" setup>
import ThemeDarkIcon from './icons/ThemeDarkIcon.vue'
import ThemeLightIcon from './icons/ThemeLightIcon.vue'

const isDarkMode = useDarkMode()
const toggleMode = () => (isDarkMode.value = !isDarkMode.value)
</script>

<template>
  <div class="toggle-class-mode" @click="toggleMode()">
    <component :is="isDarkMode ? ThemeDarkIcon : ThemeLightIcon" />
  </div>
</template>

<style lang="scss" scoped>
.toggle-class-mode {
  display: flex;
  margin-left: 20px;

  .icon {
    margin: auto;
  }
}
</style>
