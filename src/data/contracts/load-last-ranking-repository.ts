import { type RankingScoreModel } from '@/data/models'

export interface LoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreModel[]>
}
