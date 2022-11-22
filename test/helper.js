import Fastify from 'fastify'
import app from '../src/app.js'

export async function buildFastify (t, opts = {}) {
  const fastify = await app(Fastify(), opts)
  await fastify.ready()

  t.teardown(fastify.close.bind(fastify))
  return fastify
}

export function getLastLogItem (service) {
  return async db => {
    const lastLogItem = await db.collection('access-log').findOne({ service }, { sort: { $natural: -1 }, projection: { _id: 0, service: 0, createdAt: 0 } })
    return lastLogItem
  }
}
