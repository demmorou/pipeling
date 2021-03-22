import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { Order } from '../infra/typeorm/schemas/Order';

interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<void>;
  find(): Promise<Order[]>;
}

export { IOrdersRepository };
