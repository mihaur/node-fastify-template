export const pingSchema = {
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
        ping: { type: 'string' }
      },
      required: ['ping'],
      additionalProperties: false
    }
  }
}
