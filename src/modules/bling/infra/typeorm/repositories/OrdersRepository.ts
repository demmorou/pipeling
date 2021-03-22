import { getMongoRepository, MongoRepository, ObjectLiteral } from 'typeorm';

import { ICreateOrderDTO } from '~modules/bling/dtos/ICreateOrderDTO';
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

  public async find(): Promise<Order[]> {
    const orders = await this.ormRepository.find();

    return orders;
  }
}

export { OrdersRepository };
