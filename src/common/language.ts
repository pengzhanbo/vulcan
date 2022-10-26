export type Languages = 'zh-CN' | 'en'

export interface LanguageOptionsItem {
  label: string
  value: Languages
}

export type LanguageOptions = LanguageOptionsItem[]

export const DEFAULT_LANGUAGE: Languages = 'zh-CN'

export const languageList: LanguageOptions = [
  { label: '简体中文', value: 'zh-CN' },
  { label: 'English', value: 'en' },
]
