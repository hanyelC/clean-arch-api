
import ranking from '@/main/routes/ranking'

import { type Express, Router } from 'express'

export const setupRoutes = (app: Express): void => {
  const router = Router()

  ranking(router)

  app.use('/api', router)
}
