'use strict'

import Fastify from 'fastify'
import fp from 'fastify-plugin'

import fastifyEnv from 'fastify-env'
import fastifyMongodb from 'fastify-mongodb'

import * as config from './config.js'

import services from './services/index.js'

function buildFastify (options = {}) {
  const fastify = Fastify(options)

  fastify.register(fastifyEnv, config.envOptions)
  fastify.register(
    fp(async (fastify, opts) => {
      fastify.register(fastifyMongodb, {
        url: fastify.config.MONGODB_URI
      })
    })
  )

  fastify.register(services, { prefix: '/api' })

  return fastify
}

export default buildFastify
