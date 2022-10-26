import cookie from 'js-cookie'

/**
 * example
 * @returns
 */
export const isLogin = (): boolean => {
  return Boolean(cookie.get('token'))
}
