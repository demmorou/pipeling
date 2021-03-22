import { ICreateOrderDTO } from '../dtos/ICreateOrderDTO';
import { IFindOrdersDTO } from '../dtos/IFindOrdersDTO';
import { Order } from '../infra/typeorm/schemas/Order';

interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<void>;
  find(data: IFindOrdersDTO): Promise<Order[]>;
}

export { IOrdersRepository };
