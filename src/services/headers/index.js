import { sleep, createLogger } from '../../utils/utils.js'
import { headersSchema as schema } from './schema.js'

const logAccess = createLogger('headers')

export default async function routes (fastify, options) {
  fastify.get('/', {
    schema,
    handler: async (request, reply) => {
      const response = { ...request.headers }
      await logAccess(response, fastify.mongo.db.collection('access-log'))
      await sleep(request.query.delay)
      // nosemgrep: javascript.express.security.audit.xss.direct-response-write.direct-response-write
      reply.send(response)
    }
  })
}
