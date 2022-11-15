import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { Task } from './interfaces/task';
import importData from './mock/data.json' assert { type: 'json' };

export const app = express();
let data: Array<Task> = importData.tasks;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use((_req, _resp, next) => {
    console.log('Middleware');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.end();
});

app.get('/tasks', (req, res) => {
    res.json(data);
    res.end();
});

app.post('/tasks', (req, res) => {
    const newTask = {
        ...req.body,
        id: data.length + 1,
    };
    data.push(newTask);
    res.json(newTask);
    res.end();
});

app.patch('/tasks/:id', (req, res) => {
    const updateTask = {
        ...data.find((item) => item.id === +req.params.id),
        ...req.body,
    };
    data[data.findIndex((item) => item.id === +req.params.id)] = updateTask;
    res.json(updateTask);
    res.end();
});

app.delete('/tasks/:id', (req, res, next) => {
    if (!data.find((item) => item.id === +req.params.id)) {
        next(new Error('Not found'));
        return;
    }
    data = data.filter((item) => item.id !== +req.params.id);
    res.json({});
    res.end();
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: Error, _req: Request, resp: Response, next: NextFunction) => {
    console.log(error.message);
    let status = 500;
    if (error.name === 'ValidationError') {
        status = 406;
    } else {
        //
    }
    resp.status(status);
    const result = {
        status: status,
        type: error.name,
        error: error.message,
    };
    resp.json(result);
    resp.end();
});
