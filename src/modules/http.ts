import type { Axios, AxiosRequestConfig, CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import { combUrl } from '~/utils'

export type RequestQuery<
  T extends object = object,
  K extends keyof T = keyof T,
> = {
  [P in K]: T[P]
}

export function useAxiosApi(instance: Axios, subUrl = '') {
  const get = <Q extends RequestQuery, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      params: Q = Object.create(null),
      config: AxiosRequestConfig = {},
    ): Promise<T> => {
      return instance.get(url, { params, ...config })
    }
  }

  const del = <D extends RequestQuery, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      params: D = Object.create(null),
      config: AxiosRequestConfig = {},
    ): Promise<T> => {
      return instance.delete(url, { params, ...config })
    }
  }

  const head = <D extends RequestQuery, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      params: D = Object.create(null),
      config: AxiosRequestConfig = {},
    ): Promise<T> => {
      return instance.head(url, { params, ...config })
    }
  }

  const post = <D extends Record<string, any>, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      data: D = Object.create(null),
      config: AxiosRequestConfig = {},
    ): Promise<T> => {
      return instance.post(url, data, config)
    }
  }

  const put = <D extends Record<string, any>, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      data: D = Object.create(null),
      config: AxiosRequestConfig = {},
    ): Promise<T> => {
      return instance.put(url, data, config)
    }
  }

  const patch = <D extends Record<string, any>, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      data: D = Object.create(null),
      config: AxiosRequestConfig = {},
    ): Promise<T> => {
      return instance.patch(url, data, config)
    }
  }

  const create = (url: string) => {
    return useAxiosApi(instance, url)
  }

  return { get, delete: del, head, post, put, patch, create }
}

export function useHttp(baseURL = '', config: CreateAxiosDefaults = {}) {
  const http = axios.create({
    baseURL,
    timeout: import.meta.env.VITE_APP_FETCH_TIMEOUT,
    ...config,
  })

  const api = useAxiosApi(http)

  return { http, ...api }
}
