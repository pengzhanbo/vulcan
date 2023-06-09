<script lang="ts" setup>
const { title } = setupNavbar()

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<template>
  <nav class="navbar-wrapper bb-b">
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
  @apply fixed top-0 left-0 flex justify-center items-center w-full h-$navbar-height;
  @apply bg-$c-bg-navbar transition-colors;
}

.navbar-back {
  @apply flex h-full py-0 px-2 text-2xl text-$c-icon transition-colors;

  > :deep(.icon) {
    margin: auto;
  }
}

.navbar-title {
  @apply flex-1 text-36px px-2 py-0;
}

.navbar-right {
  @apply flex items-center pr-4;
}
</style>
