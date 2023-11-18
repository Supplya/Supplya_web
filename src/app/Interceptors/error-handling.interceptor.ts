// error-handling.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NetworkStatusService } from '../Services/network-status.service';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private networkStatusService: NetworkStatusService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Check for internet connectivity
    if (!navigator.onLine) {
      this.networkStatusService.setOnlineStatus(false);
      return throwError('No internet connection');
    }

    // Proceed with the HTTP request and handle errors
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle API-related errors
        if (error.status === 0) {
          const errorMessage = 'API is not available.';
          console.error(errorMessage);
        }

        return throwError(error);
      })
    );
  }
}
