import { PORT } from './config/env.js'

export async function server(app) {
  try {
    await app.listen(PORT)
    console.log('Listening on port 3000')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
