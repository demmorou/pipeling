import { container } from 'tsyringe';

import { OrdersRepository } from '../infra/typeorm/repositories/OrdersRepository';
import { IOrdersRepository } from '../repositories/IOrdersRepository';

container.registerSingleton<IOrdersRepository>(
  'OrdersRepository',
  OrdersRepository,
);
