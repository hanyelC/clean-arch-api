import { type HttpResponse } from '@/presentation/contracts'

export interface Controller {
  handle: () => Promise<HttpResponse>
}
