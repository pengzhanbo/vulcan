export type ServiceResult<Data = any> = readonly [data: Data | null, error: Error | null]

export default function createService<Args extends any[], Data = any>(
  service: (...arg: Args) => Promise<Data>,
) {
  return async (...arg: Args) => {
    try {
      const data = await service(...arg)
      return [data, null] as ServiceResult<Data>
    }
    catch (e: any) {
      return [null, e] as ServiceResult<Data>
    }
  }
}
