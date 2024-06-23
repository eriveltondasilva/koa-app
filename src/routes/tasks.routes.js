import Router from 'koa-router'
import { getTask, getTasks } from '../controllers/tasks.controller.js'

const router = new Router({ prefix: '/tasks' })

router.get('/', getTasks)
router.get('/:id', getTask)

export default router
