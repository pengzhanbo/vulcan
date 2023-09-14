export interface HttpErrorOptions extends ErrorOptions {
  code?: string | number
  status?: string | number
  stack?: any
  message: string
  name?: string
}

/**
 * 包装 http error
 *
 * 你可能需要根据 项目的后端服务 调整 code 字段名，或者扩展其他内容
 */
export class HttpError extends Error {
  code?: string | number
  status?: string | number
  constructor({ message, code, status, stack, cause, name }: HttpErrorOptions) {
    super(message)
    this.code = code
    this.status = status
    this.stack = stack || this.stack
    this.cause = cause || this.cause
    this.name = name || this.name
  }
}
