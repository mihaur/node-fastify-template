import Fastify from 'fastify'
import app from '../src/app.js'

export async function buildFastify (t, opts = {}) {
  const fastify = await app(Fastify(), opts)
  await fastify.ready()

  t.tearDown(fastify.close.bind(fastify))
  return fastify
}
