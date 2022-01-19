import { Entity, Column, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Logger {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  user_id: string;

  @Column()
  action: string;

  @Column()
  entity_id: string;

  @Column({ type: 'timestamptz' })
  timestamp: Date;

  @Column()
  status: boolean;
}
