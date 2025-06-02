import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createLogger } from '../utils.js'

// ensure logger doesn't throw when insertOne fails

/** @type {Error[]} */
const loggedErrors = []

function mockConsoleError (...args) {
  loggedErrors.push(args)
}

test('createLogger handles insert errors', async () => {
  const logger = createLogger('test-service')
  const document = { foo: 'bar' }
  const mockCollection = {
    async insertOne () {
      throw new Error('db down')
    }
  }

  const original = console.error
  console.error = mockConsoleError
  const result = await logger(document, mockCollection)
  console.error = original

  assert.equal(result.foo, 'bar')
  assert.equal(result.service, 'test-service')
  assert.ok(result.createdAt instanceof Date)
  assert.equal(loggedErrors.length, 1)
})
