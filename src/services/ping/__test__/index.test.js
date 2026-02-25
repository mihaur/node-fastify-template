import { test } from 'node:test'
import assert from 'node:assert/strict'
import routes from '../index.js'
import { createMockFastify, createMockReply, createMockRequest } from '../../__test__/helpers.js'

/* jscpd:ignore-start */
test('ping route handler returns pong', async t => {
  const mockFastify = createMockFastify()
  await routes(mockFastify)

  const request = createMockRequest()
  const reply = createMockReply()

  await mockFastify.routes['/'](request, reply)

  assert.equal(reply.sent, true)
  assert.deepEqual(reply.payload, { ping: 'pong' })
})

test('ping route with custom response', async t => {
  const mockFastify = createMockFastify()
  await routes(mockFastify)

  const request = createMockRequest({
    params: { response: 'test' }
  })
  const reply = createMockReply()

  await mockFastify.routes['/:response'](request, reply)

  assert.equal(reply.sent, true)
  assert.deepEqual(reply.payload, { ping: 'test' })
})

test('ping route with delay parameter', async t => {
  const mockFastify = createMockFastify()
  await routes(mockFastify)

  const request = createMockRequest({
    query: { delay: 100 }
  })
  const reply = createMockReply()

  await mockFastify.routes['/'](request, reply)

  assert.equal(reply.sent, true)
  assert.deepEqual(reply.payload, { ping: 'pong' })
})
/* jscpd:ignore-end */
