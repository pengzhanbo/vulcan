import type { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { HttpError } from './httpError'
import { combUrl, isObject } from '~/utils'

export interface HttpResponseOption {
  /**
   * 响应体用于判断请求结果状态的字段名
   *
   * @default 'code'
   */
  codeKey?: string

  /**
   * 响应体用于判断请求结果状态的字段值
   *
   * @default 100
   */
  successValue?: string | number

  /**
   * 响应体用于保存请求结果的字段名
   *
   * @default 'result'
   */
  resultKey?: string

  /**
   * 响应体信息字段名
   *
   * @default 'message'
   */
  messageKey?: string
}

export type RequestQuery<
  T extends Record<string | number, string | number> = {},
  K extends keyof T = keyof T
> = {
  [P in K]: T[P]
}

export interface ResponseError extends Error {
  code?: string | number
  status?: string | number
}

export const useAxiosApi = (instance: Axios, subUrl = '') => {
  const get = <Q extends RequestQuery, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      params: Q = Object.create(null),
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      return instance.get(url, { params, ...config })
    }
  }

  const del = <D extends RequestQuery, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      params: D = Object.create(null),
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      return instance.delete(url, { params, ...config })
    }
  }

  const head = <D extends RequestQuery, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      params: D = Object.create(null),
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      return instance.head(url, { params, ...config })
    }
  }

  const post = <D extends Record<string, any>, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      data: D = Object.create(null),
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      return instance.post(url, data, config)
    }
  }

  const put = <D extends Record<string, any>, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      data: D = Object.create(null),
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      return instance.put(url, data, config)
    }
  }

  const patch = <D extends Record<string, any>, T = any>(url: string) => {
    url = combUrl(subUrl, url)
    return (
      data: D = Object.create(null),
      config: AxiosRequestConfig = {}
    ): Promise<T> => {
      return instance.patch(url, data, config)
    }
  }

  const create = (url: string) => {
    return useAxiosApi(instance, url)
  }

  return { get, delete: del, head, post, put, patch, create }
}

export const useHttp = (
  baseURL = __APP_API_URL__,
  config: AxiosRequestConfig = {},
  {
    codeKey = 'code',
    successValue = 100,
    resultKey = 'result',
    messageKey = 'message',
  }: HttpResponseOption = {}
) => {
  const http = axios.create({
    baseURL,
    timeout: __APP_FETCH_TIMEOUT__,
    ...config,
  })

  http.interceptors.response.use(
    // fulfilled response
    (response) => {
      const data = response.data
      // 对于非 json 形式的响应数据，认为是可能得其他格式响应体，直接返回数据
      // 可能是 接收的 arraybuffer 等
      if (!isObject(data)) return data
      if (data[codeKey] === successValue) {
        return data[resultKey]
      }
      return Promise.reject(response)
    },
    (response: AxiosResponse) => {
      const name = `[httpError]: ${response.config.url}`
      if (response.data && isObject(response.data)) {
        throw new HttpError({
          message: response.data[messageKey],
          name,
          code: response.data[codeKey],
        })
      }
      throw new HttpError({
        message: response.statusText,
        name,
        status: response.status,
      })
    }
  )

  const api = useAxiosApi(http)

  return { http, ...api }
}
