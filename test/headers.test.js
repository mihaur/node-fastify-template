import { test } from 'tap'
import { buildFastify, getLastLogItem } from './helper.js'

const lastLogItem = getLastLogItem('headers')

/* jscpd:ignore-start */
test('GET `/api/headers` route', async t => {
  const app = await buildFastify(t)

  const res = await app.inject({
    method: 'GET',
    url: '/api/headers'
  })
  const expectedHeaders = {
    'user-agent': 'lightMyRequest',
    host: 'localhost:80'
  }
  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 200)
  t.same(res.json(), expectedHeaders)
  t.same(expectedHeaders, await lastLogItem(app.mongo.db))
})

test('GET `/api/headers` route additional headers', async t => {
  const app = await buildFastify(t)

  const res = await app.inject({
    method: 'GET',
    url: '/api/headers',
    headers: { 'x-my-header': 42 }
  })
  const expectedHeaders = {
    'x-my-header': 42,
    'user-agent': 'lightMyRequest',
    host: 'localhost:80'
  }
  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 200)
  t.same(res.json(), expectedHeaders)
  t.same(expectedHeaders, await lastLogItem(app.mongo.db))
})

test('GET `/api/headers?delay=1` route', async t => {
  const app = await buildFastify(t)

  const res = await app.inject({
    method: 'GET',
    url: '/api/headers'
  })
  const expectedHeaders = {
    'user-agent': 'lightMyRequest',
    host: 'localhost:80'
  }
  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 200)
  t.same(res.json(), expectedHeaders)
  t.same(expectedHeaders, await lastLogItem(app.mongo.db))
})

test('GET `/api/headers?delay=A` route', async t => {
  const app = await buildFastify(t)

  const res = await app.inject({
    method: 'GET',
    url: '/api/headers?delay=A'
  })

  t.equal(res.headers['content-type'], 'application/json; charset=utf-8')
  t.equal(res.statusCode, 400)
  t.equal(res.statusMessage, 'Bad Request')
})
/* jscpd:ignore-end */
