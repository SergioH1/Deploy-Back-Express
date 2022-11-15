import { ProductController } from './product.controller';
import { Request, Response } from 'express';

describe('Given productController', () => {
    const productController = new ProductController();
    const req = {};
    const resp = {
        json: jest.fn(),
        end: jest.fn(),
    };
    test('Then...getAll action gets tested', () => {
        productController.getAllController(
            req as Request,
            resp as unknown as Response
        );
        expect(resp.json).toHaveBeenCalled();
        expect(resp.end).toHaveBeenCalled();
    });
});
