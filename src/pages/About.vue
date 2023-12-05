<script lang="ts" setup>
import Counter from '~/components/Counter.vue'
import { useNavbar } from '~/composables'

const { t } = useI18n()
useNavbar({ title: () => t('about.title') })
</script>

<template>
  <Counter />
</template>
