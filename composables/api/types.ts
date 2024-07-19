
export type { ApiResponse }

interface ResponseLinks {
    first: string
    last: string
    prev: string | null
    next: string | null
}
interface ResponseMeta {
    current_page: number
    from: number
    last_page: number
    links: {
      url: string | null
      label: string
      active: boolean
    }[]
    path: string
    per_page: number
    to: number
    total: number
}
declare global {
  interface ApiResponse<T> {
    message: string
    data: T
  }
  interface ApiListResponse<T> extends ApiResponse<T> {
    links: ResponseLinks,
    meta: ResponseMeta
  }
}

