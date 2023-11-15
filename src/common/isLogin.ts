import cookie from 'js-cookie'

/**
 * example
 * @returns boolean
 */
export function isLogin(): boolean {
  return Boolean(cookie.get('token'))
}
