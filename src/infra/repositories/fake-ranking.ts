import { type LoadLastRankingRepository } from '@/data/contracts'
import { type RankingScoreModel } from '@/data/models'
import { ranking } from '@/infra/data-sources'

export class FakeRankingRepository implements LoadLastRankingRepository {
  async loadLastRanking (): Promise<RankingScoreModel[]> {
    return ranking.map(item => ({
      heroes: item.heroes,
      matchDate: new Date(item.date),
      player: item.user,
      score: item.score
    }))
  }
}
