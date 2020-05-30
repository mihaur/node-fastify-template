'use strict'

import Fastify from 'fastify'
import fp from 'fastify-plugin'

import fastifyEnv from 'fastify-env'
import fastifyMongodb from 'fastify-mongodb'

import { logAccess } from './utils/utils.js'

const envOptions = {
  dotenv: true, // { debug: true },
  schema: {
    type: 'object',
    required: ['MONGODB_URI'],
    properties: {
      PORT: {
        type: 'string',
        default: 3000
      },
      MONGODB_URI: {
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
      url: fastify.config.MONGODB_URI
    })
  }))

  fastify.get('/ping/:response', async function (request, reply) {
    const response = { ping: request.params.response }
    await logAccess(response, fastify.mongo.db.collection('access-log'))
    reply.send(response)
  })

  fastify.get('/ping', async function (request, reply) {
    const response = { ping: 'pong' }
    await logAccess(response, fastify.mongo.db.collection('access-log'))
    reply.send(response)
  })

  return fastify
}

export default buildFastify
