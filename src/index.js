import Koa from 'koa'

import { server } from './server.js'
import { routes } from './routes/index.routes.js'

const app = new Koa()

routes(app)
server(app)
