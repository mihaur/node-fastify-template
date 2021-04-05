import app from './app.js'

const start = async () => {
  try {
    const fastify = await app({ logger: true })
    await fastify.listen(fastify.config.PORT)
  } catch (err) {
    console.error('Could not start API server', err)
    process.exit(1)
  }
}

start()
