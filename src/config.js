export const config = {
  dotenv: true, // { debug: true },
  schema: {
    type: 'object',
    required: ['MONGODB_URI'],
    properties: {
      FASTIFY_PORT: {
        type: 'string',
        default: 3000
      },
      MONGODB_URI: {
        type: 'string',
        default: ''
      }
    }
  }
}
