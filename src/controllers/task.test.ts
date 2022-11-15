import { Request, Response } from 'express';
import { TaskController } from './tasks';

describe('Given TaskController', () => {
    const taskController = new TaskController();
    const req = {};
    const resp = {
        json: jest.fn(),
        end: jest.fn(),
    };
    test('Then ... getAll', () => {
        taskController.getAll(req as Request, resp as unknown as Response);
        expect(resp.json).toHaveBeenCalled();
        expect(resp.end).toHaveBeenCalled();
    });
});
