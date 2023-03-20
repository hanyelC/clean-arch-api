import { type LoadLastRankingRepository } from '@/data/contracts'
import { type RankingScore } from '@/domain/entities'
import { RankingUnavailableError } from '@/domain/errors'
import { type LastRankingLoader } from '@/domain/usecases'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor (private readonly loadLastRankingRepository: LoadLastRankingRepository) {}

  async load (): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError()
    }

    return this.loadLastRankingRepository.loadLastRanking()
  }
}
