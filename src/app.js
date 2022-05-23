import env from '@fastify/env'
import mongodb from '@fastify/mongodb'

import * as config from './config.js'

import services from './services/index.js'

export default async function (fastify, opts) {
  // fastify-cli does not support loading dotenv with option
  await fastify.register(env, config.envOptions)
  fastify.register(mongodb, {
    url: fastify.config.MONGODB_URI
  })

  fastify.register(services, { prefix: '/api' })

  return fastify
}
