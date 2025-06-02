import { test } from 'node:test'
import assert from 'node:assert/strict'
import routes from '../index.js'
import { createMockFastify, createMockReply, createMockRequest } from '../../__test__/helpers.js'

/* jscpd:ignore-start */
test('headers route returns request headers without the host header', async (t) => {
  const mockFastify = createMockFastify()
  await routes(mockFastify)

  const request = createMockRequest({
    headers: {
      host: 'example.com',
      'user-agent': 'test-agent',
      accept: 'application/json'
    }
  })
  const reply = createMockReply()

  await mockFastify.routes['/'](request, reply)

  assert.equal(reply.sent, true)
  assert.deepEqual(reply.payload, {
    'user-agent': 'test-agent',
    accept: 'application/json'
  })
  assert.equal(reply.payload.host, undefined)
})

test('headers route with delay parameter', async (t) => {
  const mockFastify = createMockFastify()
  await routes(mockFastify)

  const request = createMockRequest({
    query: { delay: 100 },
    headers: {
      host: 'example.com',
      'content-type': 'application/json'
    }
  })
  const reply = createMockReply()

  await mockFastify.routes['/'](request, reply)

  assert.equal(reply.sent, true)
  assert.deepEqual(reply.payload, {
    'content-type': 'application/json'
  })
  assert.equal(reply.payload.host, undefined)
})

test('headers route with empty headers', async (t) => {
  const mockFastify = createMockFastify()
  await routes(mockFastify)

  const request = createMockRequest()
  const reply = createMockReply()

  await mockFastify.routes['/'](request, reply)

  assert.equal(reply.sent, true)
  assert.deepEqual(reply.payload, {})
})
/* jscpd:ignore-end */
