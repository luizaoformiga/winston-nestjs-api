import * as colors from 'colors/safe';
import { format } from 'winston';

type Props = {
  context: string;
  level: string;
  timestamp: Date;
  message: string;
  meta: object;
};

export const winstonConsoleFormat = format.printf(
  ({ context, level, timestamp, message, ...meta }: Props) => {
    return `${colors.blue(
      level,
    )}: ${new Date().toLocaleString()}\t [${colors.yellow(
      context,
    )}] ${colors.green(message)} - ${JSON.stringify(meta)}`;
  },
);
