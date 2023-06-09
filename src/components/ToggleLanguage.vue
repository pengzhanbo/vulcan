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
  <div class="toggle-language-button" @click="open">
    <LangIcon />
  </div>
  <Teleport to="body">
    <Transition name="fade">
      <div v-show="show" class="language-select-wrapper" @click.self="hide">
        <ul class="language-select">
          <li
            v-for="lang in languageList"
            :key="lang.value"
            :class="{ active: lang.value === locale }"
            @click="setLocale(lang.value)"
          >
            {{ lang.label }}
          </li>
        </ul>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.toggle-language-button {
  vertical-align: middle;
  display: flex;

  :deep(.icon) {
    margin: auto;
  }
}
.language-select-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: var(--c-bg-mask);
}

.language-select {
  margin: auto;
  background-color: var(--c-bg-card);
  width: 75%;
  padding: 20px 40px;
  list-style: none;
  border-radius: 8px;

  li {
    padding: 20px 0;

    &.active {
      color: var(--c-brand);
    }
  }
}
</style>
