import { TypeOrmModuleOptions } from '@nestjs/typeorm';
//import { createConnection, Connection } from 'typeorm';

export const connectionMongoDB: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'garantti',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
