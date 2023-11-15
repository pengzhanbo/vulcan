<script setup>
import Navbar from '~/components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="app-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.app-container {
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: var(--navbar-height);
}
</style>
