export const pingSchema = {
  querystring: {
    delay: { type: 'integer' }
  },
  response: {
    200: {
      type: 'object',
      properties: {
        ping: { type: 'string' }
      }
    }
  }
}
