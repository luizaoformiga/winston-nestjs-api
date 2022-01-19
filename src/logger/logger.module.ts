import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/users/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
})
export class LoggerModule {}
