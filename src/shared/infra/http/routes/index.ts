import { Router } from 'express';

import { dealsRouter } from '~modules/pipedrive/infra/http/routes/deals.routes';

const router = Router();

router.use('/deals', dealsRouter);

export { router };
