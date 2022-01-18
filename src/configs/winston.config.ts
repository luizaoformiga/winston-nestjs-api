import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import { winstonConsoleFormat } from './winston.format';

import { MongoDBConnectionOptions } from 'winston-mongodb';
import 'winston-mongodb';

const options: MongoDBConnectionOptions = {
  level: 'info',
  db: 'garantti',
  collection: 'logs',
  options: {
    useUnifiedTopology: true,
  },
};

export const winstonConfig: WinstonModuleOptions = {
  levels: winston.config.npm.levels,
  level: 'verbose',
  transports: [
    new winston.transports.MongoDB(options),
    new winston.transports.Console({
      format: winstonConsoleFormat,
    }),
    new winston.transports.File({
      level: 'verbose',
      filename: 'application.log',
      dirname: 'logs',
    }),
  ],
};
