import { BaseEntity } from 'typeorm';

interface RequestProps extends BaseEntity {
  id: string;
  email: string;
  name: string;
  role: string;
  status: boolean;
  password: string;
  salt: string;
  confirmationToken: string;
  recoverToken: string;
  createdAt: Date;
  updatedAt: Date;
  checkPassword: (message: string) => Promise<boolean>;
}

export type Props = {
  user: RequestProps;
};
