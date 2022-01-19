import {
  Injectable,
  Inject,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { Logger } from 'winston';
import { Observable } from 'rxjs';
import { Request } from "express";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  constructor(@Inject('winston') private logger: Logger) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.log(context.switchToHttp().getRequest());
    return next.handle();
  }

  private log(req: Request): void {
    const body = { ...req.body };
    delete body.password;
    delete body.passwordConfirmation;

    const user = (req as any).user;
    const userEmail = user ? user.email : null;

    this.logger.info({
      timestamp: new Date().toISOString(),
      method: req.method,
      action: req.res.statusCode,
      route: req.route.path,
      user_id: "",
      entity_id: "",
      entity_type: "",
      data: {
        body: body,
        query: req.query,
        params: req.params,
      },
    });
  }
}
