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
        class="fixed-0 flex w-full h-full z-20 bg-$c-bg-mask"
        @click.self="hide"
      >
        <ul class="m-auto bg-$c-bg-card w-3/4 py-4 px-5 list-none rounded-md">
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
