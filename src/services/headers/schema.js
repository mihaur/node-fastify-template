export const headersSchema = {
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
      },
      additionalProperties: true
    }
  }
}
