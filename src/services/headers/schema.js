export const headersSchema = {
  querystring: {
    delay: { type: 'integer' }
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
