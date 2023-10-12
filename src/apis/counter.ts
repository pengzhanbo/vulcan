import { request } from '~/common/http'

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
 * @example
 * ```ts
 * const result = await getCounter({ current: 1 })
 * ```
 */
export const getCounter = request.get<GetCounterRequest, GetCountResponse>(
  '/counter',
)
