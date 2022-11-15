import { Router } from 'express';
import { TaskController } from '../controllers/tasks.js';

export const taskRouter = Router();

const controller = new TaskController();

taskRouter.get('/', controller.getAll);
taskRouter.get('/:id', controller.get);
taskRouter.post('/', controller.post);
taskRouter.patch('/:id', controller.patch);
taskRouter.delete('/:id', controller.delete);
