import * as colors from 'colors/safe';
import { format } from 'winston';

export const winstonConsoleFormat = format.printf(
  ({ context, level, timestamp, message, ...meta }) => {
    return `${colors.blue(
      level,
    )}: ${new Date().toLocaleString()}\t [${colors.yellow(
      context,
    )}] ${colors.green(message)} - ${JSON.stringify(meta)}`;
  },
);
