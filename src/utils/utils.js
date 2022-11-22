export { setTimeout as sleep } from 'node:timers/promises'

export async function logAccess (service, document, collection) {
  const result = { service, ...document, createdAt: new Date() }
  await collection.insertOne(result, { w: 1 })
  return result
}
