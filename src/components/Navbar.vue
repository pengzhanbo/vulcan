<script lang="ts" setup>
const { title } = setupNavbar()

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <nav class="navbar-wrapper">
    <span class="navbar-back" @click="goBack">
      <ArrowLeftIcon />
    </span>
    <h2 class="navbar-title">{{ title }}</h2>
    <div class="navbar-right">
      <ToggleLanguage />
      <ToggleDarkMode />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--c-bg-navbar);
  border-bottom: solid 1px var(--c-border);
  font-size: 36px;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.navbar-back {
  display: flex;
  height: 100%;
  padding: 0 16px;
  font-size: 48px;
  color: var(--c-icon);
  transition: color 0.2s ease;

  > :deep(.icon) {
    margin: auto;
  }
}

.navbar-title {
  flex: 1;
  font-size: 36px;
  padding: 0 20px;
}

.navbar-right {
  display: flex;
  align-items: center;
  padding-right: 20px;
}
</style>
