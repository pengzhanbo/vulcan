import createService from '~/modules/createService'
import { fetchTodoList } from '~/apis'

/**
 * 获取待办列表
 */
export const getTodoList = createService(async () => {
  const { code, message, result = [] } = await fetchTodoList()
  if (code !== 100)
    throw new Error(message)

  return result.map(item => ({ id: item.id, name: item.name.toLocaleUpperCase() }))
})
