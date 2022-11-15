import express, { NextFunction, Response, Request } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { productRouter } from './router/product.router.js';

export const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/furniture', productRouter);

app.use((error: Error, _req: Request, resp: Response, next: NextFunction) => {
    console.log(error.message);
    let status = 500;
    if (error.name === 'Validation Error') {
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

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.end();
});
