import { inject, injectable } from 'tsyringe';

import { Order } from '../infra/typeorm/schemas/Order';
import { IOrdersRepository } from '../repositories/IOrdersRepository';

interface IRequest {
  date: string;
}

@injectable()
class ListOrdersService {
  constructor(
    @inject('OrdersRepository')
    private readonly ordersRepository: IOrdersRepository,
  ) {}

  public async execute({ date }: IRequest): Promise<Order[]> {
    const orders = await this.ordersRepository.find({ date });

    return orders;
  }
}

export { ListOrdersService };
