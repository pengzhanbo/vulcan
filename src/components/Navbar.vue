<script lang="ts" setup>
const { title } = setupNavbar()

const router = useRouter()
const goBack = () => router.back()
</script>

<template>
  <nav
    class="fixed-0 flex-center w-full h-$navbar-height bg-$c-bg-navbar transition-colors border-b"
  >
    <span
      class="navbar-back flex h-full py-0 px-2 text-2xl text-$c-icon transition-colors"
      @click="goBack"
    >
      <ArrowLeftIcon />
    </span>
    <h2 class="flex-1 text-36px px-2 py-0">{{ title }}</h2>
    <div class="flex items-center pr-4">
      <ToggleLanguage />
      <ToggleDarkMode />
    </div>
  </nav>
</template>
