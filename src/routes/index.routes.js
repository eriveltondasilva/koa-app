import Router from 'koa-router'
import homeRoutes from './home.routes.js'
import tasksRoutes from './tasks.routes.js'

const router = new Router({ prefix: '/api/v1' })

export function routes(app) {
  router.use(tasksRoutes.routes())
  router.use(homeRoutes.routes())

  app.use(router.routes())
  app.use(router.allowedMethods())
}
