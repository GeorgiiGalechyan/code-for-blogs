// Adding __dirname to the ES6 module
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Schema
const { default: schema } = await import('./schema.js')

export default {
  schema,
  dotenv: {
    path: `${__dirname}/.env`,
    debug: true,
  },
}
