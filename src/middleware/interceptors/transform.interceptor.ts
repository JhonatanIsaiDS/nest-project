import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PageResult } from 'src/helpers/PageResult.helper';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return next.handle().pipe(
      map((data) => {
        const result = {
          headers: {
            code: 200,
            message: 'OK',
          },
          data: data instanceof PageResult ? data.data : data,
          page: data instanceof PageResult ? data.page : null,
        };
        if (
          typeof data === 'undefined' ||
          data === null ||
          typeof data?.page === 'undefined' ||
          data?.page === null
        ) {
          delete result.page;
        }

        if (data instanceof Array) {
          console.log(`:: Result items: ${data?.length}`);
        }
        if (data?.data instanceof Array) {
          console.log(`:: Result items: ${data?.data?.length}`);
        }

        return result;
      }),
      catchError((error) => {
        if (error instanceof HttpException) {
          return throwError(() => {
            return error;
          });
        }

        let statusCode = 500;
        let errorMsg = 'Internal Server Error';
        let baseError = error;

        errorMsg = error.message?.message ?? error.message;
        baseError.customStatusCode = statusCode;
        baseError.customMessage = errorMsg;

        return throwError(() => {
          return baseError;
        });
      }),
      tap(() => console.log(`:: ExecutionTime: ${Date.now() - now}ms `)),
    );
  }
}
