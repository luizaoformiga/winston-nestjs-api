import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const connectionMongoDB: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'garantti',
  autoLoadEntities: true,
  useUnifiedTopology: true,
  entities: [join(__dirname, '**/**.entity{.ts,.js')],
};
