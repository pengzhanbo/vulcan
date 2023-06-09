import NProgress from 'nprogress'
import type { Router } from 'vue-router'

NProgress.configure({ showSpinner: false })

export const setupGlobalGuards = (router: Router) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
