import { type LastRankingLoader } from '@/domain/usecases'
import { ok, serverError, type Controller, type HttpResponse } from '@/presentation/contracts'
import { RankingScoreViewModel } from '@/presentation/view-models'

export class LoadLastRankingController implements Controller {
  constructor (private readonly lastRankingLoader: LastRankingLoader) {}

  async handle (): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load()
      return ok(RankingScoreViewModel.mapCollection(ranking))
    } catch (error) {
      return serverError(error)
    }
  }
}
