import Router from 'koa-router'
import { getTasks, getTask } from '../controllers/tasks.controller.js'

const router = new Router({ prefix: '/tasks' })

router.get('/', getTasks)
router.get('/:id', getTask)

export default router
