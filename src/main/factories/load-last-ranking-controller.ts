import { LastRankingLoaderService } from '@/data/services'
import { FakeRankingRepository } from '@/infra/repositories'
import { type Controller } from '@/presentation/contracts'
import { LoadLastRankingController } from '@/presentation/controllers'

export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repo)
  const controller = new LoadLastRankingController(loader)

  return controller
}
