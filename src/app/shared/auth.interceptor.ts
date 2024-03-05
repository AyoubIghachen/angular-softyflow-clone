import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { DecodedToken } from '../interfaces/DecodedToken';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) { }

    isTokenExpired(token: string): boolean {
        const decodedToken = jwtDecode(token) as DecodedToken;
        const dateNow = new Date();

        return decodedToken.exp < dateNow.getTime() / 1000;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.endsWith('refresh-token')) {
            const token = this.cookieService.get('token');

            if (token && this.isTokenExpired(token)) {
                return from(this.authService.refreshToken()).pipe(
                    switchMap((response: any) => {
                        const newToken = response.accessToken;
                        this.cookieService.set('token', newToken);
                        
                        return next.handle(req);
                        // const clonedReq = req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
                        // return next.handle(clonedReq);
                    }),
                    catchError((error) => {
                        console.log(error);
                        this.cookieService.delete('token');
                        this.router.navigate(['/']);
                        return throwError(error);
                    })
                );
            }
        }

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.cookieService.delete('token');
                    this.router.navigate(['/']);
                }
                return throwError(error);
            })
        );
    }
}