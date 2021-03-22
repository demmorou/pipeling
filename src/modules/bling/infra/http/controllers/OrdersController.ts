import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ListOrdersService } from '~modules/bling/services/ListOrdersService';

interface IIndexQuery {
  date: string;
}

class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { date } = (request.query as unknown) as IIndexQuery;

    const listOrders = container.resolve(ListOrdersService);

    const orders = await listOrders.execute({ date });

    return response.json(orders);
  }
}

export { OrdersController };
