import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock({
  url: '/api/counter',
  enabled: true,
  body({ query }) {
    return {
      code: 100,
      message: 'success',
      result: {
        count: parseInt(query.current || 0) + 1,
      },
    }
  },
})
