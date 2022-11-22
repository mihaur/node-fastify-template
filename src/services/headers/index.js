import { sleep, logAccess } from '../../utils/utils.js'
import { headersSchema } from './schema.js'

export default async function routes (fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: headersSchema,
    handler: async function (request, reply) {
      const response = { ...request.headers }
      await logAccess('headers', response, fastify.mongo.db.collection('access-log'))
      await sleep(request.query.delay)
      // nosemgrep: javascript.express.security.audit.xss.direct-response-write.direct-response-write
      reply.send(response)
    }
  })
}
