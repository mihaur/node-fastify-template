import { test, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { buildFastify, getLastLogItem } from './helper.js'

const lastLogItem = getLastLogItem('headers')

/* jscpd:ignore-start */
beforeEach(async t => {
  t.app = await buildFastify()
})

afterEach(async t => {
  t.app.close()
})

test('GET `/api/headers` route', async t => {
  const expectedHeaders = {
    'user-agent': 'lightMyRequest'
  }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/headers'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  const headers = res.json()
  delete headers.host
  assert.deepEqual(headers, expectedHeaders)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedHeaders)
})

test('GET `/api/headers` route with additional headers', async t => {
  const expectedHeaders = {
    'x-my-header': '42',
    'user-agent': 'lightMyRequest'
  }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/headers',
    headers: { 'x-my-header': '42' }
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  const headers = res.json()
  delete headers.host
  assert.deepEqual(headers, expectedHeaders)
  assert.deepEqual(await lastLogItem(t.app.mongo.db), expectedHeaders)
})

test('GET `/api/headers?delay=1` route', async t => {
  const expectedHeaders = {
    'user-agent': 'lightMyRequest'
  }

  const res = await t.app.inject({
    method: 'GET',
    url: '/api/headers?delay=1'
  })

  assert.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  assert.equal(res.statusCode, 200)
  const headers = res.json()
  delete headers.host
  assert.deepEqual(headers, expectedHeaders)
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
