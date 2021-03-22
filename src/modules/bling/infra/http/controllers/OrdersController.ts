import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { ListOrdersService } from '~modules/bling/services/ListOrdersService';

class OrdersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listOrders = container.resolve(ListOrdersService);

    const orders = await listOrders.execute();

    return response.json(orders);
  }
}

export { OrdersController };
