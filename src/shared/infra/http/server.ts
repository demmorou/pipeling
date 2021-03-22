import 'dotenv/config';
import 'reflect-metadata';
import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';

import { handleGlobalErrors } from '~shared/errors/HandleGlobalErrors';

import { router } from './routes';

import '~shared/container/jobs';
import '~shared/infra/typeorm';
import '~shared/container';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errors());
app.use(handleGlobalErrors);

app.listen(PORT, () => {
  console.log(`🚀 💚 server running on port ${PORT}`);
});
