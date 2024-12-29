
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TransformationInterception<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data, error)=>({
        data,
        statuscode: context.switchToHttp().getResponse().statusCode,
        message: 'Request processed successfully!'
      }))
    );
  }
}
