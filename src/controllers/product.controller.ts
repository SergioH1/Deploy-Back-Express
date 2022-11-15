import { Product } from '../interfaces/product.js';
import { NextFunction, Request, Response } from 'express';
import importData from '../mock/data.json' assert { type: 'json' };

let data: Array<Product> = importData.furniture;

export class ProductController {
    getAllController = (req: Request, resp: Response) => {
        resp.json(data);
        resp.end();
    };
    getController = (req: Request, resp: Response) => {
        data = data.filter((item) => item.id === +req.params.id);
        resp.send('Hello Server');
        resp.json(data);
        resp.end();
    };
    postController = (req: Request, resp: Response) => {
        const newProduct = {
            ...req.body,
            id: data.length + 1,
        };
        data.push(newProduct);
        resp.json(newProduct);
        resp.end();
    };
    patchController = (req: Request, resp: Response) => {
        const updateProduct = {
            ...data.find((item) => item.id === +req.params.id),
            ...req.body,
        };
        data[data.findIndex((item) => item.id === +req.params.id)] =
            updateProduct;
        resp.json(updateProduct);
        resp.end();
    };
    deleteController = (req: Request, resp: Response, next: NextFunction) => {
        if (!data.find((item) => item.id === +req.params.id)) {
            next(new Error('Not Found'));
            return;
        }
        data = data.filter((item) => item.id !== +req.params.id);
        resp.json({});
        resp.end();
    };
}
