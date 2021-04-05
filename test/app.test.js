import { test } from 'tap'
import { buildFastify } from './helper.js'

test('GET `/api/ping` route', async t => {
  const fastify = await buildFastify(t)

  const res = await fastify.inject({
    method: 'GET',
    url: '/api/ping'
  })
  t.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.strictEqual(res.statusCode, 200)
  t.deepEqual(res.json(), { ping: 'pong' })
  const result = await fastify.mongo.db.collection('access-log').find({}).limit(1).project({ _id: 0, ping: 1 }).sort({ $natural: -1 }).toArray()
  t.deepEqual(result[0], { ping: 'pong' })
})

test('GET `/api/ping?delay=1` route', async t => {
  const fastify = await buildFastify(t)

  const res = await fastify.inject({
    method: 'GET',
    url: '/api/ping?delay=1'
  })
  t.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.strictEqual(res.statusCode, 200)
  t.deepEqual(res.json(), { ping: 'pong' })
  const result = await fastify.mongo.db.collection('access-log').find({}).limit(1).project({ _id: 0, ping: 1 }).sort({ $natural: -1 }).toArray()
  t.deepEqual(result[0], { ping: 'pong' })
})

test('GET `/api/ping?delay=A` route', async t => {
  const fastify = await buildFastify(t)

  const res = await fastify.inject({
    method: 'GET',
    url: '/api/ping?delay=A'
  })
  t.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.strictEqual(res.statusCode, 400)
  t.strictEqual(res.statusMessage, 'Bad Request')
})

test('GET `/api/ping/bang` route', async t => {
  const fastify = await buildFastify(t)

  const res = await fastify.inject({
    method: 'GET',
    url: '/api/ping/bang'
  })
  t.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.strictEqual(res.statusCode, 200)
  t.deepEqual(res.json(), { ping: 'bang' })
  const result = await fastify.mongo.db.collection('access-log').find({}).limit(1).project({ _id: 0, ping: 1 }).sort({ $natural: -1 }).toArray()
  t.deepEqual(result[0], { ping: 'bang' })
})

test('GET `/api/ping/bang?delay=1` route', async t => {
  const fastify = await buildFastify(t)

  const res = await fastify.inject({
    method: 'GET',
    url: '/api/ping/bang?delay=1'
  })
  t.strictEqual(res.headers['content-type'], 'application/json; charset=utf-8')
  t.strictEqual(res.statusCode, 200)
  t.deepEqual(res.json(), { ping: 'bang' })
  const result = await fastify.mongo.db.collection('access-log').find({}).limit(1).project({ _id: 0, ping: 1 }).sort({ $natural: -1 }).toArray()
  t.deepEqual(result[0], { ping: 'bang' })
})
