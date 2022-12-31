import type { MaybeComputedRef } from '@vueuse/core'
import type { AxiosRequestConfig } from 'axios'
import type { ComputedRef, Ref } from 'vue'
import type { HttpError } from '../common/http/httpError'

export interface UseRequestReturn<Q, T, C> {
  /**
   * 是否正在加载请求数据
   * @default false
   */
  isLoading: Ref<boolean>
  /**
   * 响应体数据
   * @default null
   */
  data: Ref<T | null>
  /**
   * 请求失败时错误信息
   */
  error: Ref<HttpError | null>
  /**
   * 是否可以中断请求
   */
  canAbort: ComputedRef<boolean>
  /**
   * 中断当前请求
   */
  abort: () => void
  /**
   * 请求方法
   * @param queryOrParams 请求参数
   * @param config axios 请求配置
   */
  request: (
    queryOrParams?: MaybeComputedRef<Q>,
    config?: MaybeComputedRef<C>
  ) => Promise<void>
}

/**
 * 配合 `/apis` 中已封装的请求方法，对请求进行封装
 * @param requestFn `/apis` 中的请求方法
 * @param queryOrParams 请求参数
 * @param initialData 响应体初始化数据
 * @param config axios 请求配置
 */
export function useRequest<
  Q = any,
  T = any,
  C extends AxiosRequestConfig = AxiosRequestConfig
>(
  requestFn: (queryOrParams?: Q, config?: C) => Promise<T>,
  queryOrParams?: MaybeComputedRef<Q>,
  initialData?: MaybeComputedRef<T>,
  config?: MaybeComputedRef<C & { immediate: boolean }>
): UseRequestReturn<Q, T, C> {
  const _initData = resolveUnref(initialData)
  const _queryOrParams = resolveUnref(queryOrParams)
  const { immediate, ..._config } = resolveUnref(config || { immediate: false })

  const isLoading = ref(false)
  const data = shallowRef<T | null>(_initData || null)
  const error = shallowRef<HttpError | null>(null)

  const supportAbort = typeof AbortController === 'function'
  const canAbort = computed(() => supportAbort && isLoading.value)
  let controller: AbortController | null

  const abort = () => {
    if (canAbort.value && controller) {
      controller.abort()
      isLoading.value = false
    }
  }

  const request = async (
    queryOrParams: MaybeComputedRef<Q> = _queryOrParams!,
    config: MaybeComputedRef<C> = _config! as MaybeComputedRef<C>
  ) => {
    const _queryOrParams = resolveUnref(queryOrParams)
    const _config: C = resolveUnref(config) || {}
    controller = supportAbort ? new AbortController() : null
    _config.signal = controller?.signal
    isLoading.value = true
    error.value = null
    try {
      const response = await requestFn(_queryOrParams, _config)
      data.value = response
      isLoading.value = false
    } catch (e: any) {
      error.value = e as HttpError
      isLoading.value = false
    }
  }

  immediate && setTimeout(request, 0)

  return { isLoading, data, error, canAbort, request, abort }
}
