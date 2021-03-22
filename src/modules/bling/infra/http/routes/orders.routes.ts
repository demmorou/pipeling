/* eslint-disable no-useless-escape */
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { OrdersController } from '../controllers/OrdersController';

const orderRoutes = Router();

const ordersController = new OrdersController();

orderRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      date: Joi.string().regex(
        /^(0?[1-9]|[12][0-9]|3[01])[\-\-](0?[1-9]|1[012])[\-\-]\d{4}$/,
      ),
    },
  }),
  ordersController.index,
);

export { orderRoutes };
