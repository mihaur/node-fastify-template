import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createLogger } from '../utils.js'

/* jscpd:ignore-start */
test('createLogger inserts document and returns result', async () => {
  const calls = []
  const mockCollection = {
    async insertOne (doc, options) {
      calls.push({ doc, options })
    }
  }

  const logger = createLogger('service')
  const document = { foo: 'bar' }

  const result = await logger(document, mockCollection)

  assert.equal(calls.length, 1)
  const { doc, options } = calls[0]
  assert.deepEqual(options, { w: 1 })
  assert.equal(doc.service, 'service')
  assert.equal(doc.foo, 'bar')
  assert.ok(doc.createdAt instanceof Date)
  assert.deepEqual(result, doc)
})
/* jscpd:ignore-end */
