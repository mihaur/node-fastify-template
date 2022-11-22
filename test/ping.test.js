import { test } from 'tap'
import { buildFastify, getLastLogItem } from './helper.js'

const lastLogItem = getLastLogItem('ping')

/* jscpd:ignore-start */
test('GET `/api/ping` route', async t => {
  const app = await buildFastify(t)
  const expectedResult = { ping: 'pong' }

  const res = await app.inject({
    method: 'GET',
    url: '/api/ping'
  })

  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 200)
  t.same(res.json(), expectedResult)
  t.same(await lastLogItem(app.mongo.db), expectedResult)
})

test('GET `/api/ping?delay=1` route', async t => {
  const app = await buildFastify(t)
  const expectedResult = { ping: 'pong' }

  const res = await app.inject({
    method: 'GET',
    url: '/api/ping?delay=1'
  })

  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 200)
  t.same(res.json(), expectedResult)
  t.same(await lastLogItem(app.mongo.db), expectedResult)
})

test('GET `/api/ping?delay=A` route', async t => {
  const app = await buildFastify(t)

  const res = await app.inject({
    method: 'GET',
    url: '/api/ping?delay=A'
  })

  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 400)
  t.equal(res.statusMessage, 'Bad Request')
})

test('GET `/api/ping/bang` route', async t => {
  const app = await buildFastify(t)
  const expectedResult = { ping: 'bang' }

  const res = await app.inject({
    method: 'GET',
    url: '/api/ping/bang'
  })

  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 200)
  t.same(res.json(), expectedResult)
  t.same(await lastLogItem(app.mongo.db), expectedResult)
})

test('GET `/api/ping/bang?delay=1` route', async t => {
  const app = await buildFastify(t)
  const expectedResult = { ping: 'bang' }
  const res = await app.inject({
    method: 'GET',
    url: '/api/ping/bang?delay=1'
  })

  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 200)
  t.same(res.json(), expectedResult)
  t.same(await lastLogItem(app.mongo.db), expectedResult)
})
/* jscpd:ignore-end */
