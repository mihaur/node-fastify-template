export { setTimeout as sleep } from 'node:timers/promises'

export const createLogger = (service) =>
  (document, collection) => {
    const result = { service, ...document, createdAt: new Date() }
    collection.insertOne(result, { w: 1 })
    return result
  }
