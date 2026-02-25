export { setTimeout as sleep } from 'node:timers/promises'

export const createLogger = service =>
  async (document, collection) => {
    const result = { service, ...document, createdAt: new Date() }
    try {
      await collection.insertOne(result, { w: 1 })
    }
    catch (err) {
      console.error(`Unable to write log for ${service}`, err)
    }
    return result
  }
