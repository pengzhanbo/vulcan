<script lang="ts" setup>
import Counter from '~/components/Counter.vue'
import { useNavbar } from '~/composables'

const { t, locale } = useI18n()
const { title } = useNavbar()

watch(locale, () => (title.value = t('about.title')), { immediate: true })
</script>

<template>
  <Counter />
</template>
