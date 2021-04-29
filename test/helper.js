import Fastify from 'fastify'
import app from '../src/app.js'

export async function buildFastify (t, opts = {}) {
  const fastify = await app(Fastify(), opts)
  await fastify.ready()

  t.teardown(fastify.close.bind(fastify))
  return fastify
}

export function getLastItem (app, collection) {
  return app.mongo.db.collection(collection).find().limit(1).project({ _id: 0, ping: 1 }).sort({ $natural: -1 }).next()
}
