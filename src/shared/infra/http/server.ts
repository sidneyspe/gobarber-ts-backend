import 'reflect-metadata';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import appErrorHandler from './middlewares/appErrorHandler';
import routes from './routes';

import '@shared/infra/typeorm/';

const PORT = 3333;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(appErrorHandler);

app.listen(PORT, () => {
  console.log('🚀 Server started on port ', PORT);
});
