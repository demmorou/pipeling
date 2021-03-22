import { Router } from 'express';

import { OrdersController } from '../controllers/OrdersController';

const orderRoutes = Router();

const ordersController = new OrdersController();

orderRoutes.get('/', ordersController.index);

export { orderRoutes };
