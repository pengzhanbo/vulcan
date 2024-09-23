import { fetchCounter } from '~/apis'
import createService from '~/modules/createService'

export const getCount = createService(async (current: number) => {
  const { code, message, result } = await fetchCounter({ current })
  if (code !== 100)
    throw new Error(message)

  return result
})
