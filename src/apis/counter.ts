import type { RequestQuery } from '~/common/http'
import { request } from '~/common/http'

export interface GetCounterRequest extends RequestQuery {
  current: number
}

export interface GetCountResponse {
  count: number
}

/**
 * 通过注释，描述接口的功能
 *
 * @example const result = await getCounter({ current: 1 })
 */
export const getCounter = request.get<GetCounterRequest, GetCountResponse>(
  '/counter'
)
