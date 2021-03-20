import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';

import '~shared/container';
import '~shared/container/jobs';
import { router } from './routes';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀 💚 server running on port ${PORT}`);
});
