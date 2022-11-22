export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// export async function processRequest (response, service, result, collection) {
//   await logAccess('headers', result, fastify.mongo.db.collection('access-log'))
//   await sleep(request.query.delay)
//   // nosemgrep: javascript.express.security.audit.xss.direct-response-write.direct-response-write
//   response.send(result)
// }

export async function logAccess (service, document, collection) {
  const result = { service, ...document, createdAt: new Date() }
  await collection.insertOne(result, { w: 1 })
  return result
}
