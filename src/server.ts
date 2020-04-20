import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';

import appErrorHandler from './middlewares/AppErrorHandler';

import './database';

const PORT = 3333;
const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(appErrorHandler);

app.listen(PORT, () => {
  console.log('🚀 Server started on port ', PORT);
});
