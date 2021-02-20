export async function logAccess (document, collection) {
  const result = { ...document, createdAt: new Date() }
  await collection.insertOne(result, { w: 1 })
  return result
}
