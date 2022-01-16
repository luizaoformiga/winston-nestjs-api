import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';

import { AppModule } from './app.module';
import { winstonConfig } from './configs/winston.config';

async function bootstrap(): Promise<void> {
  const logger = WinstonModule.createLogger(winstonConfig);
  const app = await NestFactory.create(AppModule, { logger });

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
