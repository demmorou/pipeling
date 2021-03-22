import { Entity, Column } from 'typeorm';

import { BaseSchema } from '~shared/infra/typeorm/schemas/BaseSchema';

@Entity('orders')
class Order extends BaseSchema {
  @Column()
  date: string;

  @Column()
  value: number;
}

export { Order };
