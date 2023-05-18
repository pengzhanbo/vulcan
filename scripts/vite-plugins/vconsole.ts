import type { Plugin, ResolvedConfig } from 'vite'

/**
 * vConsole 注入插件，插件不主动进行注入，仅在 显式使用 `import 'virtual:vconsole'` 引入时，才进行注入。
 *
 * 建议仅在 入口文件的顶部的进行引用。
 *
 * 在 `enable` 为 `false` 时，引用注入是一个无内容的 virtual模块
 *
 * @param enable 是否注入 vconsole, 默认仅在 development 下注入
 */
export default function vConsolePlugin(enable?: boolean): Plugin {
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
        enable ??= config.mode === 'development'
        if (enable) {
          return 'import VConsole from "vconsole";\n\nnew VConsole();'
        } else {
          return ''
        }
      }
    },
  }
}
