import { request } from '~/common/request'

export interface GetCounterRequest {
  current: number
}

export interface GetCountResponse {
  code: number
  message: string
  result: {
    count: number
  }
}

/**
 * 通过注释，描述接口的功能
 *
 * @param query 请求参数
 * @param query.current 当前计数
 *
 * @example
 * ```ts
 * const result = await getCounter({ current: 1 })
 * ```
 */
export const fetchCounter = request.get<GetCounterRequest, GetCountResponse>(
  '/counter',
)
