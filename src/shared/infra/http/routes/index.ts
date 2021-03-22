import { Router } from 'express';

import { orderRoutes } from '~modules/bling/infra/http/routes/orders.routes';
import { dealsRouter } from '~modules/pipedrive/infra/http/routes/deals.routes';

const router = Router();

router.use('/deals', dealsRouter);
router.use('/orders', orderRoutes);

export { router };
