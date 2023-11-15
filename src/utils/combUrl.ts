export function combUrl(baseUrl: string, url?: string): string {
  return url
    ? `${baseUrl.replace(/\/+$/, '')}/${url.replace(/^\/+/, '')}`
    : baseUrl
}
