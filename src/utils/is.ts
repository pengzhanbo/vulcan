const toString = Object.prototype.toString

export const checkType = (val: any): string => toString.call(val).slice(8, -1)

export function isObject<T extends Record<string, any>>(val: unknown): val is T {
  return checkType(val) === 'Object'
}

export const isArray = (val: unknown): val is any[] => Array.isArray(val)

export function isFunction<T extends Function>(val: any): val is T {
  return typeof val === 'function'
}

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isEmpty(val: unknown): boolean {
  return val === undefined || val === null
}

export function isEmptyObject(val: unknown): val is object {
  return (
    isObject(val)
    && Object.keys(val).length === 0
    && Object.getOwnPropertySymbols(val).length === 0
  )
}

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'

export function hasOwn<T extends object, K extends keyof T>(val: T, key: K): key is K {
  return Object.prototype.hasOwnProperty.call(val, key)
}

export function isHttp(url: string) {
  return /^(https?:)?\/\//i.test(url)
}
