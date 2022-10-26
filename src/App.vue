<script lang="ts" setup>
import { setupI18n } from './modules'
import Layout from '~/layouts/Layout.vue'

setupDarkMode()
setupI18n()
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
