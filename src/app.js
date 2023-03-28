import { config } from './config.js'

export default async function (fastify, opts) {
  // fastify-cli does not support loading dotenv with option

  await fastify.register(import('@fastify/env'), config)
  fastify.register(import('@fastify/mongodb'), {
    url: fastify.config.MONGODB_URI
  })

  fastify.register(import('./services/index.js'), { prefix: '/api' })

  return fastify
}
