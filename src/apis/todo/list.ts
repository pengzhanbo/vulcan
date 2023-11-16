import { request } from '~/common/request'

export interface GetTodoListResponse {
  code: number
  message: string
  result: { id: number; name: string }[]
}

export const fetchTodoList = request.get<never, GetTodoListResponse>('/todo/list')
