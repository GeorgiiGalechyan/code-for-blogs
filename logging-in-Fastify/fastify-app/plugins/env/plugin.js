// imports
import fp from 'fastify-plugin'

// Plugin
const { default: options } = await import('./options.js')

async function useEnv(fastify) {
  await fastify
    .register(import('@fastify/env'), options)
    .after((err) => (err ? console.error(err) : console.log('env - after')))
    .ready((err) => (err ? console.error(err) : console.log('env - ready')))
}

export default fp(useEnv, { name: 'env-use-plugin' })
