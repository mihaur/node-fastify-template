import { logAccess } from '../../utils/utils.js'
import { pingSchema } from './schema.js'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default async function routes (fastify, options) {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: pingSchema,
    handler: async function (request, reply) {
      const response = { ping: 'pong' }
      await logAccess(response, fastify.mongo.db.collection('access-log'))
      await sleep(request.query.delay)
      reply.send(response)
    }
  })

  fastify.route({
    method: 'GET',
    url: '/:response',
    schema: pingSchema,
    handler: async function (request, reply) {
      const response = { ping: request.params.response }
      await logAccess(response, fastify.mongo.db.collection('access-log'))
      await sleep(request.query.delay)
      reply.send(response)
    }
  })
}
