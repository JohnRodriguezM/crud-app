import { Controller, Get } from '@nestjs/common';

//* route handler - /tasks  - http://localhost:3000/tasks
// * if route is empty, it will be http://localhost:3000
//* inside controller, we can have multiple route handlers
@Controller('tasks')
export class TasksController {
  @Get()
  getAllTasks(): string {
    return 'get all tasks';
  }
}
