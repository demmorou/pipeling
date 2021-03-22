import {
  FindManyOptions,
  getMongoRepository,
  MongoRepository,
  ObjectLiteral,
} from 'typeorm';

import { ICreateOrderDTO } from '~modules/bling/dtos/ICreateOrderDTO';
import { IFindOrdersDTO } from '~modules/bling/dtos/IFindOrdersDTO';
import { IOrdersRepository } from '~modules/bling/repositories/IOrdersRepository';

import { Order } from '../schemas/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: MongoRepository<Order>;

  constructor() {
    this.ormRepository = getMongoRepository(Order, 'default');
  }

  public async create({ date, value }: ICreateOrderDTO): Promise<void> {
    const update: ObjectLiteral = {
      $set: { value: { $sum: ['$value', value] } },
    };

    await this.ormRepository.updateOne({ date }, [update], {
      upsert: true,
    });
  }

  public async find({ date }: IFindOrdersDTO): Promise<Order[]> {
    let conditional: FindManyOptions<Order> = {};

    if (date) {
      conditional = { where: { date } };
    }

    const orders = await this.ormRepository.find(conditional);

    return orders;
  }
}

export { OrdersRepository };
