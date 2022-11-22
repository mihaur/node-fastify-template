export { setTimeout as sleep } from 'node:timers/promises'

export const createLogger = service =>
  async (document, collection) => {
    const result = { service, ...document, createdAt: new Date() }
    await collection.insertOne(result, { w: 1 })
    return result
  }
