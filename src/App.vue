<script lang="ts" setup>
import { setupDarkMode } from '~/composables'
import Layout from '~/layouts/Layout.vue'
import { setupI18n } from '~/modules'

setupDarkMode()
setupI18n()
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
