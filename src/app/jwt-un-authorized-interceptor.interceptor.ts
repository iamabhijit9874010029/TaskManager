import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class JwtUnAuthorizedInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do nothing for now
          }
        },
        (error: any) => {
          if (error.status === 401) {
            // handle 401 errors
            console.log("Unauthorized request - 401");
            // Optionally, you can redirect to the login page or show a modal
          }
        }
      )
    );
  }
}
