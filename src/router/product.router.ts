import { ProductController } from '../controllers/product.controller.js';
import { Router } from 'express';

export const productRouter = Router();

const controller = new ProductController();

productRouter.get('/', controller.getAllController);

productRouter.get('/:id', controller.getController);

productRouter.post('/', controller.postController);

productRouter.patch('/:id', controller.patchController);

productRouter.delete('/:id', controller.deleteController);
