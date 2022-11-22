import ping from './ping/index.js'
import headers from './headers/index.js'

export default async function routes (fastify, options) {
  fastify.register(ping, { prefix: '/ping' })
  fastify.register(headers, { prefix: '/headers' })
}
