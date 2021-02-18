'use strict'

import Fastify from 'fastify'

import fastifyEnv from 'fastify-env'
import fastifyMongodb from 'fastify-mongodb'

import * as config from './config.js'

import services from './services/index.js'

async function buildFastify (options = {}) {
  const fastify = Fastify(options)

  await fastify.register(fastifyEnv, config.envOptions)
  fastify.register(fastifyMongodb, {
    url: fastify.config.MONGODB_URI
  })

  fastify.register(services, { prefix: '/api' })

  return fastify
}

export default buildFastify
