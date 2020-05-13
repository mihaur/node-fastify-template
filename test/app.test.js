import { test } from 'tap'
import app from '../src/app'

test('GET `/ping` route', async t => {
  const fastify = app()
  await fastify.ready()

  t.tearDown(fastify.close.bind(fastify))

  const res = await fastify.inject({
    method: 'GET',
    url: '/ping'
  })
  t.strictEqual(res.statusCode, 200)
  t.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.deepEqual(res.json(), { ping: 'pong' })
  const result = await fastify.mongo.db.collection('access-log').find({}).limit(1).project({ _id: 0, ping: 1 }).sort({ $natural: -1 }).toArray()
  t.deepEqual(result[0], { ping: 'pong' })
})

test('GET `/ping/bang` route', async t => {
  const fastify = app()
  await fastify.ready()

  t.tearDown(fastify.close.bind(fastify))

  const res = await fastify.inject({
    method: 'GET',
    url: '/ping/bang'
  })
  t.strictEqual(res.statusCode, 200)
  t.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.deepEqual(res.json(), { ping: 'bang' })
  const result = await fastify.mongo.db.collection('access-log').find({}).limit(1).project({ _id: 0, ping: 1 }).sort({ $natural: -1 }).toArray()
  t.deepEqual(result[0], { ping: 'bang' })
})
