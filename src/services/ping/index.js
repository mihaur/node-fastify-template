import { sleep, createLogger } from '../../utils/utils.js'
import { pingSchema } from './schema.js'

const logAccess = createLogger('ping')

export default async function routes (fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: pingSchema,
    handler: async function (request, reply) {
      const response = { ping: 'pong' }
      logAccess(response, fastify.mongo.db.collection('access-log'))
      await sleep(request.query.delay)
      // nosemgrep: javascript.express.security.audit.xss.direct-response-write.direct-response-write
      reply.send(response)
    }
  })

  fastify.route({
    method: 'GET',
    url: '/:response',
    schema: pingSchema,
    handler: async function (request, reply) {
      const response = { ping: request.params.response }
      logAccess(response, fastify.mongo.db.collection('access-log'))
      await sleep(request.query.delay)
      // nosemgrep: javascript.express.security.audit.xss.direct-response-write.direct-response-write
      reply.send(response)
    }
  })
}
