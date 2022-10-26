import type { Plugin, ResolvedConfig } from 'vite'

export default function vConsolePlugin(): Plugin {
  const moduleId = 'virtual:vconsole'
  const resolveId = `\0${moduleId}`
  let config: ResolvedConfig
  return {
    name: 'vite-plugin-vconsole',
    configResolved(_config) {
      config = _config
    },
    resolveId(id) {
      if (id === moduleId) {
        return resolveId
      }
    },
    load(id) {
      if (id === resolveId) {
        if (config.mode === 'development') {
          return 'import VConsole from "vconsole"\n\nnew VConsole()'
        } else {
          return ''
        }
      }
    },
  }
}
