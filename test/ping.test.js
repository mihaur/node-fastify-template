import { test, beforeEach, afterEach } from 'node:test'
import { strict as assert } from 'node:assert'
import { buildFastify, getLastLogItem } from './helper.js'

const lastLogItem = getLastLogItem('ping')

/* jscpd:ignore-start */
beforeEach(async (t) => {
  t.app = await buildFastify()
})

afterEach(async (t) => {
  t.app.close()
})

test('GET `/api/ping` route', async t => {
  const expectedResult = { ping: 'pong' }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/ping'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.json(), expectedResult)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedResult)
})

test('GET `/api/ping?delay=1` route', async t => {
  const expectedResult = { ping: 'pong' }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/ping?delay=1'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.json(), expectedResult)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedResult)
})

test('GET `/api/ping?delay=A` route', async t => {
  const res = await t.app.inject({
    method: 'GET',
    url: '/api/ping?delay=A'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 400)
  assert.equal(res.statusMessage, 'Bad Request')
})

test('GET `/api/ping/bang` route', async t => {
  const expectedResult = { ping: 'bang' }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/ping/bang'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.json(), expectedResult)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedResult)
})

test('GET `/api/ping/bang?delay=1` route', async t => {
  const expectedResult = { ping: 'bang' }
  const res = await t.app.inject({
    method: 'GET',
    url: '/api/ping/bang?delay=1'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.json(), expectedResult)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedResult)
})
/* jscpd:ignore-end */
