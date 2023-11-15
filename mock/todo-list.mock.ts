import { defineMock } from 'vite-plugin-mock-dev-server'

export default defineMock({
  url: '/api/todo/list',
  body: {
    code: 100,
    message: 'success',
    result: [
      { id: 1, name: 'todo1' },
      { id: 2, name: 'todo2' },
      { id: 3, name: 'todo3' },
      { id: 4, name: 'todo4' },
      { id: 5, name: 'todo5' },
    ],
  },
})
