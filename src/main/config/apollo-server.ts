import typeDefs from '@/main/graphql/type-defs'
import resolvers from '@/main/graphql/resolvers'

import { ApolloServer } from 'apollo-server-express'
import { type Express } from 'express'

export const setupApolloServer = (app: Express): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs
  })

  server.start().then(_ => {
    server.applyMiddleware({ app })
  }).catch(_ => { /**/ })
}
