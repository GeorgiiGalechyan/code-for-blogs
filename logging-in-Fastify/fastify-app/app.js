import fastify from 'fastify'
const { default: pino } = await import('./pino/config/config.js')

const app = fastify({ logger: pino.dev })
await app.register(import('./plugins/env/plugin.js'))
await app.register(import('./routes/home.js'))
await app.listen({ port: process.env.PORT || 5500 })
