export const pingSchema = {
  description: 'Ping schema',
  tags: ['ping'],
  summary: 'Ping the service with possible delay',
  querystring: {
    type: 'object',
    properties: {
      delay: { type: 'integer' }
    },
    additionalProperties: false
  },
  params: {
    type: 'object',
    properties: {
      response: { type: 'string' }
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
