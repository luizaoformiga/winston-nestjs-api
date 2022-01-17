import { createParamDecorator } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { Props } from './dto/get-user.interface';

export const GetUser = createParamDecorator(
  (data, req: Props): User => {
    return req.user;
  },
);
