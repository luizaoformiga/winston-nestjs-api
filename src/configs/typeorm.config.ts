import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'garantti.db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
