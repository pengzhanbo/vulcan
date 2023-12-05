<script lang="ts" setup>
import Card from '~/components/Card.vue'
import Counter from '~/components/Counter.vue'
import HomeHero from '~/components/HomeHero.vue'
import TodoList from '~/components/TodoList.vue'
import { useCount, useNavbar } from '~/composables'

const { t } = useI18n()
useNavbar({ title: () => t('home.title') })

const { count, updateCount } = useCount(0)
</script>

<template>
  <HomeHero />
  <Card border>
    <p>
      <span>{{ t('home.linkTo') }}: </span>
      <RouterLink :to="{ name: 'about' }">
        {{ t('about.title') }}
      </RouterLink>
    </p>
  </Card>
  <Counter border />
  <Card border title="mock data">
    <p>
      count: <span>{{ count }}</span>
    </p>
    <p class="mt-2">
      <button class="btn" @click="updateCount">
        {{ t('home.mock') }}
      </button>
    </p>
  </Card>
  <Card border title="todo list">
    <TodoList />
  </Card>
</template>
