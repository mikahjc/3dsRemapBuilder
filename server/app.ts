import createError from 'http-errors';
import express from 'express';
import {NextFunction, Request, Response} from 'express';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import IndexRouter from './routes';
import HttpException from './exceptions/http-exception';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'build')));

app.use('/api', IndexRouter);
app.get('*', (req: Request, res: Response) => {
  res.sendFile('build/index.html', { root: __dirname });
});

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// TODO Web Template Studio: Add your own error handler here.
if (process.env.NODE_ENV === 'production') {
  // Do not send stack trace of error message when in production
  app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.send('Error occurred while handling the request.');
  });
} else {
  // Log stack trace of error message while in development
  app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    // tslint:disable-next-line:no-console
    console.log(err);
    res.send(err.message);
  });
}

export default app;
