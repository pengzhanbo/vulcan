<script lang="ts" setup>
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue'
import ToggleDarkMode from './ToggleDarkMode.vue'
import ToggleLanguage from './ToggleLanguage.vue'
import { setupNavbar } from '~/composables'

const { title } = setupNavbar()

const router = useRouter()
const goBack = () => router.back()
</script>

<template>
  <nav class="navbar-wrapper flex flex-center transition-colors">
    <span class="navbar-back flex transition-colors" @click="goBack">
      <ArrowLeftIcon class="m-auto" />
    </span>
    <h2 class="navbar-title flex-1">
      {{ title }}
    </h2>
    <div class="navbar-icons flex items-center">
      <ToggleLanguage />
      <ToggleDarkMode class="ml-2" />
    </div>
  </nav>
</template>

<style lang="scss">
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--c-bg-navbar);
  border-bottom: solid 1px var(--c-border);

  .navbar-back {
    height: 100%;
    padding: 0 8px;
    font-size: 20px;
    line-height: 32px;
    color: var(--c-icon);
  }

  .navbar-title {
    padding: 0 8px;
    font-size: 20px;
  }

  .navbar-icons {
    padding-right: 16px;
  }

  .ml-2 {
    margin-left: 8px;
  }
}
</style>
