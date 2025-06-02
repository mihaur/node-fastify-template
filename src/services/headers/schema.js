export const headersSchema = {
  querystring: {
    type: 'object',
    properties: {
      delay: { type: 'integer' }
    },
    additionalProperties: false
  },
  response: {
    200: {
      type: 'object',
      properties: {
      },
      additionalProperties: { type: 'string' }
    }
  }
}
