<script lang="ts" setup>
import LangIcon from './icons/LangIcon.vue'
import { type LanguageOptions, languageList as languageListRaw } from '~/common'

const [show, toggle] = useToggle(false)
const open = () => toggle(true)
const hide = () => toggle(false)

const languageList = ref<LanguageOptions>(languageListRaw)
const { locale } = useI18n()
function setLocale(lang: string) {
  locale.value = lang
  hide()
}
</script>

<template>
  <div class="flex" @click="open">
    <LangIcon class="m-auto" />
  </div>
  <Teleport to="body">
    <Transition name="fade">
      <div v-show="show" class="lang-wrapper flex" @click.self="hide">
        <ul class="m-auto lang-list">
          <li
            v-for="lang in languageList"
            :key="lang.value"
            class="lang-item"
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

<style lang="scss">
.lang-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: var(--c-bg-mask);

  .lang-list {
    width: 75%;
    padding: 16px 20px;
    list-style-type: none;
    border-radius: 6px;
    background-color: var(--c-bg-card);

    .lang-item {
      padding: 8px 0;
    }
  }
}
</style>
