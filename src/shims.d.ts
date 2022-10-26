declare interface Window {
  // extend the window
}

// define env vars
declare const __APP_API_URL__: string
declare const __APP_BASE_URL__: string
declare const __APP_FETCH_TIMEOUT__: number
declare const __IS_DEVELOPMENT__: boolean

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'virtual:*' {
  const result: any
  export default result
}
