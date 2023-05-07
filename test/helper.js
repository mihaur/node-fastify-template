import Fastify from 'fastify'
import app from '../src/app.js'

export async function buildFastify (opts = {}) {
  const fastify = await app(Fastify(), opts)
  await fastify.ready()

  return fastify
}

export const getLastLogItem = service =>
  db =>
    db.collection('access-log').findOne({ service }, { sort: { $natural: -1 }, projection: { _id: 0, service: 0, createdAt: 0 } })
