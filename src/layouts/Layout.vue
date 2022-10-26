<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.container {
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: var(--navbar-height);
}
</style>
