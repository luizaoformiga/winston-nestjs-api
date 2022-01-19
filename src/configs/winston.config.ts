import { WinstonModuleOptions } from 'nest-winston';
import * as winston from 'winston';
import { MongoDBConnectionOptions } from 'winston-mongodb';
import 'winston-mongodb';

import { winstonConsoleFormat } from './winston.format';

const options: MongoDBConnectionOptions = {
  level: 'info',
  db: 'mongodb://localhost:27017/garantti',
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
