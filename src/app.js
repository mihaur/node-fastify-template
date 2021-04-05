import fastifyEnv from 'fastify-env'
import fastifyMongodb from 'fastify-mongodb'

import * as config from './config.js'

import services from './services/index.js'

export default async function (fastify, opts) {
  await fastify.register(fastifyEnv, config.envOptions)
  fastify.register(fastifyMongodb, {
    url: fastify.config.MONGODB_URI
  })

  fastify.register(services, { prefix: '/api' })

  return fastify
}
