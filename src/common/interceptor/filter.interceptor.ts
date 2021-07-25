import {CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class FilterInterceptor implements NestInterceptor {
  private readonly logger = new Logger(FilterInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    this.logger.log('Before ...')
    return next.handle().pipe(tap(data => this.logger.log('After ...', data)));
  }
}
