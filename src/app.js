import { config } from './config.js'
// import packageConfig from '../package.json' with { type: 'json' }
import fs from 'fs/promises'
const packageConfig = JSON.parse(await fs.readFile(new URL('../package.json', import.meta.url)))

const { name: title, description } = packageConfig

export default async function (fastify, opts) {
  // fastify-cli does not support loading dotenv with an option

  await fastify.register(import('@fastify/env'), config)
  await fastify.register(import('@fastify/swagger'), {
    openapi: {
      openapi: '3.0.0',
      info: {
        title,
        description,
        version: '1.0.0'
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server'
        }
      ],
      tags: [
        { name: 'ping', description: 'Ping related end-points' },
        { name: 'headers', description: 'Headers related end-points' }
      ],
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      }
    }
  })
  await fastify.register(import('@fastify/swagger-ui'), {
    routePrefix: '/api/docs',
    initOAuth: { },
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    },
    uiHooks: {
      onRequest: function (request, reply, next) { next() },
      preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header
  })
  await fastify.register(import('@fastify/mongodb'), {
    url: fastify.config.MONGODB_URI
  })

  await fastify.register(import('./services/index.js'), { prefix: '/api' })

  return fastify
}
