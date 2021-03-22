import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';

import { router } from './routes';

import '~shared/container/jobs';
import '~shared/infra/typeorm';
import '~shared/container';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 💚 server running on port ${PORT}`);
});
