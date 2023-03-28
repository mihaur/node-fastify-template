export default async function routes (fastify, options) {
  fastify.register(import('./ping/index.js'), { prefix: '/ping' })
  fastify.register(import('./headers/index.js'), { prefix: '/headers' })
}
