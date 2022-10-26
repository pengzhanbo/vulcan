const toString = Object.prototype.toString

export const checkType = (val: any): string => toString.call(val).slice(8, -1)

export const isObject = <T extends Record<string, any>>(
  val: unknown
): val is T => checkType(val) === 'Object'

export const isArray = (val: unknown): val is any[] => Array.isArray(val)

export const isFunction = <T extends Function>(val: any): val is T =>
  typeof val === 'function'

export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean'

export const isEmpty = (val: unknown): boolean =>
  val === undefined || val === null

export const isEmptyObject = (val: unknown): val is object => {
  return (
    isObject(val) &&
    Object.keys(val).length === 0 &&
    Object.getOwnPropertySymbols(val).length === 0
  )
}

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'

export const hasOwn = <T extends object, K extends keyof T>(
  val: T,
  key: K
): key is K => Object.prototype.hasOwnProperty.call(val, key)

export const isHttp = (url: string) => {
  return /^(https?:)?\/\//i.test(url)
}
