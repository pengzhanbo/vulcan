<script lang="ts" setup>
const { title } = setupNavbar()

const router = useRouter()
const goBack = () => router.back()
</script>

<template>
  <nav
    class="fixed-0 h-$navbar-height w-full flex-center border-b bg-$c-bg-navbar transition-colors"
  >
    <span
      class="navbar-back h-full flex px-2 py-0 text-2xl text-$c-icon transition-colors"
      @click="goBack"
    >
      <ArrowLeftIcon />
    </span>
    <h2 class="flex-1 px-2 py-0 text-36px">{{ title }}</h2>
    <div class="flex items-center pr-4">
      <ToggleLanguage />
      <ToggleDarkMode />
    </div>
  </nav>
</template>
