declare interface Window {
  // extend the window
}

declare interface ImportMetaEnv {
  readonly MODE: 'development' | 'production'
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
  readonly BASE_URL: string

  readonly VITE_APP_API_URL: string
  readonly VITE_APP_FETCH_TIMEOUT: number
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

declare module 'virtual:*' {
  const result: any
  export default result
}
