export const headersSchema = {
  description: 'Headers schema',
  tags: ['headers'],
  summary: 'Headers end-points',
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
      },
      additionalProperties: { type: 'string' }
    }
  }
}
