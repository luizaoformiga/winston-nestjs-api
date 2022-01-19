import { BaseEntity, Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Logger extends BaseEntity {
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
