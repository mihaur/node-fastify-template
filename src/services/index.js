import ping from './ping/index.js'

export default async function routes (fastify, options) {
  fastify.register(ping, { prefix: '/ping' })
}
