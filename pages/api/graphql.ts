import { ApolloServer } from 'apollo-server-micro'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { DogsResolver } from '@src/schema/dogs.resolver'
import { HelloResolver } from '@src/schema/hello.resolver'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { IncomingMessage, ServerResponse } from 'http'

const schema = await buildSchema({
  resolvers: [DogsResolver, HelloResolver],
})

const server = new ApolloServer({ schema })

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default async function handler(
  req: MicroRequest,
  res: ServerResponse<IncomingMessage>,
) {
  await startServer
  await server.createHandler({ path: '/api/graphql' })(req, res)
}
