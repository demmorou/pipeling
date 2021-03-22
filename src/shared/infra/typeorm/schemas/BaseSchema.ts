import {
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

class BaseSchema {
  @ObjectIdColumn()
  readonly id: ObjectID;

  @CreateDateColumn({ type: 'timestamp' })
  readonly created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  readonly updated_at: Date;
}

export { BaseSchema };
