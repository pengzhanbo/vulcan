# `useHttp(baseUrl[, config])`

创建一个 axios 实例，并对请求方法进行包装，包装后的请求方法，是一个高阶函数。
高阶函数用于定义一个 API 请求，返回一个函数，该函数才是最终用于发起请求的执行体。

```ts
import { useHttp } from '~/common/http'

const request = useHttp('http://example.com')
// api
// 定义一个获取 post list 的API请求方法
// 通过 type 描述 请求参数 和响应体
const fetchPostList = request.post<
  {
    page: number
  },
  {
    title: string
    content: string
    author: string
  }[]
>('/post/list')

// hooks
const usePostList = async () => {
  const postList = ref([])
  try {
    // 在调用 接口的位置，调用 请求方法获取数据
    const result = await fetchPostList({ page: 1 })
    postList.value.push(...result)
  } catch (e) {}
  return { postList }
}
```

## Method

```ts
interface FetchFn<P extends Request, T extends Response> {
  (body: P, config: AxiosRequestConfig): Promise<T>
}
```

- `request.get<Request, Response>(url) => FetchFn`
- `request.delete<Request, Response>(url) => FetchFn`
- `request.head<Request, Response>(url) => FetchFn`
- `request.post<Request, Response>(url) => FetchFn`
- `request.put<Request, Response>(url) => FetchFn`
- `request.patch<Request, Response>(url) => FetchFn`

- `request.create(url)`

  对于后端如果采用类似于微服务，将某几个接口归类于一个服务下，在前端管理 API 接口时，希望能映射到某个服务，可通过 `create`方法，传入后端服务 url 前缀，该方法会返回`baseURL+serviceUrl`包装后的`request`请求方法。

## Why

- 为什么包装后的方法是返回的一个请求函数？

  这是出于分层的考虑，将所有的 API 进行分层管理，同时能够兼具 API 文档的功能，利用`typescript`的类型系统，可以很方便的声明入参、响应体，使得其他地方调用时，使用起来更为直观。
