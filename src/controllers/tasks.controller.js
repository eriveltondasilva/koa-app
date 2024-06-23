import tasks from '../data.json' assert { type: 'json' }

export function getTasks(ctx) {
  ctx.body = tasks
}

export function getTask(ctx) {
  const { id } = ctx.params

  if (isNaN(id)) {
    ctx.throw(400, 'Missing task id')
    return
  }

  const task = tasks.find((task) => task.id === Number(id))

  if (!task) {
    ctx.throw(404, 'Task not found')
    return
  }

  ctx.body = task
}
