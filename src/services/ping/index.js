import { sleep, createLogger } from '../../utils/utils.js'
import { pingSchema as schema } from './schema.js'

const logAccess = createLogger('ping')

export default async function routes (fastify, options) {
  fastify.get('/', {
    schema,
    handler: async (request, reply) => {
      const response = { ping: 'pong' }
      await logAccess(response, fastify.mongo.db.collection('access-log'))
      await sleep(request.query.delay)
      // nosemgrep: javascript.express.security.audit.xss.direct-response-write.direct-response-write
      reply.send(response)
    }
  })

  fastify.get('/:response', {
    handler: async (request, reply) => {
      const response = { ping: request.params.response }
      await logAccess(response, fastify.mongo.db.collection('access-log'))
      await sleep(request.query.delay)
      // nosemgrep: javascript.express.security.audit.xss.direct-response-write.direct-response-write
      reply.send(response)
    }
  })
}
