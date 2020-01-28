'use strict'

import Fastify from 'fastify'
import fp from 'fastify-plugin'

import fastifyEnv from 'fastify-env'
import fastifyMongodb from 'fastify-mongodb'

import { logAccess } from './utils/utils.js'

const envOptions = {
  dotenv: true, // or { debug: true },
  schema: {
    type: 'object',
    required: ['MONGOURI'],
    properties: {
      PORT: {
        type: 'string',
        default: 3000
      },
      MONGOURI: {
        type: 'string',
        default: ''
      }
    }
  }
}

function buildFastify (options = {}) {
  const fastify = Fastify(options)

  fastify.register(fastifyEnv, envOptions)
  //
  fastify.register(fp(async (fastify, opts) => {
    fastify.register(fastifyMongodb, {
      url: fastify.config.MONGOURI
    })
  }))

  fastify.get('/ping/:response', function (request, reply) {
    const response = { ping: request.params.response }
    logAccess(response, fastify.mongo.db.collection('access-log'))
    reply.send(response)
  })

  fastify.get('/ping', async function (request, reply) {
    const response = { ping: 'pong' }
    logAccess(response, fastify.mongo.db.collection('access-log'))
    reply.send(response)
  })

  return fastify
}

export default buildFastify
