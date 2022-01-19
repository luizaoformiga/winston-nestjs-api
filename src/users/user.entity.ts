import {
  BaseEntity,
  Entity,
  Unique,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  status: boolean;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  confirmationToken: string;

  @Column()
  recoverToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  async checkPassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
