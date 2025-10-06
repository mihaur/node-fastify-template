import { test, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { buildFastify } from './helper.js'

let app

beforeEach(async () => {
  app = await buildFastify()
})

afterEach(async () => {
  await app.close()
})

test('GET `/api/docs` (swagger-ui) should return HTML', async () => {
  const res = await app.inject({
    method: 'GET',
    url: '/api/docs'
  })
  assert.equal(res.statusCode, 200)
  assert.match(res.headers['content-type'], /text\/html/)
  assert.match(res.body, /swagger-ui/i)
})

test('GET `/api/docs/json` should return OpenAPI JSON', async () => {
  const res = await app.inject({
    method: 'GET',
    url: '/api/docs/json'
  })
  assert.equal(res.statusCode, 200)
  assert.match(res.headers['content-type'], /application\/json/)
  const json = JSON.parse(res.body)
  assert.equal(json.openapi, '3.0.0')
  assert.equal(json.info.title, 'node-fastify-template')
})

test('GET `/api/docs/nonexistent` should return 404', async () => {
  const res = await app.inject({
    method: 'GET',
    url: '/api/docs/nonexistent'
  })
  assert.equal(res.statusCode, 404)
})
