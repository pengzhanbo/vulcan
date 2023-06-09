<script lang="ts" setup>
import { type LanguageOptions, languageList as languageListRaw } from '~/common'

const show = ref(false)
const open = () => (show.value = true)
const hide = () => (show.value = false)

const languageList = ref<LanguageOptions>(languageListRaw)
const { locale } = useI18n()
const setLocale = (lang: string) => {
  locale.value = lang
  hide()
}
</script>

<template>
  <div class="flex" @click="open">
    <LangIcon />
  </div>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-show="show"
        class="fixed-0 z-20 h-full w-full flex bg-$c-bg-mask"
        @click.self="hide"
      >
        <ul class="m-auto w-3/4 list-none rounded-md bg-$c-bg-card px-5 py-4">
          <li
            v-for="lang in languageList"
            :key="lang.value"
            class="px-0 py-2"
            :class="{ 'text-brand': lang.value === locale }"
            @click="setLocale(lang.value)"
          >
            {{ lang.label }}
          </li>
        </ul>
      </div>
    </Transition>
  </Teleport>
</template>
