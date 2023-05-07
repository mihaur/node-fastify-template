import { test, beforeEach, afterEach } from 'node:test'
import { strict as assert } from 'node:assert'
import { buildFastify, getLastLogItem } from './helper.js'

const lastLogItem = getLastLogItem('headers')

/* jscpd:ignore-start */
beforeEach(async (t) => {
  t.app = await buildFastify()
})

afterEach(async (t) => {
  t.app.close()
})

test('GET `/api/headers` route', async t => {
  const expectedHeaders = {
    'user-agent': 'lightMyRequest',
    host: 'localhost:80'
  }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/headers'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.json(), expectedHeaders)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedHeaders)
})

test('GET `/api/headers` route additional headers', async t => {
  const expectedHeaders = {
    'x-my-header': '42',
    'user-agent': 'lightMyRequest',
    host: 'localhost:80'
  }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/headers',
    headers: { 'x-my-header': '42' }
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.json(), expectedHeaders)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedHeaders)
})

test('GET `/api/headers?delay=1` route', async t => {
  const expectedHeaders = {
    'user-agent': 'lightMyRequest',
    host: 'localhost:80'
  }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/headers'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  assert.deepEqual(res.json(), expectedHeaders)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedHeaders)
})

test('GET `/api/headers?delay=A` route', async t => {
  const res = await t.app.inject({
    method: 'GET',
    url: '/api/headers?delay=A'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 400)
  assert.equal(res.statusMessage, 'Bad Request')
})
/* jscpd:ignore-end */
