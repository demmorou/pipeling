import { inject, injectable } from 'tsyringe';

import { Order } from '../infra/typeorm/schemas/Order';
import { IOrdersRepository } from '../repositories/IOrdersRepository';

@injectable()
class ListOrdersService {
  constructor(
    @inject('OrdersRepository')
    private readonly ordersRepository: IOrdersRepository,
  ) {}

  public async execute(): Promise<Order[]> {
    const orders = await this.ordersRepository.find();

    return orders;
  }
}

export { ListOrdersService };
