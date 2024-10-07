export const pingSchema = {
  querystring: {
    type: 'object',
    properties: {
      delay: { type: 'integer' }
    }
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
